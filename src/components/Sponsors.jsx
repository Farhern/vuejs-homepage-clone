import React from 'react';
import { SiAppwrite } from 'react-icons/si';

const Sponsors = () => {
  return (
    <div className='grid p-5 text-sm md:flex items-center justify-center text-gray-500 md:p-4 border-b border-gray-700 font-semibold'>
      <div className='md:mr-5 mb-1 ml-6'>
        <p className='text-sm'>Special Sponsor</p>
      </div>
      <div className='mb-1 mr-5 text-2xl flex items-center cursor-pointer'>
        <SiAppwrite size={30} className='mr-1 text-gray-400' />
        <p>app<span className='font-bold text-gray-400'>write</span></p>
      </div>
      <div className='md:ml-0 -ml-10 mb-1'>
        <p>Build Fast. Scale Big. All in One Place.</p>
      </div>
    </div>
  )
};

export default Sponsors;
