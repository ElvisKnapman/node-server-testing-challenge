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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const driver = await Drivers.findById(id);

    if (driver) {
      res.status(200).json(driver);
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Server encountered error retrieving driver" });
  }
});

router.post("/", async (req, res) => {
  const { body } = req;

  try {
    const driver = await Drivers.addDriver(body);
    if (driver) {
      res.status(201).json(driver);
    } else {
      res
        .status(400)
        .json({ message: "Could not add driver, please check your data" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server encountered error adding driver" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Drivers.deleteDriver(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(400).json({ message: "Invalid driver ID" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server encountered error while trying to delete the driver"
    });
  }
});

module.exports = router;
