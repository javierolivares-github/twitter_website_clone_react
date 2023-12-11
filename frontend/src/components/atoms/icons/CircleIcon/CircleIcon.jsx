import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const CircleIcon = ({ fill, size }) => {
  return (
    <svg data-testid="circle-container" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <circle data-testid="circle-content" cx="12" cy="12" r="11" fill={fill} />
    </svg>
  );
};

export default CircleIcon;

CircleIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOf(["16", "20", "24", "28", "32"]),
};

CircleIcon.defaultProps = {
  fill: '#000000',
  size: "16",
};
