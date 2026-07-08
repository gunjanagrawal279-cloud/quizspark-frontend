import { useLocation, useNavigate } from "react-router-dom";
import "../styles/result.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;
  const total = location.state?.total || 15;

  const percentage = Math.round((score / total) * 100);

  let grade = "";
  let message = "";
  let emoji = "";

  if (percentage >= 90) {
    grade = "A+";
    message = "Outstanding Performance!";
    emoji = "🏆";
  } else if (percentage >= 75) {
    grade = "A";
    message = "Excellent Job!";
    emoji = "🎉";
  } else if (percentage >= 60) {
    grade = "B";
    message = "Good Work!";
    emoji = "😊";
  } else if (percentage >= 40) {
    grade = "C";
    message = "Keep Practicing!";
    emoji = "👍";
  } else {
    grade = "D";
    message = "Don't Give Up!";
    emoji = "💪";
  }

  return (
    <div className="result-page">
      <div className="result-card">

        <h1>{emoji} Quiz Completed!</h1>

        <h2>Score: {score} / {total}</h2>

        <h3>Percentage: {percentage}%</h3>

        <h3>Grade: {grade}</h3>

        <p>{message}</p>

        <button onClick={() => navigate("/quiz")}>
          🔄 Play Again
        </button>

        <button onClick={() => navigate("/")}>
          🏠 Go Home
        </button>

      </div>
    </div>
  );
}

export default Result;