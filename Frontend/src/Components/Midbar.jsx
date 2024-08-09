import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Midbar = () => {
    const location = useLocation();
    const [activequiz, setActivequiz] = useState(null);

    useEffect(() => {
        const pathParts = location.pathname.split('/');
        const currentquiz = pathParts[2];
        setActivequiz(currentquiz);
    }, [location]);

    return (
        <div className='container-fluid mx-auto'>
            <p className="text-center text-3xl font-fredoka">Free Online Resources for kids......</p>
            <ul className="flex space-x-20 justify-center mt-6 cursor-pointer overflow-auto">
                {['mathsquiz', 'sciencequiz', 'games'].map((quiz) => (
                    <li key={quiz} onClick={() => setActivequiz(quiz)}>
                        <Link to={`/quiz/${quiz}`}>
                            {quiz.charAt(0).toUpperCase() + quiz.slice(1)}
                        </Link>
                        {activequiz === quiz && (
                            <div className='h-2 bg-orange-500 mt-1 w-full rounded-md'></div>
                        )}
                    </li>
                ))}

            </ul>
        </div>
    );

};

export default Midbar
