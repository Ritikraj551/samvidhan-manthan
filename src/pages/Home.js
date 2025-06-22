import React, { useState } from "react";
import "./styles/Home.css";

const books = [
  {
    title: "Fundamental Rights",
    pages: [
      {
        title: "Right to Equality",
        content: "Ensures equal rights for all citizens (Articles 14-18).",
      },
      {
        title: "Right to Freedom",
        content:
          "Covers freedom of speech, assembly, and movement (Articles 19-22).",
      },
      {
        title: "Right Against Exploitation",
        content:
          "Prohibits human trafficking and forced labor (Articles 23-24).",
      },
      {
        title: "Right to Freedom of Religion",
        content: "Grants religious freedom (Articles 25-28).",
      },
    ],
  },
  {
    title: "Fundamental Duties",
    pages: [
      {
        title: "Respect the Constitution",
        content: "Follow and abide by the Constitution of India.",
      },
      {
        title: "Protect Public Property",
        content: "Safeguard national and public property.",
      },
      {
        title: "Promote Harmony",
        content: "Develop a sense of brotherhood and unity.",
      },
      {
        title: "Strive for Excellence",
        content:
          "Continuously work towards self-improvement and nation-building.",
      },
    ],
  },
  {
    title: "Important Articles",
    pages: [
      { title: "Article 21", content: "Right to Life and Personal Liberty." },
      { title: "Article 32", content: "Right to Constitutional Remedies." },
      { title: "Article 44", content: "Uniform Civil Code for all citizens." },
      { title: "Article 51A", content: "List of Fundamental Duties." },
    ],
  },
];

const Home = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const openBook = (index) => {
    setSelectedBook(index);
    setCurrentPage(0);
  };

  const closeBook = () => setSelectedBook(null);

  const nextPage = () => {
    if (currentPage < books[selectedBook].pages.length - 1)
      setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="home-container">
      {/* Preamble Image */}
      <img
        src="/images/preamble.jpg"
        alt="Preamble of India"
        className="preamble-image"
      />

      {/* Bookshelf with Books */}
      <div className="bookshelf">
        {books.map((book, index) => (
          <div key={index} className="book" onClick={() => openBook(index)}>
            <h3>{book.title}</h3>
          </div>
        ))}
      </div>

      {/* Book Content */}
      {selectedBook !== null && (
        <div className="book-container">
          <div className="book-content">
            <div className="page">
              <h2>{books[selectedBook].pages[currentPage].title}</h2>
              <p>{books[selectedBook].pages[currentPage].content}</p>
            </div>
            <div className="buttons">
              <button onClick={prevPage} disabled={currentPage === 0}>
                Previous
              </button>
              <button
                onClick={nextPage}
                disabled={currentPage === books[selectedBook].pages.length - 1}
              >
                Next
              </button>
            </div>
            <button className="close-btn" onClick={closeBook}>
              Close
            </button>
          </div>
        </div>
      )}
      <footer className="footer">
        Welcome to Samvidhan Manthan
      </footer>
    </div>
  );
};

export default Home;
