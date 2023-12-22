import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import CommentIcon from '../../icons/CommentIcon';

const IconButtonComment = ({ isDarkTheme, onClick }) => {
  return (
    <button 
      className="w-9 h-9 rounded-full flex justify-center items-center"
      onClick={onClick}
    >
      <CommentIcon fill={isDarkTheme ? "#FFFFFF" : "#666666"} size="18" />
    </button>
  )
}

export default IconButtonComment

IconButtonComment.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
}

IconButtonComment.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
}