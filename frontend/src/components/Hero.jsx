import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Test Your Knowledge <br />
          with <span>QuizSpark</span>
        </h1>

        <p>
          Practice quizzes, improve your skills, track your score,
          and challenge yourself with fun categories.
        </p>

        <div className="hero-buttons">
          <button className="start-btn">Start Quiz</button>
          <button className="learn-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;