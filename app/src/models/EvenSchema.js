// eventid, customerid, eventname, eventDetails, createdAt, ingetstedAt

const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventId: {
    type: String,
    default: () => new mongoose.Types.ObjectId().toString(),
    unique: true,
  },
  customerId: {
    type: String,
    required: true,
    unique: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  eventDetails: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  ingestedAt: {
    type: Date,
  },
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;
