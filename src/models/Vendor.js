const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true
  },

  ownerName: {
    type: String,
    required: true
  },

  phone: String,

  address: String,

  category: {
    type: String,
    enum: ["food", "market"]
  },

  status: {
  type: String,
  enum: [
    "pending",
    "approved",
    "rejected"
  ],
  default: "pending"
},

  createdAt: {
    type: Date,
    default: Date.now
  }
});



module.exports = mongoose.model("Vendor", VendorSchema);