const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

router.post("/", protect, (req, res) => {
  res.json({
    message: "Cart item added"
  });
});

module.exports = router;