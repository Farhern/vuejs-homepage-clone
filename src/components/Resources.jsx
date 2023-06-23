import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const Resources = () => {
  return (
    <div className='w-full h-[1000] lg:h-[570px] bg-neutral-800 flex justify-center'>
     <div className='-ml-[110px]'>
      <div className='grid grid-cols-1 text-sm sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2  gap-4 p-5 mt-10'>
        <div className='justify-center items-center mb-3 mr-10'>
            <h1 className='text-gray-100 text-lg mb-2 font-semibold'>Docs</h1>
            <ul className='text-neutral-400 cursor-pointer font-sans'>
                <li className='mb-1'>Guide</li>
                <li className='mb-1'>Tutorial</li>
                <li className='mb-1'>Examples</li>
                <li className='mb-1'>Quick Start</li>
                <li className='mb-1'>Glossary</li>
                <li className='flex items-center mb-1'>Vue 2 Docs <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center'>Migration from Vue 2 <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
            </ul>
        </div>
        <div className='justify-center items-center md:ml-[50px] mr-10 -mb-5'>
            <h1 className='text-gray-100 font-semibold text-lg mb-2'>Resources</h1>
            <ul className='text-neutral-400 cursor-pointer font-sans'>
                <li className='mb-1'>Partners</li>
                <li className='mb-1'>Themes</li>
                <li className='flex items-center mb-1'>Clarification <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center mb-1'>Jobs <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center'>T-Shirt Shop <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
            </ul>
        </div>
        <div className='sm:ml-[100px]'>
            <h1 className='text-gray-100 font-semibold text-md mb-2'>Help</h1>
            <ul className='text-neutral-400 cursor-pointer font-sans'>
                <li className='flex items-center mb-1'>Discord Chat <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center mb-1'>GitHub Discussions <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center'>DEV Community <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
            </ul>
        </div>
       
        <div className='mr-10 md:mt-[20px]'>
            <h1 className='text-gray-100 font-semibold text-md mb-2'>About</h1>
            <ul className='text-neutral-400 cursor-pointer font-sans'>
                <li className='mb-1'>FAQ</li>
                <li className='mb-1'>Team</li>
                <li className='mb-1'>Releases</li>
                <li className='mb-1'>Community Guide</li>
                <li className='mb-1'>Code of Conduct</li>
                <li className='flex items-center'>The Documentary <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
            </ul>
        </div>
        <div className='sm:ml-10 md:ml-[50px] md:mb-0 md:-mt-9'>
            <h1 className='text-gray-100 font-semibold text-md mb-2'>Official Libraries</h1>
            <ul className='text-neutral-400 cursor-pointer font-sans'>
                <li className='flex items-center mb-1'>Vue Router <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center mb-1'>Pinia <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='mb-1'>Tooling Guide</li>
            </ul>
        </div>
        
        <div className='sm:ml-10 md:ml-[100px] sm:-mt-[90px]'>
            <h1 className='text-gray-100 font-semibold text-md mb-2'>News</h1>
            <ul className='text-neutral-400 cursor-pointer font-sans'>
                <li className='flex items-center mb-1'>Blog <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center mb-1'>Twitter <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center mb-1'>Events <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li>Newsletters</li>
            </ul>
        </div>
       
      </div>
      <div className='grid grid-col-1 -ml-[40px] -mt-[140px] md:justify-center items-center'>
            <h1 className='text-gray-100 text-md font-semibold mb-2'>Video Courses</h1>
            <ul className='text-neutral-400 cursor-pointer font-sans'>
                <li className='flex items-center mb-1'>Vue Mastery <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center'>Vue Mastery <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
            </ul>
        </div>
    </div>
    </div>
  );
};

export default Resources;
