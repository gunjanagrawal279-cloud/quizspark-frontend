import User from "../models/user.js";

const submitScore = async (req, res) => {
  try {
    const { score } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { score },
      { new: true }
    ).select("-password");

    res.json({
      success: true,
      message: "Score saved successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .sort({ score: -1 })
      .limit(10);

    res.json({
      success: true,
      leaderboard: users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export default { submitScore, getLeaderboard };