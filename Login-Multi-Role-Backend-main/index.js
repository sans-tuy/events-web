import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import path from "path";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import PaymentRoute from "./routes/PaymentRoute.js";
import OrderRoute from "./routes/OrderRoute.js";
import fileUpload from "express-fileupload";
import Users from "./models/UserModel.js";
import { DataTypes, Sequelize } from "sequelize";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);
const sequelize = new Sequelize({
  host: "localhost",
  dialect: "mysql",
  username: "root",
  password: "",
  database: "multi_level_login",
});
const queryInterface = sequelize.getQueryInterface();

const store = new sessionStore({
  db: db,
});

// (async () => {
//   await db.sync();
// })();

// (async () => {
//   try {
//     // Sinkronisasi model dengan tabel di database
//     await db.sync();

//     // Menambah kolom baru 'newColumn' ke tabel Users
//     await queryInterface.addColumn("users", "profil_image", {
//       type: DataTypes.STRING, // Kolom untuk menyimpan nama file gambar
//       allowNull: true,
//     });
//     await queryInterface.addColumn("users", "url", {
//       type: DataTypes.STRING, // Kolom untuk menyimpan nama file gambar
//       allowNull: true,
//     });

//     console.log("Column added successfully");
//   } catch (error) {
//     console.error("Error:", error);
//   } finally {
//     // await queryInterface.(); // Menutup koneksi ke database setelah selesai
//   }
// })();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
      maxAge: 7200000,
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5000",
  })
);
app.use(express.json());
app.use(fileUpload());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);
app.use(PaymentRoute);
app.use(OrderRoute);
app.use(express.static(path.join("public")));
// store.sync();

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});
