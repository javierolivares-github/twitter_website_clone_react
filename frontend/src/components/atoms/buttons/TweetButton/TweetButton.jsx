import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const TweetButton = ({ isDarkTheme, size, onClick, children }) => {
  return (
    <button
      data-testid="tweet-button-container" 
      className={`rounded-full flex justify-center items-center text-gray-100 border-none 
      outline-none cursor-pointer transition-all duration-200 ease-in-out
      ${isDarkTheme && 'bg-transparent-10 hover:bg-transparent-25'} 
      ${!isDarkTheme && 'bg-primary-50 hover:bg-secondary-40'}
      `}
      onClick={onClick}
    >
      <span 
        data-testid="tweet-button-content"
        className={`font-bold
        ${size === 'large' && 'p-4 text-[20px] leading-[20px] tracking-[0px]'}
        ${size === 'small' && 'p-3 text-[14px] leading-[14px] tracking-tight'}
        `}
      >
        {children}
      </span>
    </button>
  )
};

export default TweetButton;

TweetButton.propTypes = {
  isDarkTheme: PropTypes.bool,
  size: PropTypes.oneOf(["large", "small"]),
  onClick: PropTypes.func,
  children: PropTypes.string,
};

TweetButton.defaultProps = {
  isDarkTheme: false,
  size: "small",
  onClick: undefined,
  children: "Tweet",
};
