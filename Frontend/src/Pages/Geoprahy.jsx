import React from 'react';
import Navbar from '../Components/Navbar';
import Subbar from '../Components/Subbar';
import Footer from '../Components/Footer';

const Geography = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-200">
            <Navbar />
            <div className="mt-16 md:mt-24">
                <Subbar />
            </div>
            <div className="container mx-auto h-auto flex flex-col md:flex-row justify-center md:space-x-8 mt-12 space-y-12 md:space-y-0 mb-8">
                <div className="transform hover:scale-105 transition duration-300 w-full max-w-sm">
                    <div className="card bg-white rounded-lg shadow-2xl">
                        <figure className="rounded-t-lg overflow-hidden">
                            <img
                                src="https://img.freepik.com/premium-vector/happy-children-playing-near-big-globe_43633-8840.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid"
                                alt="World Map"
                                className="w-full h-60 object-cover"
                            />
                        </figure>
                        <div className="p-6">
                            <h2 className="card-title text-center text-4xl font-baloo text-red-600 mt-4">Explore the World</h2>
                            <div className="card-actions justify-center mt-6">
                                <a href="https://www.nationalgeographic.com/maps/" className="btn bg-gradient-to-r from-red-400 to-red-600 text-white w-full font-baloo text-xl hover:from-red-600 hover:to-red-800">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transform hover:scale-105 transition duration-300 w-full max-w-sm">
                    <div className="card bg-white rounded-lg shadow-2xl">
                        <figure className="rounded-t-lg overflow-hidden">
                            <img
                                src="https://img.freepik.com/free-vector/student-girl-explaining-layers-earth_1308-125026.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid"
                                alt="Geography"
                                className="w-full h-60 object-cover"
                            />
                        </figure>
                        <div className="p-6">
                            <h2 className="card-title text-center text-4xl font-baloo text-blue-600 mt-4">Learn with Videos</h2>
                            <div className="card-actions justify-center mt-6">
                                <a href="https://www.youtube.com/watch?v=G5xk-r3Bo9I" className="btn bg-gradient-to-r from-blue-400 to-blue-600 text-white w-full font-baloo text-xl hover:from-blue-600 hover:to-blue-800">Watch</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transform hover:scale-105 transition duration-300 w-full max-w-sm">
                    <div className="card bg-white rounded-lg shadow-2xl">
                        <figure className="rounded-t-lg overflow-hidden">
                            <img
                                src="https://img.freepik.com/premium-vector/world-tourism-day-with-kid-background_33841-45.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid"
                                alt="Geography Notes"
                                className="w-full h-60 object-cover"
                            />
                        </figure>
                        <div className="p-6">
                            <h2 className="card-title text-center text-4xl font-baloo text-green-600 mt-4">Get Study Notes</h2>
                            <div className="card-actions justify-center mt-6">
                                <a href="https://geography-revision.co.uk/" className="btn bg-gradient-to-r from-green-400 to-green-600 text-white w-full font-baloo text-xl hover:from-green-600 hover:to-green-800">Get Notes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Geography;
