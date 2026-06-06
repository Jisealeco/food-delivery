const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  price: {
    type: Number,
    required: true
  },

  image: {
    type: String
  },

  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  averageRating: {
    type: Number,
    default: 0
  },

  totalReviews: {
    type: Number,
    default: 0
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("Product",ProductSchema);