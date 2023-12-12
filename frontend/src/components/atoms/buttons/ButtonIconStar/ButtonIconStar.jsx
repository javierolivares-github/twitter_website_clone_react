import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import StarIcon from '../../icons/StarIcon';

const ButtonIconStar = ({ isDarkTheme, onClick }) => {
  return (
    <button
      data-testid="button-star-container"
      className={`w-9 h-9 rounded-full border-none inline-flex justify-center items-center ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
      onClick={onClick}
    >
      <StarIcon 
        fill={isDarkTheme ? '#FFFFFF' : '#1092EF'}
        size="18"
      />
    </button>
  )
};

export default ButtonIconStar;

ButtonIconStar.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonIconStar.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
}



