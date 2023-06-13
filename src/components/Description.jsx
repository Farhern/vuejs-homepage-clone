import React from 'react';

const Description = () => {
  return (
    <div className='w-full h-[450px] flex justify-center'>
    <div className='flex justify-center'>
      <div className='grid grid-cols-3 gap-5 p-5 mt-10'>
        <div className='w-40 h-30 justify-center items-center mr-10'>
        <h1 className='text-gray-200 font-bold text-xl mb-3'>Approachable</h1>
        <p className='text-gray-500'>
            Builds on top of standard HTML, CSS and JavaScript 
            with intuitive API and world-class documentation.
        </p>
      </div>
      <div className='w-40 h-10 justify-center items-center'>
        <h1 className='text-gray-200 font-bold text-xl mb-3'>Performant</h1>
        <p className='text-gray-500'>
            Truly reactive, compiler-optimized rendering system 
            that rarely requires manual optimization.
        </p>
      </div>
      <div className='w-40 justify-center items-center'>
        <h1 className='text-gray-200 font-bold text-xl mb-3'>Versatile</h1>
        <p className='text-gray-500'>
            A rich, incrementally adoptable ecosystem that scales 
            between a library and a full-featured framework.
        </p>
      </div>
    </div>
   </div>
 </div>
  );
};

export default Description;
