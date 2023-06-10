import React from 'react';
import { RiVideoFill } from 'react-icons/ri'
import { AiOutlineArrowRight } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='w-full h-[500px] border-b border-gray-700 flex flex-col items-center justify-center'>
     <div className='text-7xl font-black text-cyan-400'>
       <h1 className='flex justify-center'>
          <span className='text-green-300 mr-4'>The</span> Progressive
        </h1>
       <h1>JavaScript Framework</h1>
     </div>

     <div className='p-5 text-gray-500 text-2xl'>
       <p>An approachable, performant and versatile framework for building web user interfaces.</p>
     </div>

     <div className='flex items-center'>
      <button 
        className='flex items-center bg-cyan-300 mr-5 px-5 py-2 rounded-md font-bold hover:bg-cyan-400'>
        <RiVideoFill size={20} />
        Why Vue
      </button>
      <button 
         className='flex items-center px-5 font-bold py-2 rounded-md mr-3 bg-gray-400'>
          Get Started
          <AiOutlineArrowRight className='ml-1' />
      </button>
      <button 
         className='px-2 bg-gray-600'>
          Install
      </button>
     </div>
    </div>
  );
};

export default Hero;
