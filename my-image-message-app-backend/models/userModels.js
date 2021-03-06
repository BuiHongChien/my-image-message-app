const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  message: { type: String, required: true },
  image: { type: String },
  expiryDate:{type:Date},
  lastLoggedIn: { type: String },
});

module.exports = User = mongoose.model("user", userSchema);
