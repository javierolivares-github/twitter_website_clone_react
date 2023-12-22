import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import RetweetIcon from '../../icons/RetweetIcon';

const IconButtonRetweet = ({ isDarkTheme, onClick }) => {
  return (
    <button 
      className="w-9 h-9 rounded-full flex justify-center items-center"
      onClick={onClick}
    >
      <RetweetIcon fill={isDarkTheme ? "#FFFFFF" : "#666666"} size="18" />
    </button>
  )
}

export default IconButtonRetweet

IconButtonRetweet.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
}

IconButtonRetweet.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
}