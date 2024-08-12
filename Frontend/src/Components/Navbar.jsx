import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import Login from '../Pages/Login';

const Navbar = () => {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('User');
    setAuthUser(null);
    navigate('/home');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="fixed w-full top-0 left-0 z-50">
      <div className="navbar bg-white text-gray-600 shadow-md sticky top-0 z-50 h-24 font-poppins">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow font-poppins"
            >
              <li><Link to="/home" className="font-poppins">Home</Link></li>
              <li>
                <details>
                  <summary>Learning Resources</summary>
                  <ul className="p-2">
                    <li><Link to="/submenu1">Create Content</Link></li>
                    <li><Link to="/submenu2">Educator Resources</Link></li>
                    <li><Link to="/submenu3">Community Forums</Link></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Educators</summary>
                  <ul className="p-2">
                    <li>
                      <details>
                        <summary>Subjects</summary>
                        <ul className="p-2">
                          <li><Link to="/subject/maths">Maths</Link></li>
                          <li><Link to="/subject/science">Science</Link></li>
                          <li><Link to="/subject/arts">Arts</Link></li>
                          <li>
                            <details>
                              <summary>Languages</summary>
                              <ul className="p-2">
                                <li><Link to="/language/english">English</Link></li>
                                <li><Link to="/language/marathi">Marathi</Link></li>
                                <li><Link to="/language/hindi">Hindi</Link></li>
                              </ul>
                            </details>
                          </li>
                          <li><Link to="/subject/geography">Geography</Link></li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Quizzes</summary>
                        <ul className="p-2">
                          <li><Link to="/quiz/mathsquiz">Maths Quiz</Link></li>
                          <li><Link to="/quiz/sciencequiz">Science Quiz</Link></li>
                          <li><Link to="/quiz/games">Games</Link></li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              </li>
              <li><Link to="/gift-card">Gift Card</Link></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl md:ml-32 -ml-8">
            <span className="text-blue-500 font-comic-neue md:text-4xl">E</span>
            <span className="text-red-500 font-baloo md:text-4xl">d</span>
            <span className="text-yellow-500 font-fredoka md:text-4xl">u</span>
            <span className="text-green-500 font-comic-neue md:text-4xl">J</span>
            <span className="text-purple-500 font-baloo md:text-4xl">o</span>
            <span className="text-pink-500 font-fredoka md:text-4xl">y</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-10">
            <li><Link to="/home">Home</Link></li>
            <li>
              <details>
                <summary>Learning Resources</summary>
                <ul className="p-2">
                  <li>
                    <details>
                      <summary>Subjects</summary>
                      <ul className="p-2">
                        <li><Link to="/subject/maths">Maths</Link></li>
                        <li><Link to="/subject/science">Science</Link></li>
                        <li><Link to="/subject/arts">Arts</Link></li>
                        <li>
                          <details>
                            <summary>Languages</summary>
                            <ul className="p-2">
                              <li><Link to="/language/english">English</Link></li>
                              <li><Link to="/language/marathi">Marathi</Link></li>
                              <li><Link to="/language/hindi">Hindi</Link></li>
                            </ul>
                          </details>
                        </li>
                        <li><Link to="/subject/geography">Geography</Link></li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details>
                      <summary>Quizzes</summary>
                      <ul className="p-2">
                        <li><Link to="/quiz/mathsquiz">Maths Quiz</Link></li>
                        <li><Link to="/quiz/sciencequiz">Science Quiz</Link></li>
                        <li><Link to="/quiz/games">Games</Link></li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Educators</summary>
                <ul className="p-2">
                  <li><Link to="/submenu1">Create Content</Link></li>
                  <li><Link to="/submenu2">Educator Resources</Link></li>
                  <li><Link to="/submenu3">Community Forums</Link></li>
                </ul>
              </details>
            </li>
            <li><Link to="/gift-cards">Gift Cards</Link></li>
          </ul>
        </div>
        <div className="navbar-end space-x-2 md:space-x-5 md:mr-12 font-poppins">
          {!authUser ? (
            <button
              className="px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-500 font-semibold text-gray-800 font-poppins"
              onClick={openModal}
            >
              Login
            </button>
          ) : (
            <button
              className=" bg-orange-500 hover:bg-orange-600 text-white font-semibold  px-4 py-2 rounded-xl"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md h-auto overflow-y-auto">
                <Login />
                <p className="text-center mt-6">
                  Press ESC key or click the button below to close
                </p>
                <div className="text-center mt-6">
                  <button className="btn" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
          {!authUser ? (
            <Link to="/signin" className="hidden md:block md:bg-sky-400 hover:bg-sky-500 py-2 px-4 rounded-xl text-gray-800 font-semibold font-poppins">
              Signin
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
