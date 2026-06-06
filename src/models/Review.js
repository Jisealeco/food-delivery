const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({

  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor"
  },

  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },

  rider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rider"
  },

  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true
  },

  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },

  comment: {
    type: String,
    trim: true
  }

}, {
  timestamps: true
});

module.exports =
  mongoose.model("Review", ReviewSchema);