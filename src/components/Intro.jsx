import React from 'react';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <div>
        <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white">Daniel St. Andrews</h1>
        <p className="text-base md:text-xl mb-3 font-medium">Computer Science Student and Aspiring Software Engineer</p>
        <p className='text-sm max-w-xl mb-6 font-bold'>I am a Senior Computer Science student at the University at Albany in New York. <br /> I created this website to both organize my projects and showcase front end work using React, Vite, Js, and TailwindCSS.</p>
        </div>
    </div>
  )
}

export default Intro;