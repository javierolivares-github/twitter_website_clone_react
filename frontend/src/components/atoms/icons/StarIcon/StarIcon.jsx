import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const StarIcon = ({fill, size}) => {
  return (
    <svg data-testid="star-container" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path data-testid="star-content" d="M9.198 19.434H8.098V18.418C8.098 18.004 7.763 17.668 7.348 17.668C6.933 17.668 6.598 18.004 6.598 18.418V19.434H5.57C5.156 19.434 4.82 19.77 4.82 20.184C4.82 20.598 5.156 20.934 5.57 20.934H6.6V21.95C6.6 22.364 6.935 22.7 7.35 22.7C7.765 22.7 8.1 22.364 8.1 21.95V20.934H9.198C9.612 20.934 9.948 20.598 9.948 20.184C9.948 19.77 9.612 19.434 9.198 19.434ZM22.772 10.506L17.154 8.314L14.994 1.814C14.892 1.507 14.604 1.3 14.282 1.3C13.96 1.3 13.672 1.507 13.57 1.813L11.41 8.313L5.79 10.505C5.503 10.617 5.313 10.895 5.313 11.205C5.313 11.515 5.503 11.79 5.791 11.903L11.411 14.095L13.571 20.595C13.673 20.901 13.961 21.108 14.283 21.108C14.605 21.108 14.893 20.901 14.995 20.595L17.155 14.095L22.775 11.903C23.062 11.791 23.252 11.513 23.252 11.203C23.252 10.893 23.062 10.618 22.774 10.506H22.772ZM16.282 12.826C16.074 12.906 15.912 13.076 15.842 13.286L14.282 17.981L12.722 13.288C12.652 13.078 12.492 12.908 12.284 12.826L8.129 11.206L12.283 9.584C12.491 9.504 12.653 9.334 12.723 9.122L14.283 4.429L15.843 9.123C15.913 9.335 16.073 9.505 16.281 9.586L20.436 11.206L16.281 12.828L16.282 12.826ZM4.052 1.3H4.033C3.62 1.3 3.283 1.636 3.283 2.05V3.812H1.5C1.086 3.812 0.75 4.148 0.75 4.562C0.75 4.976 1.086 5.312 1.5 5.312H3.282V7.074C3.282 7.488 3.618 7.824 4.032 7.824C4.446 7.824 4.782 7.488 4.782 7.074V5.312H6.662C7.077 5.312 7.412 4.976 7.412 4.562C7.412 4.148 7.077 3.812 6.662 3.812H4.783V2.05C4.783 1.642 4.456 1.31 4.052 1.3Z" fill={fill} />
    </svg>
  )
}

export default StarIcon;

StarIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOf(["16", "18", "20", "22", "24", "26", "28", "30", "32"]),
};

StarIcon.defaultProps = {
  fill: '#000000',
  size: "16",
};