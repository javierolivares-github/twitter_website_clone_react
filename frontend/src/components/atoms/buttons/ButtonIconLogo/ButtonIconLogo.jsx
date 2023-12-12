import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import TwitterIcon from '../../icons/TwitterIcon';

const ButtonIconLogo = ({ isDarkTheme, onClick }) => {
  return (
    <button
      data-testid="button-logo-container"
      className={`w-12 h-12 rounded-full border-none inline-flex justify-center items-center 
      cursor-pointer ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
      onClick={onClick}
    >
      <TwitterIcon 
        fill={isDarkTheme ? '#FFFFFF' : '#1092EF'}
        isFilled={isDarkTheme ? true : false}
        size="24"
      />
    </button>
  )
};

export default ButtonIconLogo;

ButtonIconLogo.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonIconLogo.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
}



