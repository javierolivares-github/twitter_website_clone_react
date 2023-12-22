import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import LikeIcon from '../../icons/LikeIcon';

const IconButtonLike = ({ isDarkTheme, onClick }) => {
  return (
    <button 
      className="w-9 h-9 rounded-full flex justify-center items-center"
      onClick={onClick}
    >
      <LikeIcon fill={isDarkTheme ? "#FFFFFF" : "#666666"} size="18" />
    </button>
  )
}

export default IconButtonLike

IconButtonLike.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
}

IconButtonLike.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
}