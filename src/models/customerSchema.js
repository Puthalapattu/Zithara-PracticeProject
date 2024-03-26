const mongoose = require("mongoose");

// Define the shema structure
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  revenue: {
    type: Number,
    default: 0,
  },
  profit: {
    type: Number,
    default: 0,
  },
  orderCount: {
    type: Number,
    default: 0,
  },
});

// Create the model with the schema
const customers = mongoose.model("Customer", schema);

module.exports = customers;
