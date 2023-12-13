import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import '../../../../../index.css';
import HomeIcon from '../../../../atoms/icons/HomeIcon';


const NavbarItemHome = ({ isDarkTheme, isHomeActive, onClick }) => {
  return (
    <li 
      className={`inline-flex justify-start items-center gap-3 p-3 
      rounded-full cursor-pointer transition-all duration-200 
      ease-in-out
      ${!isDarkTheme & !isHomeActive && 'hover:bg-primary-98'}
      ${!isDarkTheme & isHomeActive && 'bg-primary-90 hover:bg-primary-90'}
      `}
      onClick={onClick}
    >
      {/* Icon */}
      {isHomeActive ? 
        <HomeIcon fill={isDarkTheme ? '#FFFFFF' : '#172936'} size="24" isFilled/> : 
        <HomeIcon fill={isDarkTheme ? '#FFFFFF' : '#172936'} size="24"/>
      }

      {/* Label */}
      <span
        className={`${isHomeActive ? 'font-bold' : 'font-normal'} text-[20px] leading-5 tracking-normal
        ${isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}`}
      >
        Inicio
      </span>
    </li>
  )
};


export default NavbarItemHome;

NavbarItemHome.propTypes = {
  isDarkTheme: PropTypes.bool,
  isHomeActive: PropTypes.bool,
  onClick: PropTypes.func,
};

NavbarItemHome.defaultProps = {
  isDarkTheme: false,
  isHomeActive: false,
  onClick: undefined,
}