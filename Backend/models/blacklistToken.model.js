const mongoose = require("mongoose");

// Check if model exists before creating
const BlacklistToken =
  mongoose.models.BlacklistToken ||
  mongoose.model(
    "BlacklistToken",
    new mongoose.Schema({
      token: {
        type: String,
        required: true,
        unique: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400, // 24 hours in seconds
      },
    })
  );

module.exports = BlacklistToken;
