import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/quiz.css";

function Quiz() {
  const navigate = useNavigate();

  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "CSS", "Python", "Java"],
      answer: "CSS",
    },
    {
      question: "Which company developed React?",
      options: ["Google", "Microsoft", "Facebook", "Apple"],
      answer: "Facebook",
    },
    {
      question: "Which hook is used to manage state in React?",
      options: ["useState", "useEffect", "useRef", "useMemo"],
      answer: "useState",
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "let", "const", "All of these"],
      answer: "All of these",
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<url>"],
      answer: "<a>",
    },
    {
      question: "Which CSS property changes the text color?",
      options: ["font-color", "text-color", "color", "background"],
      answer: "color",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "<!-- -->", "#", "/* */ only"],
      answer: "//",
    },
    {
      question: "Which method converts a JSON string into an object?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.object()",
        "JSON.convert()",
      ],
      answer: "JSON.parse()",
    },
    {
      question: "Node.js is mainly used for?",
      options: [
        "Backend Development",
        "Photo Editing",
        "Game Design",
        "Database",
      ],
      answer: "Backend Development",
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Google", "Netscape", "Apple"],
      answer: "Netscape",
    },
    {
      question: "Which HTML tag is used to insert an image?",
      options: ["<img>", "<image>", "<picture>", "<src>"],
      answer: "<img>",
    },
    {
      question: "Which React hook is used for side effects?",
      options: ["useEffect", "useState", "useMemo", "useRef"],
      answer: "useEffect",
    },
    {
      question: "Which database are we going to use in this project?",
      options: ["MongoDB", "MySQL", "SQLite", "Oracle"],
      answer: "MongoDB",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);

useEffect(() => {
  if (timeLeft === 0) {
    handleNext();
    return;
  }

  const timer = setTimeout(() => {
    setTimeLeft(timeLeft - 1);
  }, 1000);

  return () => clearTimeout(timer);
}, [timeLeft]);

  const handleNext = () => {
    if (selected === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected("");
      setTimeLeft(30);
    } else {
      navigate("/result", {
        state: {
          score:
            score +
            (selected === questions[currentQuestion].answer ? 1 : 0),
          total: questions.length,
        },
      });
    }
  };

  return (
    <div className="quiz-page">
      <div className="quiz-card">
       <div className="timer">
  ⏰ Time Left : {timeLeft}s
</div>

<div className="progress-bar">
  <div
    className="progress-fill"
    style={{
      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
    }}
  ></div>
</div>

<p
  style={{
    textAlign: "center",
    marginBottom: "15px",
    fontWeight: "bold",
  }}
>
  {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Completed
</p>

<h2>
  Question {currentQuestion + 1} / {questions.length}
</h2>

        <h3>{questions[currentQuestion].question}</h3>

        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={selected === option ? "option-btn active" : "option-btn"}
              onClick={() => setSelected(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          className="next-btn"
          onClick={handleNext}
          disabled={!selected}
        >
          {currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;