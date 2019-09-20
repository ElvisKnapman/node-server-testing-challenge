const db = require("../data/db-config.js");

const find = async () => {
  return await db("drivers");
};

module.exports = {
  find
};
