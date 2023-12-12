import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import MoonIcon from '../../icons/MoonIcon';

const ButtonIconMoon = ({ isDarkTheme, onClick }) => {
  return (
    <button
      data-testid="button-moon-container"
      className={`w-12 h-12 rounded-full border-none inline-flex justify-center items-center 
      cursor-pointer ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
      onClick={onClick}
    >
      <MoonIcon 
        fill={isDarkTheme ? '#FFFFFF' : '#172936'}
        isFilled={isDarkTheme ? true : false}
        size="24"
      />
    </button>
  )
};

export default ButtonIconMoon;

ButtonIconMoon.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonIconMoon.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
}



