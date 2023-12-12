import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const EmojiIcon = ({fill, size}) => {
  return (
    <svg data-testid="emoji-container" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path data-testid="emoji-content" d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12C1.25 6.072 6.072 1.25 12 1.25C17.928 1.25 22.75 6.072 22.75 12C22.75 17.928 17.928 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75ZM12 17.115C10.108 17.115 8.367 16.165 7.344 14.571C7.12 14.223 7.221 13.761 7.57 13.536C7.918 13.31 8.382 13.412 8.606 13.762C9.353 14.924 10.622 15.617 12.001 15.617C13.38 15.617 14.649 14.924 15.397 13.763C15.621 13.413 16.085 13.313 16.433 13.538C16.783 13.762 16.883 14.226 16.659 14.574C15.634 16.168 13.893 17.119 12.001 17.119L12 17.115ZM9.262 10.936C10.078 10.936 10.74 10.274 10.74 9.458C10.74 8.642 10.078 7.98 9.262 7.98C8.446 7.98 7.784 8.642 7.784 9.458C7.784 10.274 8.446 10.936 9.262 10.936ZM14.738 10.936C15.554 10.936 16.216 10.274 16.216 9.458C16.216 8.642 15.554 7.98 14.738 7.98C13.922 7.98 13.26 8.642 13.26 9.458C13.26 10.274 13.922 10.936 14.738 10.936Z" fill={fill} />
    </svg>
  )
}

export default EmojiIcon;

EmojiIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOf(["16", "18", "20", "22", "24", "26", "28", "30", "32"]),
};

EmojiIcon.defaultProps = {
  fill: '#000000',
  size: "16",
};