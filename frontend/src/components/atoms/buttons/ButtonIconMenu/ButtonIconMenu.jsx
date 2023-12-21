import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import MenuIcon from '../../icons/MenuIcon';

const ButtonIconMenu = ({ isDarkTheme, onClick }) => {
  return (
    <button
      data-testid="button-more-container"
      className={`w-9 h-9 rounded-full border-none inline-flex justify-center items-center ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
      onClick={onClick}
    >
      <MenuIcon 
        fill={isDarkTheme ? '#FFFFFF' : '#000000'}
        size="24"
      />
    </button> 
  )
};

export default ButtonIconMenu;

ButtonIconMenu.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonIconMenu.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
}