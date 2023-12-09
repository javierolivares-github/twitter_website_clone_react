import React from 'react';
import Icon from '../icons/Icon';


const IconButton = ({ iconName, isDarkTheme }) => {
  return (
    <span
      className={`w-9 h-9 rounded-full inline-flex justify-center items-center ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
    >
      <Icon 
        iconName={iconName} 
        fillColor={isDarkTheme ? 'fill-current text-gray-100' : 'fill-current text-primary-50'}
        size="w-[18px] h-[18px]"
      />
    </span>
  )
};


export default IconButton;