import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
import Products from "./ProductModel.js";

const { DataTypes } = Sequelize;

const Orders = db.define(
  "order",
  {
    orderNumber: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    status: {
      type: DataTypes.ENUM("pending", "processing", "completed", "cancelled"),
      allowNull: false,
      defaultValue: "pending",
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    invoiceId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    urlInvoice: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    userUuid: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    productUuid: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // Informasi lain terkait pemesanan, misalnya alamat pengiriman, metode pembayaran, dll.
  },
  {
    freezeTableName: true,
  }
);

Users.hasMany(Orders);
Orders.belongsTo(Users, { foreignKey: "userUuid" });
Products.hasMany(Orders);
Orders.belongsTo(Products, { foreignKey: "productUuid" });

export default Orders;
