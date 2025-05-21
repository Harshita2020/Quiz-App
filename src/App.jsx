import React, { useState } from "react";
import Questions from "./components/Questions";
import questions from "./questions";
import './assets/styles.css'

const options = ["Apple", "Banana", "Cherry", "Dragon‑fruit"]; // any strings

export default function App() {
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  console.log("hshjgfewjbfwjfbshkdfvjdfwjhf");
  const baseStyle = {
    margin: 20,
    backgroundColor: "wheat",
    padding: 10,
    width: 200,
    cursor: "pointer",
    textAlign: "center",
    alignItems: "center",
  };

  const handleSelect = (option) => {
    setSelected(option);
    if (option === questions[currentIndex].correct) {
      setScore((prev) => prev + 1);
    }
  };
  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      setSelected(null); // reset selected for next question
    } else {
      setShowScore(true);
    }
  };

  return (
    <div
      style={{
        maxHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!showScore ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <Questions
            text={questions[currentIndex].text}
            selected={selected}
            setSelected={handleSelect}
            correct={questions[currentIndex].correct}
            options={questions[currentIndex].options}
            baseStyle={baseStyle}
          />

          <button
            onClick={handleNext}
            disabled={!selected}
            style={{
              // marginTop: 20,
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: selected ? "#4CAF50" : "#ccc",
              color: selected ? "white" : "#666",
              border: "none",
              borderRadius: "8px",
              cursor: selected ? "pointer" : "not-allowed",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => {
              if (selected) e.target.style.backgroundColor = "#45a049";
            }}
            onMouseOut={(e) => {
              if (selected) e.target.style.backgroundColor = "#4CAF50";
            }}
          >
            Next
          </button>
        </div>
      ) : (
        <h2>
          Your Score: {score} / {questions.length}
        </h2>
      )}
    </div>
  );
}
