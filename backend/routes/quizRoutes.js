const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const { submitScore } = require("../controllers/quizController");

router.post("/submit", auth, submitScore);

module.exports = router;