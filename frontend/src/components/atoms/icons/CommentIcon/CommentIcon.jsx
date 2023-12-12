import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const CommentIcon = ({ fill, size }) => {
  return (
    <svg data-testid="comment-container" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path data-testid="comment-content" d="M14.0459 2.24199L9.89595 2.23199C5.52195 2.23199 2.09595 5.65899 2.09595 10.034C2.09595 14.132 5.28195 17.24 9.56095 17.404V21.232C9.56095 21.34 9.60495 21.518 9.68095 21.635C9.82295 21.86 10.0649 21.982 10.3129 21.982C10.4509 21.982 10.5899 21.944 10.7149 21.864C10.9789 21.696 17.1879 17.724 18.8029 16.358C20.7049 14.748 21.8429 12.388 21.8459 10.046V10.029C21.8399 5.66199 18.4159 2.24199 14.0459 2.24099V2.24199ZM17.8329 15.214C16.6989 16.174 12.9709 18.619 11.0609 19.857V16.67C11.0609 16.256 10.7259 15.92 10.3109 15.92H9.91495C6.25495 15.92 3.59695 13.444 3.59695 10.034C3.59695 6.49999 6.36495 3.73199 9.89695 3.73199L14.0459 3.74199C17.5779 3.74199 20.3459 6.50799 20.3479 10.038C20.3449 11.948 19.4059 13.882 17.8339 15.214H17.8329Z" fill={fill} />
    </svg>
  )
}

export default CommentIcon;

CommentIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOf(["16", "18", "20", "22", "24", "26", "28", "30", "32"]),
};

CommentIcon.defaultProps = {
  fill: '#000000',
  size: "16",
};