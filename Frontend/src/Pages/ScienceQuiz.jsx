import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Midbar from '../Components/Midbar';

const ScienceQuiz = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [stage, setStage] = useState(1);

    useEffect(() => {
        fetch('http://localhost:3000/sciencequiz')
            .then(res => res.json())
            .then(data => {
                const cleanedData = data.map(quiz => {
                    const answerKey = Object.keys(quiz).find(key => key.trim() === 'answer');
                    const answer = quiz[answerKey] ? quiz[answerKey].trim() : undefined;
                    const { [answerKey]: unused, ...rest } = quiz;
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
            if (quiz.answer && answers[`q${index}`] &&
                quiz.answer.toLowerCase() === answers[`q${index}`].toLowerCase()) {
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
        <div className='min-h-screen bg-gradient-to-b from-yellow-100 to-blue-100'>
            <Navbar />
            <div className='mt-24'>
                <Midbar />
            </div>
            <div className='container mx-auto flex flex-col items-center justify-center mt-12'>
                <div className='w-full md:w-4/5 lg:w-2/3 bg-white shadow-xl rounded-lg p-8 border border-yellow-300'>
                    <h1 className='text-3xl font-bold text-center text-blue-600 mb-6'>Science Quiz</h1>
                    {!submitted ? (
                        <form onSubmit={handleSubmit}>
                            {quizzes.map((quiz, index) => (
                                <div className='mb-6' key={index}>
                                    <label className='block text-xl font-semibold mb-2 text-gray-800' htmlFor={`q${index}`}>
                                        {quiz.question}
                                    </label>
                                    <input
                                        type='text'
                                        id={`q${index}`}
                                        name={`q${index}`}
                                        value={answers[`q${index}`] || ''}
                                        onChange={handleChange}
                                        className='w-full px-4 py-2 border-2 border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200'
                                    />
                                </div>
                            ))}
                            <button
                                type='submit'
                                className='w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-200'>
                                Submit
                            </button>
                        </form>
                    ) : (
                        <div className='text-center'>
                            <h2 className='text-2xl font-bold text-green-600 mb-4'>Your Score: {score} / {quizzes.length}</h2>
                            {stage < 5 ? (
                                <button
                                    onClick={handleNextStage}
                                    className='py-3 px-6 bg-yellow-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-200'>
                                    Next Stage
                                </button>
                            ) : (
                                <h2 className='text-2xl font-bold text-purple-600 mb-4'>You have completed all stages!</h2>
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

export default ScienceQuiz;
