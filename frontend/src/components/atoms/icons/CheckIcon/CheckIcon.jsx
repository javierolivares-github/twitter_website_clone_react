import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const CheckIcon = ({ fill, size }) => {
  return (
    <svg data-testid="check-container" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path data-testid="check-content" d="M9.00002 20C8.73602 20 8.48002 19.896 8.29302 19.707L3.50802 14.922C3.11802 14.532 3.11802 13.899 3.50802 13.508C3.89802 13.117 4.53102 13.118 4.92202 13.508L8.86802 17.453L18.075 4.41C18.395 3.96 19.015 3.852 19.47 4.17C19.92 4.488 20.03 5.112 19.71 5.564L9.81702 19.577C9.64702 19.817 9.37902 19.972 9.08502 19.997C9.05702 19.999 9.02802 20 9.00002 20Z" fill={fill} />
    </svg>
  )
}

export default CheckIcon;

CheckIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOf(["16", "18", "20", "22", "24", "26", "28", "30", "32"]),
}

CheckIcon.defaultProps = {
  fill: '#000000',
  size: "16",
}