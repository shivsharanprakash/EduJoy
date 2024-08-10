import React from 'react';
import Navbar from '../Components/Navbar';
import Subbar from '../Components/Subbar';
import Footer from '../Components/Footer';

const Marathi = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-300">
            <Navbar />
            <div className="text-center py-12 bg-yellow-400 text-white mt-16">
                <h1 className="text-5xl font-bold font-baloo mb-4">Welcome to the Marathi Learning Zone!</h1>
                <p className="text-xl font-baloo">Discover the beauty of Marathi with stories, alphabets, and songs!</p>
            </div>
            <div className="mt-16 md:mt-24">
                <Subbar />
            </div>
            <div className="container mx-auto h-auto flex flex-col md:flex-row justify-center md:space-x-8 mt-12 space-y-12 md:space-y-0 mb-8">
                <div className="w-full max-w-sm">
                    <div className="card bg-yellow-50 border-4 border-yellow-300 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                        <figure>
                            <img
                                src="https://img.freepik.com/free-photo/education-day-scene-fantasy-style-aesthetic_23-2151040272.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid"
                                alt="Marathi Stories"
                                className="w-full h-60 object-cover rounded-t-lg"
                            />
                        </figure>
                        <h2 className="card-title text-center mx-auto font-baloo text-3xl text-yellow-600 mt-2">वाचा मराठी गोष्टी</h2>
                        <div className="card-body">
                            <div className="card-actions justify-center">
                                <a href="https://www.marathigyaan.com/2021/03/marathi-stories-for-kids-with-moral.html" className="btn bg-yellow-400 hover:bg-yellow-500 text-white w-full font-baloo text-xl">वाचा</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-sm">
                    <div className="card bg-yellow-50 border-4 border-yellow-300 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                        <figure>
                            <img
                                src="https://img.freepik.com/premium-photo/hindi-diwas-concept-tree-with-open-book_1133491-5.jpg?ga=GA1.1.1129495211.1714569937&semt=sph"
                                alt="Learn Marathi"
                                className="w-full h-60 object-cover rounded-t-lg"
                            />
                        </figure>
                        <h2 className="card-title text-center mx-auto font-baloo text-3xl text-yellow-600 mt-2">शिका मराठी वर्णमाला</h2>
                        <div className="card-body">
                            <div className="card-actions justify-center">
                                <a href="https://www.mahasarav.com/marathi-varnamala/" className="btn bg-yellow-400 hover:bg-yellow-500 text-white w-full font-baloo text-xl">शिका</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-sm">
                    <div className="card bg-yellow-50 border-4 border-yellow-300 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
                        <figure>
                            <img
                                src="https://img.freepik.com/premium-photo/happy-cute-kid-boy-singing-song_1240525-38837.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid"
                                alt="Marathi Songs"
                                className="w-full h-60 object-cover rounded-t-lg"
                            />
                        </figure>
                        <h2 className="card-title text-center mx-auto font-baloo text-3xl text-yellow-600 mt-2">गावा मराठी गाणी</h2>
                        <div className="card-body">
                            <div className="card-actions justify-center">
                                <a href="https://marathi.jagrutimanch.com/marathi-badbad-geete-part1/" className="btn bg-yellow-400 hover:bg-yellow-500 text-white w-full font-baloo text-xl">गावा</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Marathi;
