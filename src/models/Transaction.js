const mongoose = require("mongoose");

const TransactionSchema =
  new mongoose.Schema({

    user: {
      type:
        mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    order: {
      type:
        mongoose.Schema.Types.ObjectId,
      ref: "Order"
    },

    amount: Number,

    reference: String,

    status: {
      type: String,
      enum: [
        "pending",
        "success",
        "failed"
      ]
    }
});

module.exports =
  mongoose.model(
    "Transaction",
    TransactionSchema
  );