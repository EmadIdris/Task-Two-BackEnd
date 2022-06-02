const { Sequelize, DataTypes } = require("sequelize");
const userModel = require("./user-model");
require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL);

const UsersTable = userModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  UsersTable,
};
