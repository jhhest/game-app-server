const Sequelize = require("sequelize");

const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:password@localhost:5432/postgres";
const db = new Sequelize(databaseUrl);

db.sync({ force: true })
  .then(() => console.log("databaseschema Updated"))
  .catch(console.error);

module.exports = db;
