import React from 'react';

const TweetButton = ({ size, isDarkTheme, children }) => {
  return (
    <button 
      className={`rounded-full flex justify-center items-center text-gray-100 border-none 
      outline-none cursor-pointer transition-all duration-200 ease-in-out ${isDarkTheme ? 'bg-transparent-10 hover:bg-transparent-25' : 'bg-primary-50 hover:bg-secondary-40'}`}
    >
      <span 
        className={`font-bold ${size === 'large' ? 'p-4 text-[20px] leading-[20px] tracking-[0px]' : 'p-3 text-[14px] leading-[14px] tracking-tight'}`}
      >
        {children}
      </span>
    </button>
  )
};

export default TweetButton;