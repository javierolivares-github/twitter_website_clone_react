import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import LocationIcon from '../../icons/LocationIcon';

const ButtonIconLocation = ({ isDarkTheme, onClick }) => {
  return (
    <button
      data-testid="button-location-container"
      className={`w-9 h-9 rounded-full border-none inline-flex justify-center items-center ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
      onClick={onClick}
    >
      <LocationIcon 
        fill={isDarkTheme ? '#FFFFFF' : '#1092EF'}
        size="18"
      />
    </button>
  )
};

export default ButtonIconLocation;

ButtonIconLocation.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonIconLocation.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
}



