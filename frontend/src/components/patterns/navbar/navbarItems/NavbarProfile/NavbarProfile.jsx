import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../index.css';
import ProfileImage from '../../../../atoms/images/ProfileImage';
import MenuIcon from '../../../../atoms/icons/MenuIcon';
import Heading2 from '../../../../atoms/headings/Heading2';
import Body2 from '../../../../atoms/headings/Body2';

const NavbarProfile = ({ imageUrl, username, account, isDarkTheme, onClick }) => {
  return (
    <div
      data-testid="navbar-profile-container"
      className={`rounded-full inline-flex items-center gap-4 p-4 cursor-pointer transition-all duration-200 ease-in-out
      ${!isDarkTheme && "hover:bg-primary-98"} 
      ${isDarkTheme && "hover:bg-transparent-10"}
      `} 
      onClick={onClick}
    >
      {/* Image */}
      <ProfileImage imageUrl={imageUrl} />

      {/* Text */}
      <div className='flex flex-col flex-wrap gap-1'>
        {/* text: username */}
        <Heading2 weight="font-bold" color={isDarkTheme ? "text-gray-100" : "text-secondary-25"} >
          {username}
        </Heading2>

        {/* text: account */}
        <Body2 weight="font-normal" isDarkTheme={isDarkTheme} >
          {account}
        </Body2>
      </div>
      
      {/* Icon */}
      <MenuIcon fill={isDarkTheme ? "#FFFFFF" : "#000000"} size="24" /> 
    </div>
  )
};

export default NavbarProfile;

NavbarProfile.propTypes = {
  imageUrl: PropTypes.string,
  username: PropTypes.string,
  account: PropTypes.string,
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
};

NavbarProfile.defaultProps = {
  imageUrl: "../../../../../assets/profile1.png",
  username: "Username",
  account: "@account",
  isDarkTheme: false,
  onClick: undefined,
}