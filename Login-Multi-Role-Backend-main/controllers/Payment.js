import dotenv from "dotenv";
import x from "./Xendit.js";
import Orders from "../models/OrderModel.js";
import Products from "../models/ProductModel.js";
import Purchase from "../models/PurchaseModel.js";
import { Sequelize } from "sequelize";

dotenv.config();

export const getBalancePayment = async (req, res) => {
  const { Balance } = x;
  const b = new Balance({});
  try {
    const r = await b.getBalance({
      accountType: Balance.AccountType.Cash,
    });
    const money = `Cash balance: ${r.balance}`;
    console.log("Cash balance:", r.balance);
    res.status(200).json(money);
  } catch (e) {
    res.status(500).json({ msg: "error.message" });
  }
};

export const notifInvoice = async (req, res) => {
  const {
    id,
    external_id,
    user_id,
    is_high,
    payment_method,
    status,
    merchant_name,
    amount,
    paid_amount,
    bank_code,
    paid_at,
    payer_email,
    description,
    adjusted_received_amount,
    fees_paid_amount,
    updated,
    created,
    currency,
    payment_channel,
    payment_destination,
  } = req.body;

  const sequelize = new Sequelize({
    host: "localhost",
    dialect: "mysql",
    username: "root",
    password: "",
    database: "multi_level_login",
  });

  try {
    console.log("MASUK NOTIFIKASI\n\n\n");
    if (status === "PAID") {
      await sequelize.transaction(async (transaction) => {
        const getOrder = await Orders.findOne({
          where: {
            orderNumber: external_id,
          },
        });
        await Products.update(
          {
            quantity: sequelize.literal(
              `quantity - (SELECT quantity FROM \`order\` WHERE orderNumber = '${external_id}')`
            ),
          },
          {
            where: {
              uuid: getOrder.productUuid,
            },
          },
          { transaction }
        );
        await Orders.update(
          {
            status: "completed",
          },
          {
            where: {
              orderNumber: external_id,
            },
          },
          { transaction }
        );

        // const retrievedInvoice = await i.getInvoice({ invoiceID: invoice.id });
        // console.log("retrieved invoice", retrievedInvoice);

        // await Purchase.create({
        //   paid_at: new Date(),
        //   price: amount,
        //   paymentMethod: retrievedInvoice,
        //   url: retrievedInvoice,
        //   orderNumber,
        // });

        res.status(201).json("order telah dibayar");
      });
    }

    // const expiredInvoice = await i.expireInvoice({
    //   invoiceID: retrievedInvoice.id,
    // });
    // console.log('expired invoice', expiredInvoice);

    // const invoices = await i.getAllInvoices();
    // console.log('first 10 invoices', invoices);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};

export const createInvoice = async (req, res) => {
  const {
    payer_email,
    description,
    amount,
    customer_name,
    productUuid,
    orderNumber,
  } = req.body;
  const { Invoice } = x;
  const i = new Invoice({});
  const sequelize = new Sequelize({
    host: "localhost",
    dialect: "mysql",
    username: "root",
    password: "",
    database: "multi_level_login",
  });
  const getOrder = await Orders.findOne({
    where: {
      orderNumber,
    },
  });

  const getProduct = await Products.findOne({
    where: {
      uuid: productUuid,
    },
  });
  if (!getOrder) {
    return res.status(404).json("order tidak ditemukan");
  }

  if (getOrder.status === "completed") {
    return res.status(400).json("order telah dibayar");
  }

  const invoiceOptions = {
    externalID: orderNumber,
    payerEmail: payer_email,
    description,
    amount,
    customer: {
      given_names: customer_name,
      email: payer_email,
    },
    customerNotificationPreference: {
      invoice_created: ["email"],
    },
  };

  try {
    await sequelize.transaction(async (transaction) => {
      const ordersCount = await Orders.count({
        where: {
          productUuid,
        },
      });

      if (ordersCount > getProduct.quantity) {
        return res.status(400).json("produk telah habis terjual");
      }

      let invoice = await i.createInvoice(invoiceOptions);
      await Orders.update(
        {
          invoiceId: invoice.id,
          urlInvoice: invoice.invoice_url,
        },
        {
          where: {
            orderNumber,
          },
        },
        { transaction }
      );
      await Orders.update(
        {
          status: "processing",
        },
        {
          where: {
            orderNumber: invoice.external_id,
          },
        },
        { transaction }
      );

      res.status(201).json(invoice);
    });
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};

export const getInvoice = async (req, res) => {
  const { Invoice } = x;
  const i = new Invoice({});
  try {
    const retrievedInvoice = await i.getInvoice({
      invoiceID: req.params.invoiceId,
    });
    console.log("retrieved invoice", retrievedInvoice);

    res.status(200).json(retrievedInvoice);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};
