import React from 'react';
import Navbar from '../Components/Navbar';
import Subbar from '../Components/Subbar';
import Footer from '../Components/Footer';

const Arts = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 w-96 md:w-full">
            <Navbar />
            <div className="mt-24 md:mt-24">
                <Subbar />
            </div>
            <div className="container mx-auto h-auto flex flex-col md:flex-row justify-center md:space-x-16 mt-12 space-y-12 md:space-y-0 mb-8">
                <div className="transform hover:scale-105 transition duration-300">
                    <div className="card bg-white rounded-lg shadow-2xl w-96">
                        <figure className="rounded-t-lg overflow-hidden">
                            <img
                                src="https://img.freepik.com/free-photo/portrait-girl-boy-showcasing-beautiful-friendship_23-2151537463.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid"
                                alt="Drawing and Coloring"
                                className="w-full h-60 object-cover"
                            />
                        </figure>
                        <div className="p-6">
                            <h2 className="card-title text-center text-4xl font-baloo text-pink-600 mt-4">Drawing and Coloring</h2>
                            <div className="card-actions justify-center mt-6">
                                <a href="https://www.crayola.com/free-coloring-pages/" className="btn bg-gradient-to-r from-pink-400 to-pink-600 text-white w-full font-baloo text-xl hover:from-pink-600 hover:to-pink-800">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transform hover:scale-105 transition duration-300">
                    <div className="card bg-white rounded-lg shadow-2xl w-96">
                        <figure className="rounded-t-lg overflow-hidden">
                            <img
                                src="https://img.freepik.com/free-vector/diy-creative-workshop-concept-with-hands_23-2148533768.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid"
                                alt="Crafts"
                                className="w-full h-60 object-cover"
                            />
                        </figure>
                        <div className="p-6">
                            <h2 className="card-title text-center text-4xl font-baloo text-green-600 mt-4">Crafts</h2>
                            <div className="card-actions justify-center mt-6">
                                <a href="https://www.kidspot.com.au/things-to-do/activity-type/craft" className="btn bg-gradient-to-r from-green-400 to-green-600 text-white w-full font-baloo text-xl hover:from-green-600 hover:to-green-800">Create</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transform hover:scale-105 transition duration-300">
                    <div className="card bg-white rounded-lg shadow-2xl w-96">
                        <figure className="rounded-t-lg overflow-hidden">
                            <img
                                src="https://img.freepik.com/premium-photo/happy-cute-little-kid-boy-working-out-with-listening-music_1240525-39317.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid"
                                alt="Music and Dance"
                                className="w-full h-60 object-cover"
                            />
                        </figure>
                        <div className="p-6">
                            <h2 className="card-title text-center text-4xl font-baloo text-purple-600 mt-4">Music and Dance</h2>
                            <div className="card-actions justify-center mt-6">
                                <a href="https://www.kidsongs.com/" className="btn bg-gradient-to-r from-purple-400 to-purple-600 text-white w-full font-baloo text-xl hover:from-purple-600 hover:to-purple-800">Listen and Move</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Arts;
