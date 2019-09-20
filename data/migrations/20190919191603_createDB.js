exports.up = function(knex) {
  return knex.schema.createTable("drivers", tbl => {
    tbl.increments();

    tbl.string("first_name", 40).notNullable();
    tbl.string("last_name", 40).notNullable();

    tbl.int("car_number").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("drivers");
};
