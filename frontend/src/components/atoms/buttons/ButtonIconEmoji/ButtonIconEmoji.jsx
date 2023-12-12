import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import EmojiIcon from '../../icons/EmojiIcon';

const ButtonIconEmoji = ({ isDarkTheme, onClick }) => {
  return (
    <button
      data-testid="button-emoji-container"
      className={`w-9 h-9 rounded-full border-none inline-flex justify-center items-center ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
      onClick={onClick}
    >
      <EmojiIcon 
        fill={isDarkTheme ? '#FFFFFF' : '#1092EF'}
        size="18"
      />
    </button>
  )
};

export default ButtonIconEmoji;

ButtonIconEmoji.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonIconEmoji.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
}



