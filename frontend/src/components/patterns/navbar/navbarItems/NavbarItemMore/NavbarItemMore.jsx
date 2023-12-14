import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../index.css';
import MoreIcon from '../../../../atoms/icons/MoreIcon';
import Heading1 from '../../../../atoms/headings/Heading1';


const NavbarItemMore = ({ isDarkTheme, isHomeActive, onClick }) => {
  return (
    <li 
      data-testid="navbar-item-more-container"
      className={`inline-flex justify-start items-center gap-3 p-3 
      rounded-full cursor-pointer transition-all duration-200 
      ease-in-out
      ${!isDarkTheme & !isHomeActive && 'hover:bg-primary-98'}
      ${!isDarkTheme & isHomeActive && 'bg-primary-90 hover:bg-primary-90'}
      ${isDarkTheme & !isHomeActive && 'hover:bg-transparent-10'}
      ${isDarkTheme & isHomeActive && 'bg-transparent-25 hover:bg-transparent-25'}
      `}
      onClick={onClick}
    >
      {/* Icon */}
      {isHomeActive ? 
        <MoreIcon fill={isDarkTheme ? '#FFFFFF' : '#172936'} size="24" isFilled/> : 
        <MoreIcon fill={isDarkTheme ? '#FFFFFF' : '#172936'} size="24"/>
      }

      {/* Label */}
      <Heading1
        isDarkTheme={isDarkTheme}
        weight={isHomeActive ? 'font-bold' : 'font-normal'}
      >
        More
      </Heading1>
    </li>
  )
};


export default NavbarItemMore;

NavbarItemMore.propTypes = {
  isDarkTheme: PropTypes.bool,
  isHomeActive: PropTypes.bool,
  onClick: PropTypes.func,
};

NavbarItemMore.defaultProps = {
  isDarkTheme: false,
  isHomeActive: false,
  onClick: undefined,
}