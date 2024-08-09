import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-4 lg:-mb-16">
          <p className="text-3xl md:text-4xl font-fredoka">Interactive Learning Hub for Kids Pre-K to 3rd Grade</p>
          <p className=" text-lg md:text-xl mt-2 font-baloo">With <span className='text-sky-500'>Edujoy</span>, Every Moment is a Fun Learning Adventure!</p>
          <Link to='/subscription-plan' className='btn bg-orange-500 my-8 text-lg md:mt-12 hover:bg-orange-400 px-4 text-gray-100'>Get Started Now !</Link>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="https://img.freepik.com/premium-vector/girl-lay-down-reading-book_1639-36042.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid"
            alt="Girl reading book"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
