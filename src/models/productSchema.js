const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  availableWorldWide: String,
  origin: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: String,
  quantity: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const products = mongoose.model("Products", productSchema);

module.exports = products;
