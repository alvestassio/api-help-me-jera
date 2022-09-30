const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL,{dialect: "mysql",});

sequelize
  .authenticate()
  .then(() => {
    console.log("Sequelize: Connection has been established successfully");
  })
  .catch((error) => {
    console.error("sequelize: Unable to connect to the database: ", error);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
