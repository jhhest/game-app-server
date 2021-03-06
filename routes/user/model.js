const Sequelize = require("sequelize");
const db = require("../../db");
const Room = require("../room/model");

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

User.belongsTo(Room)

module.exports = User;
