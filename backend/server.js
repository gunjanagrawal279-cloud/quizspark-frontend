const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const quizRoutes = require("./routes/quizRoutes");
const authRoutes = require("./routes/authRoutes");
const auth = require("./middleware/auth");

const app = express();

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

// Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);

app.get("/", (req, res) => {
  res.send("🚀 QuizSpark Backend is Running!");
});

// Protected Route
app.get("/api/profile", auth, (req, res) => {
  res.json({
    success: true,
    message: "Protected route accessed",
    user: req.user,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});