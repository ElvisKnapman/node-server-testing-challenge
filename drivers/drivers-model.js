const db = require("../data/db-config.js");

const find = () => {
  return db("drivers");
};

const findById = id => {
  return db("drivers")
    .where({ id })
    .first();
};

const addDriver = async newDriver => {
  const [id] = await db("drivers").insert(newDriver, "id");
  return findById(id);
};

const deleteDriver = id => {
  return db("drivers")
    .del()
    .where({ id });
};

module.exports = {
  find,
  findById,
  addDriver,
  deleteDriver
};
