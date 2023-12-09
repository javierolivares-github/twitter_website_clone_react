import React from 'react';

const VerticalBorder = ({ isDarkTheme }) => {
  return (
    <svg width="1px" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1px" height="100%" fill="none" className={isDarkTheme ? 'fill-current text-transparent-10' : 'fill-current text-gray-95 '}/>
    </svg>
  )
};

export default VerticalBorder;