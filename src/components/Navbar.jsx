import React from 'react';
import { AiOutlineSearch, AiOutlineDown } from 'react-icons/ai';
import { BsGithub, BsTwitter, BsDiscord } from 'react-icons/bs';
import { LuLanguages } from 'react-icons/lu';
import Profile from '../images/profile.png';

const Navbar = () => {
  return (
   <div className={'w-full h-[60px] p-4 flex items-center justify-between sm:flex border-b border-gray-800'}>
    <div className='flex items-center ml-5 cursor-pointer mr-0'>
     <img 
       className='w-9'
       src={Profile} 
       alt="/" 
     />
    <h1 className='text-gray-100 ml-1'>Vue.js</h1>
    </div>
    <div className='bg-black/5 text-sm flex items-center rounded-full px-2 w-[60px] sm:w-[100px] lg:w-[110px]'>
      <AiOutlineSearch 
         className='text-gray-400' 
         size={40} 
      />
      <form className='w-[130px]'>
        <input 
          type="text" 
          placeholder='Search'
          className='outline-none bg-transparent p-2 w-full' 
        />
        <button type="submit"></button>
        </form>
    </div>
        <div className='ml-0 mr-40'>
           <button className='text-gray-400 text-sm/3 rounded-md border border-gray-400 p-1'>Ctrl K</button>
        </div>
    
    <div className='text-gray-200 flex text-sm/5 cursor-pointer'>
        <p className='mr-5 flex items-center hover:text-gray-400'>Doc <AiOutlineDown className='ml-2' size={12} /></p>
        <p className='mr-5 hover:text-green-500'>API</p>
        <p className='mr-5 hover:text-green-500'>Playground</p>
        <p className='mr-5 flex items-center hover:text-gray-400'>Ecosystem <AiOutlineDown className='ml-2' size={12} /></p>
        <p className='mr-5 flex items-center hover:text-gray-400'>About <AiOutlineDown className='ml-2' size={12} /></p>
        <p className='mr-5 hover:text-green-500'>Sponsor</p>
        <p className='mr-5 hover:text-green-500'>Partners</p>
    </div>
    <div className='px-3 border-l border-r border-gray-700'>
        <LuLanguages className='text-gray-300 cursor-pointer ' size={20} />
    </div>
    <div className='text-gray-50 flex items-center cursor-pointer'>
        <BsGithub className=' mr-5' size={20} />
        <BsTwitter className='mr-5' size={20} />
        <BsDiscord className='mr-5' size={20} />
    </div>
    </div>
  );
};

export default Navbar;
