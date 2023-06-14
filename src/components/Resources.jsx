import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const Resources = () => {
  return (
    <div className='w-full h-[500px] bg-neutral-800 flex justify-center'>
     <div className=''>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5 mt-10'>
        <div className='justify-center items-center mb-3 mr-10'>
            <h1 className='text-gray-100 text-md mb-2'>Docs</h1>
            <ul className='text-neutral-400 cursor-pointer'>
                <li>Guide</li>
                <li>Tutorial</li>
                <li>Examples</li>
                <li>Quick Start</li>
                <li className='flex items-center'>Vue 2 Docs <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center'>Migration from Vue 2 <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
            </ul>
        </div>
        <div className='justify-center items-center lg:ml-10 mr-10 -mb-5'>
            <h1 className='text-gray-100 text-md mb-2'>Resources</h1>
            <ul className='text-neutral-400 cursor-pointer'>
                <li>Partners</li>
                <li>Themes</li>
                <li className='flex items-center'>Clarification <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center'>Jobs <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center'>T-Shirt Shop <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
            </ul>
        </div>
        <div className='lg:ml-10'>
            <h1 className='text-gray-100 text-md mb-2'>Video Courses</h1>
            <ul className='text-neutral-400 cursor-pointer'>
                <li className='flex items-center'>Vue Mastery <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center'>Vue Mastery <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
            </ul>
        </div>
        <div className='mr-10'>
            <h1 className='text-gray-100 text-md mb-2'>About</h1>
            <ul className='text-neutral-400 cursor-pointer'>
                <li>FAQ</li>
                <li>Team</li>
                <li>Releases</li>
                <li>Community Guide</li>
                <li>Code of Conduct</li>
                <li className='flex items-center'>The Documentary <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
            </ul>
        </div>
        <div className='sm:ml-10 -mt-5'>
            <h1 className='text-gray-100 text-md mb-2'>Official Libraries</h1>
            <ul className='text-neutral-400 cursor-pointer'>
                <li className='flex items-center'>Vue Router <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center'>Pinia <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li>Tooling Guide</li>
            </ul>
        </div>
        <div className='ml-10 -mt-[100px] -mb-[100px]'>
            <h1 className='text-gray-100 text-md mb-2'>Help</h1>
            <ul className='text-neutral-400 cursor-pointer'>
                <li className='flex items-center'>Discord Chat <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center'>GitHub Discussions <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center'>DEV Community <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
            </ul>
        </div>
        <div className='grid justify-end items-center'>
            <h1 className='text-gray-100 text-md mb-2'>News</h1>
            <ul className='text-neutral-400 cursor-pointer'>
                <li className='flex items-center'>Blog <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center'>Twitter <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li className='flex items-center'>Events <BsArrowUpRight className='text-sm ml-1' size={10} /></li>
                <li>Newsletters</li>
            </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Resources;
