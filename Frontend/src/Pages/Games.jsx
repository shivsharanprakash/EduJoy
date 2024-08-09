import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Midbar from '../Components/Midbar';
import Footer from '../Components/Footer';

const Games = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('http://localhost:3000/games');
                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.log('Error fetching games:', error);
            }
        };
        fetchGames();
    }, []);

    return (
        <div className='bg-gradient-to-b from-pink-100 to-blue-200 min-h-screen'>
            <Navbar />
            <div className="mt-24">
                <Midbar />
            </div>
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6'>
                {games && games.map((game, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <figure>
                            <img
                                src={game.image}
                                alt={game.title}
                                className="w-full h-48 object-cover"
                            />
                        </figure>
                        <div className="p-4 text-center">
                            <h2 className="text-2xl font-bold text-blue-600 mb-2">{game.title}</h2>
                            <div className="mt-4">
                                <a href={game.link} target='_blank' rel='noopener noreferrer' className="bg-yellow-400 text-white text-lg font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-300">Play Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Games;
