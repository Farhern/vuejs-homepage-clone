import React from 'react';
import { SiAppwrite } from 'react-icons/si';

const Sponsors = () => {
  return (
    <div className='flex items-center justify-center text-gray-500 p-4 border-b border-gray-700 font-medium'>
      <div className='mr-5'>
        <p className='text-sm'>Special Sponsor</p>
      </div>
      <div className='mr-5 text-2xl flex items-center cursor-pointer'>
        <SiAppwrite size={30} className='mr-1 text-gray-400' />
        <p>app<span className='font-bold text-gray-400'>write</span></p>
      </div>
      <div>
        <p>Build Fast. Scale Big. All in One Place.</p>
      </div>
    </div>
  )
};

export default Sponsors;
