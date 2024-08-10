import React from 'react';
import Navbar from '../Components/Navbar';
import Subbar from '../Components/Subbar';
import Footer from '../Components/Footer';

const Science = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-200">
            <Navbar />
            <div className="mt-16 md:mt-24">
                <Subbar />
            </div>
            <div className="container mx-auto h-auto flex flex-col md:flex-row justify-center md:space-x-16 mt-12 space-y-12 md:space-y-0 mb-8">
                <div className="transform hover:scale-105 transition duration-300">
                    <div className="card bg-white rounded-lg shadow-2xl w-96">
                        <figure className="rounded-t-lg overflow-hidden">
                            <img
                                src="https://img.freepik.com/premium-photo/exploring-wonders-education-journey-through-knowledge-discovery-this-image-depicts_924727-41773.jpg?ga=GA1.2.1129495211.1714569937&semt=ais_hybrid"
                                alt="Watch Lectures"
                                className="w-full h-60 object-cover"
                            />
                        </figure>
                        <div className="p-6">
                            <h2 className="font-semibold  text-center text-4xl font-baloo text-blue-600 mt-4">Watch Lectures!</h2>
                            <div className="card-actions justify-center mt-6">
                                <a href="https://www.youtube.com/watch?v=AHQGNb0zBgg" className="btn bg-gradient-to-r from-blue-400 to-blue-600 text-white w-full font-baloo text-xl hover:from-blue-600 hover:to-blue-800">Watch</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transform hover:scale-105 transition duration-300">
                    <div className="card bg-white rounded-lg shadow-2xl w-96">
                        <figure className="rounded-t-lg overflow-hidden">
                            <img
                                src="https://img.freepik.com/premium-vector/girl-doing-science-experiments-lab_961875-385659.jpg?ga=GA1.2.1129495211.1714569937&semt=ais_hybrid"
                                alt="Experiments"
                                className="w-full h-60 object-cover"
                            />
                        </figure>
                        <div className="p-6">
                            <h2 className="font-semibold  text-center text-4xl font-baloo text-green-600 mt-4">Experiments</h2>
                            <div className="card-actions justify-center mt-6">
                                <a href="https://www.goodhousekeeping.com/life/parenting/g32176446/science-experiments-for-kids/" className="btn bg-gradient-to-r from-green-400 to-green-600 text-white w-full font-baloo text-xl hover:from-green-600 hover:to-green-800">See More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transform hover:scale-105 transition duration-300">
                    <div className="card bg-white rounded-lg shadow-2xl w-96">
                        <figure className="rounded-t-lg overflow-hidden">
                            <img
                                src="https://img.freepik.com/free-vector/science-method-worksheet-children_1308-96630.jpg?ga=GA1.2.1129495211.1714569937&semt=ais_hybrid"
                                alt="Get Notes"
                                className="w-full h-60 object-cover"
                            />
                        </figure>
                        <div className="p-6">
                            <h2 className="font-semibold  text-center text-4xl font-baloo text-red-600 mt-4">Get Notes!</h2>
                            <div className="card-actions justify-center mt-6">
                                <a href="https://sciencenotes.org/science-notes-posts/" className="btn bg-gradient-to-r from-red-400 to-red-600 text-white w-full font-baloo text-xl hover:from-red-600 hover:to-red-800">Get</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Science;
