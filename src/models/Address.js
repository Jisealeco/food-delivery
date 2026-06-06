const mongoose = require("mongoose");

const AddressSchema =
  new mongoose.Schema({

    user: {
      type:
        mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    label: String,

    address: String,

    city: String,

    state: String,

    phone: String
});

module.exports =
  mongoose.model(
    "Address",
    AddressSchema
  );