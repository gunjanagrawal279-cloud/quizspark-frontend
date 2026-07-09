import "../styles/Features.css";

function Features() {
  return (
    <section className="features">

      <h2>Why Choose QuizSpark?</h2>

      <div className="feature-container">

        <div className="card">
          <div className="icon">🧠</div>
          <h3>Smart Quizzes</h3>
          <p>Practice with different quiz categories and improve your knowledge.</p>
        </div>

        <div className="card">
          <div className="icon">⏱️</div>
          <h3>Time Challenge</h3>
          <p>Challenge yourself with exciting timed quizzes.</p>
        </div>

        <div className="card">
          <div className="icon">🏆</div>
          <h3>Leaderboard</h3>
          <p>Compete with friends and secure your top position.</p>
        </div>

      </div>

    </section>
  );
}

export default Features;