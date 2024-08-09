import React, { useEffect, useState } from 'react';
import { FaStar, FaQuestionCircle } from 'react-icons/fa';

const GetStarted = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const FetchQuestion = async () => {
            try {
                const response = await fetch('http://localhost:3000/question');
                const data = await response.json();
                setFaqs(data);
            } catch (error) {
                console.log('Error fetching questions:', error);
            }
        };
        FetchQuestion();
    }, []);

    return (
        <div className="container-fluid mx-auto p-4">
            <div className="relative bg-gradient-to-r from-sky-500 to-teal-500 text-white text-center py-16 mb-12 overflow-hidden">

                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-fredoka mb-4">
                        Welcome to Your Learning Adventure!
                    </h1>
                    <p className="text-lg md:text-xl mt-4 font-baloo">
                        Join Edujoy and explore fun learning activities designed just for kids.
                    </p>
                </div>
            </div>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-fredoka mb-8 text-teal-600">Our Plans</h2>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-6 bg-white hover:shadow-xl hover:bg-green-200 transition-shadow duration-300 ease-in-out">
                        <h3 className="font-bold text-xl mb-2">Free Trial</h3>
                        <p className="text-gray-700 text-base mb-4">
                            Enjoy <span className='text-sky-400'>10 days</span> of unlimited access to all our features.
                        </p>
                        <button className="btn bg-orange-500 hover:bg-orange-400 px-4 py-2 text-gray-100 rounded-full transition-colors duration-300">Start Free Trial</button>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-6 bg-white hover:shadow-xl  hover:bg-green-200 transition-shadow duration-300 ease-in-out">
                        <h3 className="font-bold text-xl mb-2">Monthly Plan</h3>
                        <p className="text-gray-700 text-base mb-4">
                            <span className='text-sky-400'>$9.99/month</span> for unlimited access to all features.
                        </p>
                        <button className="btn bg-sky-500 hover:bg-sky-400 px-4 py-2 text-white rounded-full transition-colors duration-300">Subscribe Now</button>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-6 bg-white hover:shadow-xl  hover:bg-green-200 transition-shadow duration-300 ease-in-out">
                        <h3 className="font-bold text-xl mb-2">Yearly Plan</h3>
                        <p className="text-gray-700 text-base mb-4">
                            <span className='text-sky-400'>$99.99/year</span> for unlimited access to all features.
                        </p>
                        <button className="btn bg-sky-500 hover:bg-sky-400 px-4 py-2 text-white rounded-full transition-colors duration-300">Subscribe Now</button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-12 mb-12">
                <h2 className="text-3xl md:text-4xl font-fredoka text-center mb-8 text-teal-600">How It Works</h2>
                <div className="max-w-4xl mx-auto flex flex-wrap justify-around">
                    <div className="w-full md:w-1/3 text-center p-4">
                        <FaQuestionCircle className="text-4xl text-teal-500 mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-2">Explore</h3>
                        <p className="text-gray-700">Browse through our wide range of interactive learning activities designed for kids.</p>
                    </div>
                    <div className="w-full md:w-1/3 text-center p-4">
                        <FaStar className="text-4xl text-teal-500 mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-2">Engage</h3>
                        <p className="text-gray-700">Participate in fun challenges and activities to enhance your learning experience.</p>
                    </div>
                    <div className="w-full md:w-1/3 text-center p-4">
                        <FaStar className="text-4xl text-teal-500 mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-2">Achieve</h3>
                        <p className="text-gray-700">Earn rewards and track your progress as you complete various learning milestones.</p>
                    </div>
                </div>
            </div>
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-fredoka text-center mb-8 text-teal-600">What Parents Are Saying</h2>
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                        <p className="text-gray-700 text-lg">"Edujoy has transformed learning for my kids. They are excited about learning new things every day!"</p>
                        <p className="font-bold mt-4">- Jane Doe</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 text-lg">"The interactive activities are engaging and educational. My kids love the challenges!"</p>
                        <p className="font-bold mt-4">- John Smith</p>
                    </div>
                </div>
            </div>
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-fredoka text-center mb-8 text-teal-600">Frequently Asked Questions</h2>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {faqs.length > 0 ? (
                        faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="font-bold text-2xl mb-2 font-baloo">{faq.question}</h3>
                                <p className="text-gray-700 font-baloo text-lg">{faq.answer}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-700 col-span-2">No FAQs available at the moment.</p>
                    )}
                </div>
            </div>
            <footer className="bg-gray-800 text-white text-center py-4 mt-12">
                <p className="text-sm">
                    All rights are reserved by Edujoy.
                </p>
            </footer>
        </div>
    );
};

export default GetStarted;
