import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../index.css';
import ProfileIcon from '../../../../atoms/icons/ProfileIcon';
import Heading1 from '../../../../atoms/headings/Heading1';

const NavbarItemProfile = ({ isDarkTheme, isActive }) => {
  return (
    <li 
      data-testid="navbar-item-profile-container"
      className={`inline-flex justify-start items-center gap-3 p-3 
      rounded-full cursor-pointer transition-all duration-200 
      ease-in-out
      ${!isDarkTheme & !isActive && 'hover:bg-primary-98'}
      ${!isDarkTheme & isActive && 'bg-primary-90 hover:bg-primary-90'}
      ${isDarkTheme & !isActive && 'hover:bg-transparent-10'}
      ${isDarkTheme & isActive && 'bg-transparent-25 hover:bg-transparent-25'}
      `}
    >
      {/* Icon */}
      {isActive ? 
        <ProfileIcon fill={isDarkTheme ? '#FFFFFF' : '#172936'} size="24" isFilled/> : 
        <ProfileIcon fill={isDarkTheme ? '#FFFFFF' : '#172936'} size="24"/>
      }

      {/* Label */}
      <Heading1
        color={isDarkTheme ? "text-gray-100" : "text-secondary-15"}
        weight={isActive ? 'font-bold' : 'font-normal'}
      >
        Profile
      </Heading1>
    </li>
  )
};


export default NavbarItemProfile;

NavbarItemProfile.propTypes = {
  isDarkTheme: PropTypes.bool,
  isActive: PropTypes.bool,
};

NavbarItemProfile.defaultProps = {
  isDarkTheme: false,
  isActive: false,
}