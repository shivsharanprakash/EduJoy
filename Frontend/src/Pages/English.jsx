import React from 'react';
import Navbar from '../Components/Navbar';
import Subbar from '../Components/Subbar';
import Footer from '../Components/Footer';

const English = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300">
            <Navbar />
            <div className="text-center py-12 bg-blue-400 text-white mt-16">
                <h1 className="text-5xl font-bold font-baloo mb-4">Welcome to the English Learning Fun Zone!</h1>
                <p className="text-xl font-baloo">Explore exciting ways to learn English with stories, alphabets, and songs!</p>
            </div>
            <div className="mt-16 md:mt-24">
                <Subbar />
            </div>
            <div className="container mx-auto h-auto flex flex-col md:flex-row justify-center md:space-x-8 mt-12 space-y-12 md:space-y-0 mb-8">
                <div className="w-full max-w-sm">
                    <div className="card bg-yellow-50 border-4 border-yellow-300 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                        <figure>
                            <img
                                src="https://img.freepik.com/free-vector/kids-reading-books-concept_52683-37430.jpg"
                                alt="English Stories"
                                className="w-full h-60 object-cover rounded-t-lg"
                            />
                        </figure>
                        <h2 className="card-title text-center mx-auto font-baloo text-3xl text-yellow-600 mt-2">Read English Stories</h2>
                        <div className="card-body">
                            <div className="card-actions justify-center">
                                <a href="https://www.storynory.com/" className="btn bg-yellow-400 hover:bg-yellow-500 text-white w-full font-baloo text-xl">Read</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-sm">
                    <div className="card bg-yellow-50 border-4 border-yellow-300 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                        <figure>
                            <img
                                src="https://img.freepik.com/free-vector/alphabet-abc-english-text-kids_74855-6540.jpg"
                                alt="Learn English"
                                className="w-full h-60 object-cover rounded-t-lg"
                            />
                        </figure>
                        <h2 className="card-title text-center mx-auto font-baloo text-3xl text-yellow-600 mt-2">Learn English Alphabets</h2>
                        <div className="card-body">
                            <div className="card-actions justify-center">
                                <a href="https://www.starfall.com/h/abcs/" className="btn bg-yellow-400 hover:bg-yellow-500 text-white w-full font-baloo text-xl">Learn</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-sm">
                    <div className="card bg-yellow-50 border-4 border-yellow-300 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                        <figure>
                            <img
                                src="https://img.freepik.com/free-vector/children-singing-songs_52683-37015.jpg"
                                alt="English Songs"
                                className="w-full h-60 object-cover rounded-t-lg"
                            />
                        </figure>
                        <h2 className="card-title text-center mx-auto font-baloo text-3xl text-yellow-600 mt-2">Sing English Songs</h2>
                        <div className="card-body">
                            <div className="card-actions justify-center">
                                <a href="https://www.youtube.com/playlist?list=PL3BDBE644D69D3B76" className="btn bg-yellow-400 hover:bg-yellow-500 text-white w-full font-baloo text-xl">Sing</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default English;
