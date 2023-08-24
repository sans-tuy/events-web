import { Sequelize } from "sequelize";

const db = new Sequelize("multi_level_login", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
