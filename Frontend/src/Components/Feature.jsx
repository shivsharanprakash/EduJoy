import React from 'react'
import { Link } from 'react-router-dom'
const Feature = () => {
  return (
    <>
      <div className='container mx-auto flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-60 md:space-y-0'>
        <div className='w-full md:w-1/3 h-60'>
          <img className='w-40 h-40 mx-auto md:ml-20' src="https://img.freepik.com/free-vector/kids-with-earth-globe-books-pile_1308-128382.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid" alt="" />
          <h1 className='text-lg font-fredoka '>Discover Interactive Lessons</h1>
          <p className='font-baloo '>. Learn Math, Science, Language Arts, and more!</p>
          <Link to='/subject/science' className='btn bg-orange-500 hover:bg-orange-400 mt-3 hover:underline'>Start Learning </Link>
        </div>
        <div className='w-full md:w-1/3 h-60'>
          <img className='w-40 h-40 mx-auto md:ml-20' src="https://img.freepik.com/free-vector/hand-drawn-flat-design-hopscotch-game_23-2149293732.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid" alt="" />
          <h1 className='text-lg font-fredoka '>Play and Learn</h1>
          <p className='font-baloo  '>Boost your knowledge with our exciting educational games. Perfect for combining fun with learning!</p>
          <Link to='/quiz/games' className='btn bg-orange-500 hover:bg-orange-400 mt-3 hover:underline'>Play Now </Link>
        </div>
        <div className='w-full md:w-1/3 h-60'>
          <img className='w-40 h-40 mx-auto md:ml-20' src="https://img.freepik.com/premium-vector/cartoon-drawing-children-flying-plane-with-words-kids-it_958800-9091.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid" alt="" />
          <h1 className='text-lg font-fredoka '>Learn Language</h1>
          <p className='font-baloo  '>Boost your knowledge with our exciting educational games. Perfect for combining fun with learning!</p>
          <Link to='/language/english' className='btn bg-orange-500 hover:bg-orange-400 mt-3 hover:underline'>Start Learning </Link>
        </div>


      </div>
    </>
  )
}

export default Feature
