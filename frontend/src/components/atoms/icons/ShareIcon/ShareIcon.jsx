import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const ShareIcon = ({ fill, size }) => {
  return (
    <svg data-testid="share-container" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path data-testid="share-content" d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14C2 13.586 2.336 13.25 2.75 13.25C3.164 13.25 3.5 13.586 3.5 14V19.652C3.5 20.089 3.855 20.444 4.292 20.444H19.708C20.145 20.444 20.5 20.089 20.5 19.652V14C20.5 13.586 20.836 13.25 21.25 13.25C21.664 13.25 22 13.586 22 14V19.652C22 20.916 20.972 21.944 19.708 21.944ZM17.53 7.46999L12.53 2.46999C12.237 2.17699 11.762 2.17699 11.47 2.46999L6.47 7.46999C6.176 7.76299 6.176 8.23799 6.47 8.52999C6.764 8.82199 7.237 8.82399 7.53 8.52999L11.25 4.80999V15C11.25 15.414 11.586 15.75 12 15.75C12.414 15.75 12.75 15.414 12.75 15V4.80999L16.47 8.52999C16.616 8.67699 16.808 8.75 17 8.75C17.192 8.75 17.384 8.67799 17.53 8.52999C17.823 8.23699 17.823 7.76299 17.53 7.46999Z" fill={fill} />
    </svg>
  )
}

export default ShareIcon;

ShareIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOf(["16", "20", "24", "28", "32"]),
};

ShareIcon.defaultProps = {
  fill: '#000000',
  size: "16",
};