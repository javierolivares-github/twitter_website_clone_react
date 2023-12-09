import React from 'react';
import ProfileImage from '../../../../atoms/images/ProfileImage';
import Icon from '../../../../atoms/icons/Icon';

const ProfileDropdownUsername = ({ username, account, isDarkTheme }) => {
  return (
    <div className={`flex items-center gap-4 p-4 transition-all duration-200 ease-in-out`}>
      {/* Image */}
      <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
        <ProfileImage/>
      </div>

      {/* Text */}
      <div className={`flex-grow flex flex-col gap-1 overflow-hidden`}>
        <span className={`font-bold text-[1rem] leading-4 tracking-[0.25px] ${isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}`}>
          {username ? username : 'Username'}
        </span>
        <span className={`font-normal text-[0.875rem] leading-[0.875rem] tracking-[0.25px] ${isDarkTheme ? 'text-gray-100' : 'text-secondary-40'}`}>
          {account ? account : '@account'} 
        </span>
      </div>
      
      {/* Icon */}
      <Icon iconName="check" fillColor={`fill-current text-success-35`} isFilled={false}/>
    </div>
  )
};


export default ProfileDropdownUsername;