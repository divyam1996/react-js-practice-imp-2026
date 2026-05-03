//// do it with usereducer

import React, { useState } from "react";

const questions = [
  {
    question: "What is 2 + 2?",
    options: ["2", "3", "4", "5"],
    answer: "4",
  },
  {
    question: "Capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi",
  },
];

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = () => {
    if (!selected) return;

    const correctAnswer = questions[currentQ].answer;

    if (selected === correctAnswer) {
      setScore((prev) => prev + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setShowResult(true);
    //next ques
    setTimeout(() => {
      setShowResult(false);
      setSelected("");
      setIsCorrect(null);
      setCurrentQ((prev) => prev + 1);
    }, 1500);
  };

  if (currentQ >= questions.length) {
    return (
      <div>
        <h2>
          Your Score: {score} out of {questions.length}
        </h2>
        <p>You have completed the assessment</p>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div>
      <h2>
        Question {currentQ + 1} of {questions.length}
      </h2>

      <h3>{q.question}</h3>

      {q.options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selected === option}
              onChange={(e) => setSelected(e.target.value)}
              disabled={showResult}
            />
            {option}
          </label>
        </div>
      ))}

      {showResult && (
        <p>{isCorrect ? "Correct!" : "Incorrect!"}</p>
      )}

      <button onClick={handleSubmit} disabled={showResult}>
        Submit
      </button>
    </div>
  );
}