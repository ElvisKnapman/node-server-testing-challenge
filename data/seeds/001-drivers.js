exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("drivers")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("drivers").insert([
        { first_name: "Dale", last_name: "Earnhardt Jr.", car_number: 88 },
        { first_name: "Chase", last_name: "Elliott", car_number: 9 },
        { first_name: "Kyle", last_name: "Larson", car_number: 42 }
      ]);
    });
};
