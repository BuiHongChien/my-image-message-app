const router = require("express").Router();
const User = require("../models/userModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth");

router.post("/register", async (req, res) => {
  try {
    let { username, password, passwordCheck, message, image } = req.body;

    if (!message || !username || !password || !passwordCheck) {
      return res.status(400).json({ msg: "Not all fields have been entered" });
    }
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });

    const existingUser = await User.findOne({ username: username });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this username already exists." });

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: passwordHash,
      message,
      image,
    });

    const saveUser = await newUser.save();
    res.json(saveUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await User.findOne({ username: username });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this username has been registered." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        image:user.image,
        message: user.message,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.user);
    res.json(deleteUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    id: user._id,
    username: user.username,
    image:user.image,
    message:user.message,
  });
});

module.exports = router;
