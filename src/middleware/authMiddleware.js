const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Not authorized"
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User not found"
      });
    }

    // attach user
    req.user = user;

    // ✅ vendor approval check (BEFORE next)
    if (
      user.role === "vendor" &&
      user.status !== "approved"
    ) {
      return res.status(403).json({
        message: "Vendor not approved"
      });
    }

    next();

  } catch (error) {
    res.status(401).json({
      message: "Invalid token"
    });
  }
};

module.exports = protect;