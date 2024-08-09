import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const LearnMore = () => {
  return (
    <div className="container-fluid mx-auto w-96 md:w-full bg-blue-100 min-h-screen">
      <Navbar />
      <div className="text-center py-12 px-4 mt-24">
        <h1 className="text-5xl font-poppins font-bold text-pink-500 mb-8">Learn More About EdJoy</h1>
        <p className="text-xl text-green-600 mb-6">
          EdJoy is a fun and interactive learning platform for kids! Here, we explore exciting subjects through games, quizzes, and hands-on activities. Let's make learning an adventure!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-yellow-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-purple-500 mb-4">Interactive Games</h2>
            <p className="text-lg text-gray-700">
              Dive into our collection of educational games that make learning math, science, reading, and more, a lot of fun!
            </p>
          </div>
          <div className="bg-green-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-purple-500 mb-4">Exciting Quizzes</h2>
            <p className="text-lg text-gray-700">
              Challenge yourself with quizzes designed to test your knowledge and help you learn more about different topics.
            </p>
          </div>
          <div className="bg-pink-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-purple-500 mb-4">Science Experiments</h2>
            <p className="text-lg text-gray-700">
              Get hands-on with fun and easy science experiments that you can do at home with simple materials.
            </p>
          </div>
          <div className="bg-purple-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-purple-500 mb-4">Art & Craft Projects</h2>
            <p className="text-lg text-gray-700">
              Unleash your creativity with art and craft projects that inspire and engage your imagination.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LearnMore;
