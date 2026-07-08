import "../styles/about.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-card">
        <h1>About QuizSpark</h1>

        <p className="intro">
          QuizSpark is a modern quiz platform designed to make learning
          interactive, enjoyable, and competitive. Whether you want to test
          your knowledge, prepare for exams, or challenge your friends,
          QuizSpark provides a seamless experience with secure login, engaging
          quizzes, instant results, and a dynamic leaderboard.
        </p>

        <h2>Why QuizSpark?</h2>
        <ul>
          <li>Fast and secure user authentication</li>
          <li>Beautiful and responsive interface</li>
          <li>Real-time score calculation and feedback</li>
          <li>Leaderboard to celebrate top performers</li>
        </ul>

        <p>
          Built with React, Node.js, Express, and MongoDB, QuizSpark combines
          modern web technologies to deliver a smooth and inspiring learning
          journey.
        </p>
      </div>
    </div>
  );
}

export default About;