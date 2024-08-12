import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import banner from '../assets/banner.jpg';
import Hero from '../Components/Hero';
import Feature from '../Components/Feature';
import Plan from '../Components/Plan';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
      <div className='sticky top-0 z-50 mb-24'>
        <Navbar />
      </div>
      <div className='max-w-96 md:min-w-full h-28 mx-auto md:h-36'>
        <img className='w-full h-full object-fill' src={banner} alt="Banner" />
      </div>
      <div>
        <Hero />
      </div>
      <hr className='my-20 ' />
      <div className='mx-16'>
        <Feature />
      </div>
      <hr className='my-20 md:my-28' />
      <div className='container flex flex-col md:flex-row mx-auto'>
        <div className='w-full md:w-1/2'>
          <img src="https://img.freepik.com/free-vector/girl-thinking-with-empty-callout_1308-97482.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid" alt="Thinking Girl" />
        </div>
        <div className='w-full md:w-1/2 md:mt-16 px-4'>
          <h1 className='text-3xl font-fredoka mx-auto text-center md:text-left'>Why Edujoy?</h1>
          <ul className='md:space-y-3 space-y-6 mt-4 list-disc pl-5'>
            <li className='list-disc font-baloo text-lg md:text-xl'>Interactive Learning: Engaging and interactive content to make <span className='text-sky-500'>learning fun</span> and effective for children.</li>
            <li className='list-disc font-baloo text-lg md:text-xl'>Experienced Educators: Lessons and activities designed by <span className="text-sky-500">experienced educators</span> to ensure high-quality education.</li>
            <li className='list-disc font-baloo text-lg md:text-xl'>Safe Environment: A secure and <span className='text-sky-500'>child-friendly</span> platform, ensuring a safe learning experience for kids.</li>
            <li className='list-disc font-baloo text-lg md:text-xl'>Personalized Learning: Customized learning paths to cater to each child’s <span className='text-sky-500'>unique needs</span> and learning pace.</li>
            <li className='list-disc font-baloo text-lg md:text-xl'>Diverse Subjects: A <span className='text-sky-500'>wide range of subjects</span> including math, science, language arts, and more to foster holistic development.</li>
            <li className='list-disc font-baloo text-lg md:text-xl'>Parental Involvement: Features that encourage and facilitate <span className='text-sky-500'>parental involvement</span> in their child's education.</li>
            <li className='list-disc font-baloo text-lg md:text-xl'>Fun Activities: A variety of fun and educational activities that keep children engaged and <span className='text-sky-500'>motivated</span> to learn.</li>
          </ul>
        </div>
      </div>

      <div className="h-auto container-fluid md:h-[40rem] bg-sky-100 mx-auto w-full mt-40">
        <div className='py-20'>
          <h1 className='text-2xl md:text-4xl text-center font-poppins font-semibold'>Educator's Blog For Parents</h1>
          <p className='text-xl md:mx-60 text-center mt-4'>Delve into our Expert Insights section, where esteemed teachers, child <span className='text-sky-600'>psychologists</span>, and educational specialists contribute their knowledge and answer your pressing questions. Stay informed with the <span className='text-sky-600'>latest trends</span>, research, and practical advice to help your child thrive both academically and emotionally.</p>
        </div>
        <div className='mx-auto'>
          <div className='flex flex-row justify-between md:mx-20 mx-2'>
            <h1 className='font-semibold md:text-xl  font-baloo'>LATEST ARTICLES</h1>
            <p className='md:text-lg font-semibold font-baloo'>See More <span className='text-sky-600 md:mr-32 hover:underline'>Articles</span></p>
          </div>

          <div className='flex flex-col md:flex-row md:justify-between mt-4 space-y-8 md:space-y-0 md:mx-20 '>
            <div className='flex flex-col w-full md:w-1/3 '>
              <img className='w-80 items-center' src="https://img.freepik.com/free-photo/kids-playing-laughing-with-carousel_1098-4055.jpg?ga=GA1.2.1129495211.1714569937&semt=ais_hybrid" alt="Article" />
              <p className='mx-2'>Lorem ipsum, dolor voluptatem!</p>
              <span className='text-gray-400 text-start mx-2'>30.07.2024</span>
            </div>
            <div className='flex flex-col w-full md:w-1/3 '>
              <img className='w-80 items-center' src="https://img.freepik.com/free-vector/playground-stepping-stump-with-children_1308-106435.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid" alt="Article" />
              <p className='mx-2'>Lorem ipsum, dolor voluptatem!</p>
              <span className='text-gray-400 text-start mx-2'>30.07.2024</span>
            </div>
            <div className='flex flex-col w-full md:w-1/3 '>
              <img className='w-80 items-center' src="https://img.freepik.com/premium-vector/cute-cartoon-children-playing-with-kites-grass_961875-405368.jpg?ga=GA1.1.1129495211.1714569937&semt=ais_hybrid" alt="Article" />
              <p className='mx-2'>Lorem ipsum, dolor voluptatem!</p>
              <span className='text-gray-400 text-start mx-2'>30.07.2024</span>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-40'>
        <Plan />
      </div>
      <div className='container-fluid mx-auto items-center mt-32'>
        <div className='w-full md:w-80  mx-auto '>< img className='w-full mx-auto ' src="https://img.freepik.com/free-photo/funny-cat-3d-illustration_183364-80273.jpg?ga=GA1.2.1129495211.1714569937&semt=ais_hybrid" alt="" /></div>
        <div className='bg-sky-100 h-auto md:h-80 w-full z-40'>
          <h2 className='text-center text-4xl font-fredoka pt-12'>EduJoy for Schools ..... </h2>
          <p className='text-center text-2xl'>Empowering your learning journey with personalized insights.</p>
          <div className=' flex flex-row justify-center items-center space-x-4 md:space-x-48 mt-20 pb-6'>
            <Link to='/learnmore' className=' text-white bg-lime-500 text-sm md:text-xl font-fredoka rounded-3xl px-4 py-1 md:px-12 md:py-2 hover:bg-lime-600'>Learn More</Link>
            <Link className=' text-gray-800 bg-transparent text-sm outline font-fredoka outline-1 px-4 py-1 md:text-xl rounded-3xl md:px-10 md:py-2 hover:bg-gray-800 hover:text-white' to='/signin'>Signin for Free!</Link>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
