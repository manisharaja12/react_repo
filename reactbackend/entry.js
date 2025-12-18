const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 8001;

/* ===== Middleware ===== */
app.use(cors());
app.use(express.json());

/* ===== MongoDB Connection ===== */
mongoose
  .connect("mongodb+srv://cys:cys@cluster0.kalhhsd.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

/* ===== Schema ===== */
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

/* ===== Home ===== */
app.get("/", (req, res) => {
  res.send("Backend running");
});

/* ===== Signup API ===== */
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.json({ message: "User already exists" });
  }

  const newUser = new User({ email, password });
  await newUser.save();

  res.json({ message: "Signup successful" });
});

/* ===== Login API (THIS WAS MISSING) ===== */
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.json({
      message: "Invalid email or password",
      isLoggedIn: false,
    });
  }

  res.json({
    message: "Login successful",
    isLoggedIn: true,
  });
});

/* ===== Start Server ===== */
app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});