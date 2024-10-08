import React from 'react';
import Navbar from '../Components/Navbar';
import Subbar from '../Components/Subbar';
import Footer from '../Components/Footer';

const Maths = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-200">
            <Navbar />
            <div className="text-center py-12 bg-blue-500 text-white mt-16">
                <h1 className="text-5xl font-bold font-baloo">Welcome to the Math Zone!</h1>
                <p className="mt-4 text-xl font-baloo">"Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding." - William Paul Thurston</p>
            </div>
           <div className='mt-8'> <Subbar /></div>
            <div className="container mx-auto mt-12 grid gap-12 grid-cols-1 md:grid-cols-3 px-4">
                <div className="transform hover:scale-105 transition duration-300">
                    <div className="card bg-white rounded-lg shadow-2xl">
                        <figure className="rounded-t-lg overflow-hidden">
                            <img
                                src="https://img.freepik.com/free-photo/cartoon-student-math-class_23-2151641222.jpg?ga=GA1.2.1129495211.1714569937&semt=ais_hybrid"
                                alt="Solve Problems"
                                className="w-full h-60 object-cover"
                            />
                        </figure>
                        <div className="p-6">
                            <h2 className="font-semibold  text-center text-4xl font-baloo text-blue-600 mt-4">Solve Problems!</h2>
                            <div className="card-actions justify-center mt-6">
                                <a href="https://blog.khanacademy.org/free-math-worksheets/" className="btn bg-gradient-to-r from-blue-400 to-blue-600 text-white w-full font-baloo text-xl hover:from-blue-600 hover:to-blue-800">Solve</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transform hover:scale-105 transition duration-300">
                    <div className="card bg-white rounded-lg shadow-2xl">
                        <figure className="rounded-t-lg overflow-hidden">
                            <img
                                src="https://img.freepik.com/free-vector/left-handers-day-illustration_23-2148574976.jpg?ga=GA1.2.1129495211.1714569937&semt=ais_hybrid"
                                alt="Watch Lectures"
                                className="w-full h-60 object-cover"
                            />
                        </figure>
                        <div className="p-6">
                            <h2 className="font-semibold  text-center text-4xl font-baloo text-green-600 mt-4">Watch Lectures!</h2>
                            <div className="card-actions justify-center mt-6">
                                <a href="https://www.youtube.com/watch?v=bhehFcs4yrk&list=PLVLoWQFkZbhUKNZ2TY-PsmlVj8oRhTIS7" className="btn bg-gradient-to-r from-green-400 to-green-600 text-white w-full font-baloo text-xl hover:from-green-600 hover:to-green-800">Watch</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transform hover:scale-105 transition duration-300">
                    <div className="card bg-white rounded-lg shadow-2xl">
                        <figure className="rounded-t-lg overflow-hidden">
                            <img
                                src="https://img.freepik.com/free-photo/flat-lay-school-supplies-assortment_23-2148913522.jpg?ga=GA1.2.1129495211.1714569937&semt=ais_hybrid"
                                alt="Get Notes"
                                className="w-full h-60 object-cover"
                            />
                        </figure>
                        <div className="p-6">
                            <h2 className="font-semibold  text-center text-4xl font-baloo text-red-600 mt-4">Get Notes!</h2>
                            <div className="card-actions justify-center mt-6">
                                <a href="https://jimmymaths.com/math-revision-notes/" className="btn bg-gradient-to-r from-red-400 to-red-600 text-white w-full font-baloo text-xl hover:from-red-600 hover:to-red-800">Get</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8'><Footer /></div>
            
        </div>
    );
};

export default Maths;
