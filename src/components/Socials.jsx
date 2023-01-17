import React from 'react';
import Title from './Title';
import socials from '../data/socials';

function Socials({imgUrl, title, link}) {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className='flex justify-center items-center'>
        <a
          href='https://www.github.com/standrewsdaniel'
          target="_blank"
          rel="noopener noreferrer"
          classname="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
        >
            <Title className="pointer-events-none focus:pointer-events-auto">Also See</Title>

            <img src='../assets/github.png' alt='title' className='flex flex-col justify-center w-18 md:w-15 sm:w-10 py:5'/>   
            
        </a>
        
      </div>
    </div>
  )
}

export default Socials;