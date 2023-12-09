import React from 'react';


const SectionHeading = ({ children, isDarkTheme }) => {
  return (
    <h2 className={`font-bold text-[1.25rem] leading-[1.25rem] tracking-normal ${isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}`}>
      {children}
    </h2>
  )
};


export default SectionHeading;