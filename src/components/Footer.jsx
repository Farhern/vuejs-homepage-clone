import React from 'react';

const Footer = () => {
  return (
    <div className='w-full h-[90px] mx-auto border-t border-neutral-700'>
      <div className='text-sm text-neutral-400 grid justify-center items-center p-4'>
        <p>Released under the <span className='text-gray-200'>MIT License.</span></p>
        <p>
          Copyright  &copy; 2014-2023 Evans You
        </p>
      </div>
    </div>
  );
};

export default Footer;
