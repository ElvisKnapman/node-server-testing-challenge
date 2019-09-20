const express = require("express");

// routes
const driverRoutes = require("../drivers/driversRoute.js");
const server = express();

server.use(express.json());

server.use("/drivers", driverRoutes);

server.get("/", (req, res) => {
  res.status(200).json({ API: "up" });
});

module.exports = server;
