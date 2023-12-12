import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import GifIcon from '../../icons/GifIcon';

const ButtonIconGif = ({ isDarkTheme, onClick }) => {
  return (
    <button
      data-testid="button-gif-container"
      className={`w-9 h-9 rounded-full border-none inline-flex justify-center items-center ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
      onClick={onClick}
    >
      <GifIcon 
        fill={isDarkTheme ? '#FFFFFF' : '#1092EF'}
        size="18"
      />
    </button>
  )
};

export default ButtonIconGif;

ButtonIconGif.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonIconGif.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
}



