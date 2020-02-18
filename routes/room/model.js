const Sequelize = require("sequelize");
const db = require("../../db");

const Room = db.define("Room", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Room;
// Room model -> with id and home -> make a relationship. -> User.belongsTo(Room)
