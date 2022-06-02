const { Sequelize, DataTypes } = require("sequelize");
const userModel = require("./user-model");
require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};
const sequelize = new Sequelize(DATABASE_URL,DATABASE_CONFIG);

const UsersTable = userModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  UsersTable,
};
