const router = require("express").Router();

// model
const Drivers = require("./drivers-model.js");

router.get("/", async (req, res) => {
  try {
    const drivers = await Drivers.find();

    if (drivers) {
      res.status(200).json(drivers);
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Server encountered error retrieving drivers" });
  }
});

module.exports = router;
