import React, { useState } from "react";
import './styles/Quiz.css';

const questions = {
  level1: [
    {
      question: "What is the supreme law of India?",
      options: [
        "The President",
        "The Constitution",
        "The Prime Minister",
        "The Parliament",
      ],
      answer: "The Constitution",
      explanation:
        "The Constitution of India is the highest legal document that defines the framework of governance.",
    },
    {
      question:
        "How many fundamental rights are there in the Indian Constitution?",
      options: ["5", "6", "7", "8"],
      answer: "6",
      explanation:
        "There are 6 fundamental rights in the Indian Constitution, ensuring basic freedoms to all citizens.",
    },
    {
      question: "Who is known as the father of the Indian Constitution?",
      options: [
        "Mahatma Gandhi",
        "B. R. Ambedkar",
        "Jawaharlal Nehru",
        "Sardar Patel",
      ],
      answer: "B. R. Ambedkar",
      explanation:
        "Dr. B. R. Ambedkar was the chairman of the drafting committee and played a key role in shaping the Indian Constitution.",
    },
    {
      question: "What is the tenure of the President of India?",
      options: ["4 years", "5 years", "6 years", "7 years"],
      answer: "5 years",
      explanation:
        "The President of India serves a 5-year term as per the Constitution.",
    },
    {
      question:
        "Which article of the Indian Constitution deals with the abolition of untouchability?",
      options: ["Article 15", "Article 17", "Article 19", "Article 21"],
      answer: "Article 17",
      explanation:
        "Article 17 of the Indian Constitution abolishes untouchability and forbids its practice in any form.",
    },
    {
      question: "Which body is responsible for conducting elections in India?",
      options: [
        "Supreme Court",
        "Election Commission",
        "Parliament",
        "Lok Sabha",
      ],
      answer: "Election Commission",
      explanation:
        "The Election Commission of India is an independent body responsible for conducting free and fair elections.",
    },
    {
      question: "What is the minimum age for voting in India?",
      options: ["16", "18", "21", "25"],
      answer: "18",
      explanation:
        "According to the 61st Amendment Act, the minimum voting age in India was reduced from 21 to 18 years.",
    },
    {
      question:
        "Which part of the Constitution deals with the Directive Principles of State Policy?",
      options: ["Part III", "Part IV", "Part V", "Part VI"],
      answer: "Part IV",
      explanation:
        "Part IV of the Indian Constitution contains the Directive Principles of State Policy, guiding the government in policymaking.",
    },
    {
      question:
        "Which fundamental right prohibits discrimination on grounds of religion, race, caste, sex, or place of birth?",
      options: [
        "Right to Equality",
        "Right to Freedom",
        "Right against Exploitation",
        "Right to Constitutional Remedies",
      ],
      answer: "Right to Equality",
      explanation:
        "The Right to Equality ensures that all citizens are treated equally before the law.",
    },
    {
      question: "How many members are there in the Rajya Sabha?",
      options: ["238", "250", "245", "300"],
      answer: "250",
      explanation:
        "The Rajya Sabha can have a maximum of 250 members, with 238 elected and 12 nominated by the President.",
    },
  ],
};

const Quiz = () => {
  const [level, setLevel] = useState("level1");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (selectedOption) => {
    const currentQ = questions[level][currentQuestion];

    if (selectedOption === currentQ.answer) {
      setScore(score + 1);
      setFeedback(`Correct! ${currentQ.explanation}`);
    } else {
      setFeedback(`Wrong! ${currentQ.explanation}`);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions[level].length) {
        setCurrentQuestion(currentQuestion + 1);
        setFeedback("");
      } else {
        finishLevel();
      }
    }, 2000);
  };

  const finishLevel = () => {
    if (score >= 7) {
      setFeedback(
        `Congratulations! You passed Level 1 with ${score}/10. More levels coming soon!`
      );
    } else {
      setFeedback(`You scored ${score}/10. Try again to pass Level 1.`);
    }
    setQuizFinished(true);
  };

  return (
    <div className="quiz-container">
      {!quizFinished ? (
        <>
          <h1>Samvidhan Quiz - Level 1</h1>
          <p>{questions[level][currentQuestion].question}</p>
          <div className="options">
            {questions[level][currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
          {feedback && <p className="feedback">{feedback}</p>}
        </>
      ) : (
        <div>
          <h2>{feedback}</h2>
          <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
