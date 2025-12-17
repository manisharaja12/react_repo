// entry.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8001; // Render provides the PORT

/* ===== Middleware ===== */
app.use(cors());
app.use(express.json());

/* ===== MongoDB Connection (Direct URL) ===== */
mongoose
  .connect("mongodb+srv://cys:cys@cluster0.kalhhsd.mongodb.net/Mern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

/* ===== Schema ===== */
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

/* ===== Home Route ===== */
app.get("/", (req, res) => {
  res.send("Backend running");
});

/* ===== Signup API ===== */
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ===== Login API ===== */
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
        isLoggedIn: false,
      });
    }

    res.json({
      message: "Login successful",
      isLoggedIn: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ===== Start Server ===== */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
