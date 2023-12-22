import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import ShareIcon from '../../icons/ShareIcon';

const IconButtonShare = ({ isDarkTheme, onClick }) => {
  return (
    <button 
      className="w-9 h-9 rounded-full flex justify-center items-center"
      onClick={onClick}
    >
      <ShareIcon fill={isDarkTheme ? "#FFFFFF" : "#666666"} size="18" />
    </button>
  )
}

export default IconButtonShare

IconButtonShare.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
}

IconButtonShare.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
}