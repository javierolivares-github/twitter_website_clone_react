import React from 'react';
import Icon from '../../../../atoms/icons/Icon';


const MoreDropdownItem = ({ isDarkTheme, label, icon }) => {
  return (
    <li 
    className={`list-none inline-flex justify-start items-center gap-4 p-4 cursor-pointer transition-all duration-200 ease-in-out ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
    >
      {/* Icon */}
      <Icon iconName={icon} fillColor={isDarkTheme ? 'fill-current text-gray-100' : 'fill-current text-secondary-15'} isFilled={false}/>

      {/* Text */}
      <span 
        className={`font-normal text-[20px] leading-[20px] 
        tracking-normal ${isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}`}
      >
        {label}
      </span>
    </li>
  )
};


export default MoreDropdownItem;