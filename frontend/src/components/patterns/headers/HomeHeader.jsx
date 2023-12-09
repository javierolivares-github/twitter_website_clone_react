import React from 'react'
import Icon from '../../atoms/icons/Icon';
import ProfileImage from '../../atoms/images/ProfileImage';


const HomeHeader = ({ isDarkTheme }) => {
  return (
    <div className={`flex flex-col gap-4 p-4 ${isDarkTheme ? 'bg-secondary-15' : 'bg-gray-100'}`}>

      <div className='flex justify-between items-center'>
        <h3 className={`font-bold text-[1.25rem] leading-[1.25rem] tracking-normal ${isDarkTheme ? 'text-secondary-15' : 'text-gray-100'}`}>Home</h3>
        <span className='w-9 h-9 flex justify-center items-center'>
          <Icon iconName="star" fillColor={isDarkTheme ? 'fill-current text-gray-100' : 'fill-current text-primary-50'} size="w-[18px] h-[18px]"/>
        </span>
      </div>

      <div className=''>
        <ProfileImage />
        <input type="text" placeholder="What's happening?" />
      </div>
      
    </div>
  )
};


export default HomeHeader;