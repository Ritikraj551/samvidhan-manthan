import React, { useState } from "react";
import './styles/Roleplay.css';

const scenarios = [
  {
    question:
      "You see someone being denied entry to a public place based on their caste. What do you do?",
    options: [
      {
        text: "Ignore it, it's not my problem",
        correct: false,
        explanation:
          "Ignoring discrimination allows it to continue. You have a right to speak up.",
      },
      {
        text: "Report it to authorities or raise awareness",
        correct: true,
        explanation:
          "The Right to Equality (Article 15) prohibits discrimination based on caste, gender, or religion.",
      },
      {
        text: "Tell the person to go somewhere else",
        correct: false,
        explanation:
          "This doesn't solve the problem and reinforces discrimination.",
      },
    ],
  },
  {
    question:
      "A government officer asks you for a bribe to process your application. What should you do?",
    options: [
      {
        text: "Pay the bribe to get things done quickly",
        correct: false,
        explanation: "Bribery is illegal, and paying it promotes corruption.",
      },
      {
        text: "Refuse and report the officer to the Anti-Corruption Bureau",
        correct: true,
        explanation:
          "Right to constitutional remedies (Article 32) allows you to take action against corruption.",
      },
      {
        text: "Ignore and try again later",
        correct: false,
        explanation: "Ignoring the issue allows corruption to persist.",
      },
    ],
  },
  {
    question:
      "You are protesting peacefully about an unfair law, but the police ask you to stop. What do you do?",
    options: [
      {
        text: "Run away to avoid trouble",
        correct: false,
        explanation:
          "Peaceful protest is a fundamental right (Article 19). You have the right to express yourself.",
      },
      {
        text: "Continue peacefully and inform the police of your right",
        correct: true,
        explanation:
          "The Right to Freedom (Article 19) protects peaceful assembly and free speech.",
      },
      {
        text: "Start arguing with the police aggressively",
        correct: false,
        explanation:
          "Aggression can lead to legal trouble. It's best to assert your rights calmly.",
      },
    ],
  },
];

const Roleplay = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option.correct) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const nextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setGameOver(true);
    }
  };

  return (
    <div className="roleplay-container">
      {gameOver ? (
        <div className="game-over">
          <h2>Game Over!</h2>
          <p>
            Your Score: {score}/{scenarios.length}
          </p>
          <p>
            {score >= 2
              ? "Great job! You know your rights well!"
              : "Keep learning about your rights!"}
          </p>
        </div>
      ) : (
        <div className="scenario">
          <h2>{scenarios[currentScenario].question}</h2>
          <div className="options">
            {scenarios[currentScenario].options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${
                  selectedOption && selectedOption.text === option.text
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleOptionClick(option)}
                disabled={showExplanation}
              >
                {option.text}
              </button>
            ))}
          </div>
          {showExplanation && (
            <div className="explanation">
              <p>{selectedOption.explanation}</p>
              <button className="next-btn" onClick={nextScenario}>
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Roleplay;
