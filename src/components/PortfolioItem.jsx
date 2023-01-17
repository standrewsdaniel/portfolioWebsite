import React from 'react';

//Builds an item for portfolio display
function PortfolioItem({title, imgUrl, stack, link}) {
  return (
    <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          classname="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
       >
    <div className='border-2 dark:border-white border-stone-900 rounded-md overflow-hidden items-center justify-center'>
        <img 
        src={imgUrl}
        alt='Portfolio'
        className='w-full h-36 md:h-48 object-cover cursor-pointer'    
        />
        <div className='w-full p-4'>
        <h3 className='text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold'>{title}</h3>
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white'>
            {stack.map(item => (
                <span className='inline-block px-2 py-1 font-semibold border-2 dark:border-white border-stone-900 rounded-md'>
                    {item}
                </span>
            ))}
        </p>
        </div>
    </div>
    </a>
  )
}

export default PortfolioItem;