const Events = require("../models/EvenSchema");

// ---------------------------- CREATE EVENT ---------------------------

const createEvent = async (req, res) => {
  try {
    let [newEvent] = await Events.find({ customerId: req.body.customerId });
    if (newEvent) {
      res.status(200).send(`Event already exists`);
    } else {
      await Events.create(req.body);
      res.status(200).send(`Event created successfully!`);
    }
  } catch (error) {
    res.status(500).send(`Internal server error: ${error} occured`);
  }
};

// ---------------------

module.exports = { createEvent };
