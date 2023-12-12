import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import ImagesIcon from '../../icons/ImagesIcon';

const ButtonIconImage = ({ isDarkTheme, onClick }) => {
  return (
    <button
      data-testid="button-image-container"
      className={`w-9 h-9 rounded-full border-none inline-flex justify-center items-center ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
      onClick={onClick}
    >
      <ImagesIcon 
        fill={isDarkTheme ? '#FFFFFF' : '#1092EF'}
        size="18"
      />
    </button>
  )
};

export default ButtonIconImage;

ButtonIconImage.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonIconImage.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
}



