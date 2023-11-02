const { Sequelize } = require("sequelize");
const sequelize = require("./../utils/db");

const User = sequelize.define("User", {
  phone: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  connectionId: {
    type: Sequelize.STRING,
  },
});

User.sync();

module.exports = User;
