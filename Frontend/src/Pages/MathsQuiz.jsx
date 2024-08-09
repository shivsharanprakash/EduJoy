import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Midbar from '../Components/Midbar';

const MathQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [stage, setStage] = useState(1);

  useEffect(() => {
    fetch('http://localhost:3000/quiz')
      .then(res => res.json())
      .then(data => {
        const cleanedData = data.map(quiz => {
          const { " answer": answer, ...rest } = quiz;
          return { ...rest, answer };
        });
        setQuizzes(cleanedData.filter(quiz => quiz.stage === stage));
      })
      .catch(error => console.error('Fetch error:', error));
  }, [stage]);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newScore = 0;
    quizzes.forEach((quiz, index) => {
      if (quiz.answer && answers[`q${index}`] === quiz.answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  const handleNextStage = () => {
    setSubmitted(false);
    setAnswers({});
    setStage(stage + 1);
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-100 to-gray-300'>
      <Navbar />
      <div className='mt-24'>
        <Midbar />
      </div>
      <div className='container mx-auto flex flex-col items-center justify-center mt-12'>
        <div className='w-full md:w-3/4 lg:w-1/2 bg-white shadow-lg rounded-lg p-8 border border-gray-300'>
          <h1 className='text-3xl font-semibold text-center text-gray-800 mb-6'>Math Quiz</h1>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              {quizzes.map((quiz, index) => (
                <div className='mb-6' key={index}>
                  <label className='block text-lg font-medium mb-2 text-gray-700' htmlFor={`q${index}`}>
                    {quiz.question}
                  </label>
                  <input
                    type='text'
                    id={`q${index}`}
                    name={`q${index}`}
                    value={answers[`q${index}`] || ''}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
                  />
                </div>
              ))}
              <button
                type='submit'
                className='w-full py-3 bg-blue-500 text-xl text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200'>
                Submit
              </button>
            </form>
          ) : (
            <div className='text-center'>
              <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Your Score: {score} / {quizzes.length}</h2>
              {stage < 5 ? (
                <button
                  onClick={handleNextStage}
                  className='py-3 px-6 bg-green-500 text-xl text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-200'>
                  Next Stage
                </button>
              ) : (
                <h2 className='text-2xl font-semibold text-gray-800 mb-4'>You have completed all stages!</h2>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="mt-8">
      <Footer />
      </div>
    </div>
  );
};

export default MathQuiz;
