const { Sequelize } = require("seqeuelize");
const sequelize = require("./../utils/db");

const Chat = sequelize.define("Chat", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  receiver: {
    phone: Sequelize.INTEGER,
    allowNull: false,
  },
  sender: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Chat.sync();

module.exports = Chat;
