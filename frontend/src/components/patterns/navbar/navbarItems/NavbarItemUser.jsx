import React, {useContext} from 'react';
import ProfileImage from '../../../atoms/images/ProfileImage';
import Icon from '../../../atoms/icons/Icon';
import { Context } from '../../../../utilities/Context';


const NavbarItemUser = ({ username, account, isDarkTheme }) => {
  const {showProDrop, setShowProDrop} = useContext(Context);  
  
  const handleClick = () => {
    setShowProDrop(!showProDrop);
  };

  return (
    <div 
      className={`rounded-full flex items-center 
      gap-2 p-4 cursor-pointer transition-all duration-200 
      ease-in-out ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`} 
      onClick={handleClick}
    >
      {/* Image */}
      <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
        <ProfileImage/>
      </div>

      {/* Text */}
      <div className='flex flex-col flex-wrap gap-1'>
        {/* text: username */}
        <span 
          className={`whitespace-normal font-bold text-[15px] leading-[15px] 
          tracking-[0.25px] ${isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}`}
        >
          {username ? username : 'Username'}
        </span>

        {/* text: account */}
        <span 
          className={`font-normal text-[14px] leading-[14px] 
          tracking-[0.25px] ${isDarkTheme ? 'text-gray-100' : 'text-secondary-40'}`}
        >
          {account ? account : '@account'} 
        </span>
      </div>
      
      {/* Icon */}
      <Icon 
        iconName="menu" 
        fillColor={isDarkTheme ? 'fill-current text-gray-100' : 'fill-current text-secondary-15'} 
      />
    </div>
  )
};


export default NavbarItemUser;