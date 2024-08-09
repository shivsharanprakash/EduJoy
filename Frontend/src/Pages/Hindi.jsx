import React from 'react';
import Navbar from '../Components/Navbar';
import Subbar from '../Components/Subbar';
import Footer from '../Components/Footer';

const Hindi = () => {
    return (
        <div className="bg-gradient-to-b from-yellow-100 to-pink-200 min-h-screen">
            <Navbar />
            <div className="text-center py-12 bg-yellow-300 text-gray-800 mt-16">
                <h1 className="text-5xl font-bold font-baloo mb-4">Welcome to the Hindi Learning Zone!</h1>
                <p className="text-xl font-baloo">Discover fun ways to learn Hindi through stories, alphabets, and songs!</p>
            </div>
            <div className='mt-12 mx-auto'>
                <Subbar />
            </div>
            <div className='container-fluid h-auto flex flex-col md:flex-row justify-center md:space-x-16 mt-12 space-y-12 md:space-y-0'>
                <div className="transform hover:scale-105 transition duration-300 w-full max-w-xs">
                    <div className="card bg-yellow-50 border-4 border-yellow-300 rounded-lg shadow-xl">
                        <figure>
                            <img
                                src="https://img.freepik.com/free-vector/hand-drawn-bedtime-stories-illustration_52683-154364.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid"
                                alt="Hindi Stories"
                                className="w-full h-60 object-cover rounded-t-lg"
                            />
                        </figure>
                        <h2 className="card-title text-center mx-auto font-baloo text-3xl text-yellow-600 mt-2">Read Hindi Stories</h2>
                        <div className="card-body">   
                            <div className="card-actions justify-center">
                                <a href='https://www.typingbaba.com/' className="btn bg-yellow-400 hover:bg-yellow-500 text-white w-full font-baloo text-xl">Read</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transform hover:scale-105 transition duration-300 w-full max-w-xs">
                    <div className="card bg-yellow-50 border-4 border-yellow-300 rounded-lg shadow-xl">
                        <figure>
                            <img
                                src="https://img.freepik.com/premium-vector/hindi-alphabet-worksheet-alphabet-ao-1_867537-87.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid"
                                alt="Learn Hindi"
                                className="w-full h-60 object-cover rounded-t-lg"
                            />
                        </figure>
                        <h2 className="card-title text-center mx-auto font-baloo text-3xl text-yellow-600 mt-2">Learn Hindi Alphabets</h2>
                        <div className="card-body">   
                            <div className="card-actions justify-center">
                                <a href='https://www.typingbaba.com/' className="btn bg-yellow-400 hover:bg-yellow-500 text-white w-full font-baloo text-xl">Learn</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transform hover:scale-105 transition duration-300 w-full max-w-xs">
                    <div className="card bg-yellow-50 border-4 border-yellow-300 rounded-lg shadow-xl">
                        <figure>
                            <img
                                src="https://img.freepik.com/free-vector/flat-bhai-dooj-illustration_23-2150867115.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid"
                                alt="Hindi Songs"
                                className="w-full h-60 object-cover rounded-t-lg"
                            />
                        </figure>
                        <h2 className="card-title text-center mx-auto font-baloo text-3xl text-yellow-600 mt-2">Sing Hindi Songs</h2>
                        <div className="card-body">   
                            <div className="card-actions justify-center">
                                <a href='https://www.typingbaba.com/' className="btn bg-yellow-400 hover:bg-yellow-500 text-white w-full font-baloo text-xl">Sing</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <Footer />
            </div>
        </div>
    );
}

export default Hindi;
