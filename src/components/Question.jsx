// src/components/Question.js

import React from 'react';

const Question = ({ question, index, handleAnswerChange, selectedAnswers }) => {
  return (
    <div className="mb-6">
      <p className="font-semibold text-lg">{question.question}</p>
      <div className="space-y-2 mt-4">
        {question.options.map((option, i) => (
          <label key={i} className="flex items-center space-x-2">
            <input
              type="radio"
              name={`question-${index}`}
              value={option}
              checked={selectedAnswers[index] === option}
              onChange={() => handleAnswerChange(index, option)}
              className="form-radio"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
