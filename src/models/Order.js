const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },

            quantity: Number
        }
    ],
    
    rider: {
  type:
    mongoose.Schema.Types.ObjectId,
  ref: "Rider"
},

    totalAmount: Number,

    status: {
        type: String,
        default: "Pending"
    }
});

module.exports = mongoose.model("Order", OrderSchema);