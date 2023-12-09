import React from 'react';

const HorizontalBorder = ({ isDarkTheme }) => {
  return (
    <svg width="100%" height="1px" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="1px" fill="none" className={isDarkTheme ? 'text-secondary-25 fill-current' : 'text-gray-95 fill-current'}/>
    </svg>
  )
};

export default HorizontalBorder;