const mongoose = require("mongoose");

const RiderSchema = new mongoose.Schema({

  user: {
    type:
      mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  vehicleType: {
    type: String,
    enum: ["bike", "car"]
  },

  isAvailable: {
    type: Boolean,
    default: true
  }
});

module.exports =
  mongoose.model("Rider", RiderSchema);