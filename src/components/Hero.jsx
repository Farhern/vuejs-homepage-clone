import React from 'react';
import { RiVideoFill } from 'react-icons/ri'
import { AiOutlineArrowRight } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='md:w-full md:h-[560px] w-[400px] h-[500px] mx-auto border-b border-gray-700 flex flex-col items-center justify-center'>
     <div className='mx-auto text-5xl md:text-7xl font-extrabold text-cyan-400'>
       <h1 className='flex justify-center'>
          <span className='text-green-300 mr-4'>The</span> Progressive
        </h1>
       <h1 className='ml-[60px] mt-3'>
           JavaScript Framework
       </h1>
     </div>
     <div className='text-neutral-500 p-5 md:p-5 md:text-gray-500 md:text-2xl md:mt-4'>
       <p>An approachable, performant and versatile framework for building web user interfaces.</p>
     </div>

     <div className='sm:flex sm:items-center mt-3'>
      <div className='ml-[55px] sm:mt-5'>
      <button 
        className='flex items-center bg-green-400 mr-5 px-5 py-2 rounded-md font-bold hover:bg-cyan-400 duration-300'>
        <RiVideoFill size={20} className='mr-2' />
        Why Vue
      </button>
      </div>
      <div className='flex items-center mt-5'>
      <button 
         className='flex items-center px-5 font-bold py-2 rounded-md mr-3 bg-gray-600 hover:bg-gray-500 duration-300'>
            Get Started
          <AiOutlineArrowRight className='ml-1 hoverStyle' />
      </button>
      <button 
         className='px-5 bg-gray-600 py-2 rounded-md font-bold ml-2 hover:bg-gray-500 duration-300'>
            Install
      </button>
      </div>
     </div>
    </div>
  );
};

export default Hero;
