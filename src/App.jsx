import React, { useState } from 'react';
import { questions } from './data/question.js';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './components/Navbar';
import Question from './components/Question';

const App = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionIndex, answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white-100 flex flex-col items-center justify-between min-h-screen pb-16">
        <div className="bg-white p-6 rounded-lg shadow-md w-80 my-7">
          {!isSubmitted ? (
            <>
              <h2 className="text-2xl font-semibold text-center mb-4">
                Question {currentIndex + 1}
              </h2>
              <form>
                <Question
                  question={questions[currentIndex]}
                  index={currentIndex}
                  handleAnswerChange={handleAnswerChange}
                  selectedAnswers={selectedAnswers}
                />
              </form>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePrevious}
                  className="px-4 py-2 bg-teal-900 text-white rounded-md hover:bg-teal-900"
                  disabled={currentIndex === 0}
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 text-white bg-teal-900 rounded-md hover:bg-teal-950"
                  disabled={currentIndex === questions.length - 1}
                >
                  Next
                </button>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-teal-900 text-white py-2 rounded-lg mt-4 hover:bg-teal-900 transition"
              >
                Submit
              </button>
            </>
          ) : (
            <div className="mt-6 text-center w-80 my-7">
              <p className="text-lg font-semibold">
                You scored {score} out of {questions.length}
              </p>
              <button
                onClick={() => {
                  setSelectedAnswers([]);
                  setIsSubmitted(false);
                  setScore(0);
                  setCurrentIndex(0);
                }}
                className="mt-4 px-4 py-2 bg-teal-900 text-white rounded-lg hover:bg-teal-950 transition"
              >
                Retry Quiz
              </button>
            </div>
          )}
        </div>
      </div>
      <footer className="bg-teal-900 py-8 fixed bottom-0 left-0 w-full">
        <div className="flex flex-start py-4 md:space-x-6 justify-center align-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 text-white hover:text-blue-800 transition-colors duration-200" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 text-white hover:text-blue-800 transition-colors duration-200" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6 text-white hover:text-blue-800 transition-colors duration-200" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-white hover:text-blue-800 transition-colors duration-200" />
          </a>
        </div>
        <p className="flex text-white justify-center align-center mt-5">&copy; 2024 TechVille Solutions, lateefolayinka400@gmail.com. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;