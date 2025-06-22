import React, { useState, useEffect } from "react";
import "./styles/Puzzle.css";

const pairs = [
  { id: 1, right: "Right to Equality", left: "Article 14-18" },
  { id: 2, right: "Right to Freedom", left: "Article 19-22" },
  { id: 3, right: "Right Against Exploitation", left: "Article 23-24" },
  { id: 4, right: "Right to Freedom of Religion", left: "Article 25-28" },
  { id: 5, right: "Cultural & Educational Rights", left: "Article 29-30" },
];

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Puzzle = () => {
  const [shuffledLefts, setShuffledLefts] = useState([]);
  const [shuffledRights, setShuffledRights] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setShuffledLefts(shuffleArray(pairs));
    setShuffledRights(shuffleArray(pairs));
  }, []);

  const handleSelection = (type, index) => {
    if (matchedPairs.includes(shuffledLefts[index]?.id)) return;

    if (type === "right") {
      setSelectedRight(index);
    } else {
      setSelectedLeft(index);
    }
  };

  const handleSubmit = () => {
    if (selectedLeft === null || selectedRight === null) {
      setMessage("Please select one right and one article.");
      return;
    }

    if (shuffledRights[selectedRight].id === shuffledLefts[selectedLeft].id) {
      setMatchedPairs([...matchedPairs, shuffledLefts[selectedLeft].id]);
      setMessage("Correct match!");
    } else {
      setMessage("Incorrect! Try again.");
    }

    setSelectedLeft(null);
    setSelectedRight(null);
  };

  return (
    <div className="puzzle-container">
      <h1>Match the Fundamental Rights with their Constitutional Articles</h1>
      <p>Select one right and one article, then press Submit to check.</p>

      <div className="lists">
        <div className="list">
          {shuffledLefts.map((item, index) => (
            <div
              key={index}
              className={`item ${selectedLeft === index ? "selected" : ""} ${
                matchedPairs.includes(item.id) ? "correct" : ""
              }`}
              onClick={() => handleSelection("left", index)}
            >
              {item.left}
            </div>
          ))}
        </div>

        <div className="list">
          {shuffledRights.map((item, index) => (
            <div
              key={index}
              className={`item ${selectedRight === index ? "selected" : ""} ${
                matchedPairs.includes(item.id) ? "correct" : ""
              }`}
              onClick={() => handleSelection("right", index)}
            >
              {item.right}
            </div>
          ))}
        </div>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
      <p className="message">{message}</p>

      {matchedPairs.length === pairs.length && (
        <h3>Congratulations! You matched all pairs correctly!</h3>
      )}
    </div>
  );
};

export default Puzzle;
