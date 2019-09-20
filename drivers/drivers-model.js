const db = require("../data/db-config.js");

const find = () => {
  return db("drivers");
};

const findById = id => {
  return db("drivers")
    .where({ id })
    .first();
};

module.exports = {
  find,
  findById
};
