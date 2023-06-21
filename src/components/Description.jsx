import React from 'react';

const Description = () => {
  return (
    <div className='w-full h-[700px] md:h-[450px] md:flex justify-center'>
      <div className='md:max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:p-5 mt-10'>
       
        <div className='md:w-[200px] px-[60px] py-4 pb-10 md:justify-center items-center'>
        <h1 className='text-gray-200 font-bold text-xl mb-3'>Approachable</h1>
        <p className='text-neutral-400 w-full md:w-[200px]'>
            Builds on top of standard HTML, CSS and JavaScript 
            with intuitive API and world-class documentation.
        </p>
      </div>
      <div className='md:w-[200px] px-[60px] py-4 pb-10 md:justify-center md:ml-8 items-center mr-8'>
        <h1 className='text-gray-200 font-bold text-xl mb-3'>Performant</h1>
        <p className='text-neutral-400 w-full md:w-[200px]'>
            Truly reactive, compiler-optimized rendering system 
            that rarely requires manual optimization.
        </p>
      </div>
      <div className='md:w-[210px] px-[60px] py-4 md:ml-10 justify-center items-center pb-10'>
        <h1 className='text-gray-200 font-bold text-xl mb-3'>Versatile</h1>
        <p className='text-neutral-400 w-full md:w-[210px]'>
            A rich, incrementally adoptable ecosystem that scales 
            between a library and a full-featured framework.
        </p>
      </div>

      <div className='px-6 mt-[60px] md:mt-0'>
        <h1 className='text-gray-200 font-bold text-xl mb-5'>Platinum Sponsors</h1>
        <h1 className='text-gray-200 font-bold text-xl'>Gold Sponsors</h1>
    </div>
    </div>
   </div>
   
  );
};

export default Description;

<div className='px-[60px] py-4'></div>