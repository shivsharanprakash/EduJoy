import React from 'react'
import Navbar from '../Components/Navbar'
import logo from '../assets/log.jpg'
import Footer from '../Components/Footer'
const Gifts = () => {
    return (
        <>
            <div className="container-fluid mx-auto">
                <div className='mb-24'>
                    <Navbar />
                </div>
                <div className='  h-20 bg-green-600 w-96 md:w-full '><h2 className='text-center  pt-5 text-3xl font-fredoka text-white'>Gift Cards</h2></div>
                <div className='h-auto w-full'>
                    <p className='mt-10 text-center w-96 md:w-full text-xl font-fredoka text-orange-600 md:text-3xl md:mb-16'>Give the Gift of Knowledge and Wonder!</p>
                    <div className='flex flex-col md:flex-row justify-center md:space-x-16 space-y-10 md:space-y-0'>
                        <div>
                            <div className="card bg-base-100 w-96 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img
                                        src="https://img.freepik.com/free-vector/isolated-gift-box-sticker_1308-70867.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid"
                                        alt="Shoes"
                                        className="rounded-xl" />
                                </figure>
                                <p className='text-center text-2xl font-bold my-auto'>Purchase a code </p>
                                <div className="card-body items-center text-center">
                                    <div className="card-actions">
                                        <button className="bg-sky-600 text-white px-16 rounded-3xl py-2 text-2xl font-fredoka hover:bg-sky-700">Click Here</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-base-100 w-96 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img
                                        src="https://img.freepik.com/free-vector/isolated-gift-box-sticker_1308-68129.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid"
                                        alt="Shoes"
                                        className="rounded-xl" />
                                </figure>
                                <p className='text-center text-2xl font-bold my-auto'>Redeem a code </p>
                                <div className="card-body items-center text-center space-y-2">
                                    <div className="card-actions">
                                        <button className="bg-orange-500 text-white px-16 rounded-3xl py-2 text-xl font-fredoka hover:bg-orange-600">Existing Member</button>
                                    </div>
                                    <div className="card-actions">
                                        <button className="bg-orange-500 text-white px-16 rounded-3xl py-2 text-2xl font-fredoka hover:bg-orange-600">New Member</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-auto w-96 md:w-full flex flex-col md:flex-row mt-24 bg-[rgb(250,240,230)]'>
                    <div className='mx-4 md:ml-12'>
                        <div className='flex flex-row mt-20'>
                            <div className='w-1/4'>
                                <img src={logo} className='w-40' alt="" />
                            </div>
                            <div className='w-1/2 mt-6'>
                                <h2 className='text-2xl font-fredoka'>Edujoy Talented & Gifts</h2>
                                <p className='text-lg text-sky-500'>Preschool & Kindergarten, K1 - K3 Advanced Learning Program</p>
                            </div>
                        </div>
                        <div>
                            <li className="text-gray-800 mb-2 list-disc font-baloo text-xl">Engaging & Educational Fun</li>
                            <li className="text-gray-800 mb-2 list-disc font-baloo text-xl">Preschool & Kindergarten, K1 - K3 Advanced Learning Program</li>
                            <li className="text-gray-800 mb-2 list-disc font-baloo text-xl">4.8, 4.2K Ratings</li>
                            <li className="text-gray-800 mb-2 list-disc font-baloo text-xl">5000+ Learning Activities: games, videos, worksheets</li>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <img src="https://img.freepik.com/free-vector/online-christmas-celebration_23-2148788058.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid" alt="" />
                    </div>
                </div>
                <div className='w-96 md:w-full'>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Gifts
