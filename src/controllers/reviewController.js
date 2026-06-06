const Review = require("../models/Review");
const Product = require("../models/Product");

exports.createReview = async (req, res) => {

  try {

    const {
      productId,
      rating,
      comment
    } = req.body;

    const review =
      await Review.create({
        customer: req.user._id,
        product: productId,
        rating,
        comment
      });

    // Calculate new average

    const reviews =
      await Review.find({
        product: productId
      });

    const average =
      reviews.reduce(
        (sum, review) =>
          sum + review.rating,
        0
      ) / reviews.length;

    await Product.findByIdAndUpdate(
      productId,
      {
        averageRating:
          average.toFixed(1),

        totalReviews:
          reviews.length
      }
    );

    res.status(201).json(review);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};