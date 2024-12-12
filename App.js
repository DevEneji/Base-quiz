// quiz-game/src/App.js
import React, { useState, useEffect } from "react";
import './App.css'; // Import the CSS file

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [reward, setReward] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 1);
      setReward((prevReward) => prevReward + 10); // Add 10 tokens for correct answer
    }

    setSelectedAnswer(null);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setCompleted(true);
    }
  };

  if (completed) {
    return (
      <div className="App">
        <h1>Quiz Completed!</h1>
        <p>Correct Answers: {score}</p>
        <p>Incorrect Answers: {questions.length - score}</p>
        <p>Total Reward: {reward} tokens</p>
      </div>
    );
  }

  return (
    <div className="App">
      {questions.length > 0 ? (
        <div>
          <h1>Question {currentQuestionIndex + 1}</h1>
          <p>{questions[currentQuestionIndex].question}</p>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswerSelection(option)}
                style={{
                  padding: "10px",
                  margin: "5px",
                  cursor: "pointer",
                  backgroundColor:
                    selectedAnswer === option ? "#d1e7dd" : "#f8f9fa",
                  border: "1px solid #ced4da",
                  borderRadius: "5px",
                }}
              >
                {option}
              </li>
            ))}
          </ul>
          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            {currentQuestionIndex + 1 < questions.length ? "Next" : "Finish"}
          </button>
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
}

export default App;
