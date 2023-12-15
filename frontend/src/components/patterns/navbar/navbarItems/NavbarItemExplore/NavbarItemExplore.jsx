import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../index.css';
import ExploreIcon from '../../../../atoms/icons/ExploreIcon';
import Heading1 from '../../../../atoms/headings/Heading1';


const NavbarItemExplore = ({ isDarkTheme, isActive }) => {
  return (
    <li 
      data-testid="navbar-item-explore-container"
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
        <ExploreIcon fill={isDarkTheme ? '#FFFFFF' : '#172936'} size="24" isFilled/> : 
        <ExploreIcon fill={isDarkTheme ? '#FFFFFF' : '#172936'} size="24"/>
      }

      {/* Label */}
      <Heading1
        color={isDarkTheme ? "text-gray-100" : "text-secondary-100"}
        weight={isActive ? 'font-bold' : 'font-normal'}
      >
        Explore
      </Heading1>
    </li>
  )
};


export default NavbarItemExplore;

NavbarItemExplore.propTypes = {
  isDarkTheme: PropTypes.bool,
  isActive: PropTypes.bool,
};

NavbarItemExplore.defaultProps = {
  isDarkTheme: false,
  isActive: false,
}