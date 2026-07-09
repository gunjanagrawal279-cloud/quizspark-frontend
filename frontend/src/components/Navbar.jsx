import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        ⚡ QuizSpark
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <Link to="/login">
        <button className="login-btn">Login</button>
      </Link>
    </nav>
  );
}

export default Navbar;