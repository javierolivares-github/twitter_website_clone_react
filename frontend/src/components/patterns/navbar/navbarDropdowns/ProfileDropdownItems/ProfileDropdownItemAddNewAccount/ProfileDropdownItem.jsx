import React from 'react';


const ProfileDropdownItem = ({ label, account, isDarkTheme }) => {
  return (
    <li 
      className={`list-none flex justify-start items-center p-4 cursor-pointer transition-all 
      duration-200 ease-in-out ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
    >
      {/* Text */}
      <span className={`font-normal text-[20px] leading-[20px] tracking-normal ${isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}`}>
        {`${label} ${account ? account : ''}`}
      </span>
    </li>  
  )
};


export default ProfileDropdownItem;