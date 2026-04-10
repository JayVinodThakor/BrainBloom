require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

MONGO_URI= mongodb://mongo:LSOUcJYYodCFltatnLaWCIAfUnWFdGmI@mainline.proxy.rlwy.net:16352
JWT_SECRET=Brainbloom2209

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());

// ===== DEBUG (helps you verify env working) =====
console.log("MONGO_URI:", process.env.MONGO_URI ? "Loaded ✅" : "Missing ❌");

// ===== CONNECT DB =====
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected 🚀"))
  .catch(err => console.log("Mongo Error:", err));

// ===== MODEL =====
const User = mongoose.model("User", {
  email: String,
  password: String
});

// ===== TEST ROUTE =====
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// ===== REGISTER =====
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.json({ message: "Fill all fields" });
    }

    const exists = await User.findOne({ email });
    if (exists) return res.json({ message: "User already exists" });

    const hash = await bcrypt.hash(password, 10);

    const user = new User({ email, password: hash });
    await user.save();

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Register error" });
  }
});

// ===== LOGIN =====
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.json({ message: "Fill all fields" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.json({ message: "User not found" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.json({ message: "Wrong password" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Login error" });
  }
});

// ===== CHAT =====
app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: "AI says: " + message
  });
});

// ===== START SERVER =====
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
