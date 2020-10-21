const dotenv = require("../configurations/dotenv");

module.exports = {
  development: {
    username: dotenv.MYSQLUSER,
    password: dotenv.MYSQLPASSWORD,
    database: dotenv.MYSQLDB,
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
