const Order = require("../models/Order");
const sendNotification = require("../utils/sendNotification");

exports.createOrder = async (req, res) => {

  try {

    const order = await Order.create({
      customer: req.user._id,
      products: req.body.products,
      totalAmount: req.body.totalAmount
    });

    await sendNotification(
      req.user._id,
      "Order Created",
      "Your order has been placed successfully.",
      "order"
    );

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getMyOrders = async (
  req,
  res
) => {

  try {

    const orders =
      await Order.find({
        customer: req.user._id
      })
      .populate("products.product");

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.updateOrderStatus =
  async (req, res) => {

    try {

      const order =
        await Order.findById(
          req.params.id
        );

      if (!order) {
        return res.status(404)
          .json({
            message:
              "Order not found"
          });
      }

      order.status =
        req.body.status;

      await order.save();

      res.json(order);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }
};