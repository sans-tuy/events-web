import Orders from "../models/OrderModel.js";
import Products from "../models/ProductModel.js";

export const createOrder = async (req, res) => {
  const { quantity, productUuid, status } = req.body;
  const prod = await Products.findOne({
    where: {
      uuid: productUuid,
    },
  });
  if (!prod) {
    return res.status(404).json({ msg: "produk tidak ditemukan" });
  }
  try {
    await Orders.create({
      status: status,
      quantity: quantity,
      totalPrice: prod.price * quantity,
      userUuid: req.userId,
      productUuid: productUuid,
    });
    res.status(201).json({ msg: "Orders Created Successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    let response;
    response = await Orders.findAll({
      attributes: [
        "orderNumber",
        "orderDate",
        "status",
        "quantity",
        "invoiceId",
        "urlInvoice",
        "totalPrice",
        "userUuid",
        "productUuid",
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
