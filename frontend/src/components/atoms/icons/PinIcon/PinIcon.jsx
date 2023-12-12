import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const PinIcon = ({ fill, size }) => {
  return (
    <svg data-testid="pin-container" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path data-testid="pin-content" d="M20.235 14.61C19.86 12.865 17.893 11.104 16.225 10.485L15.681 5.537L17.176 3.295C17.333 3.059 17.348 2.757 17.213 2.508C17.079 2.258 16.821 2.105 16.538 2.105H7.39804C7.11404 2.105 6.85604 2.259 6.72204 2.508C6.58804 2.758 6.60204 3.061 6.76004 3.296L8.25804 5.543L7.77404 10.486C6.10604 11.106 4.14104 12.866 3.77004 14.602C3.73004 14.762 3.75404 15.006 3.90204 15.196C4.00504 15.328 4.20604 15.486 4.58204 15.486H8.64004L11.544 22.198C11.622 22.382 11.804 22.5 12.002 22.5C12.2 22.5 12.382 22.382 12.462 22.198L15.365 15.485H19.422C19.798 15.485 19.998 15.329 20.102 15.199C20.248 15.011 20.274 14.765 20.237 14.609L20.235 14.61Z" fill={fill} />
    </svg>
  );
};

export default PinIcon;

PinIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOf(["16", "18", "20", "22", "24", "26", "28", "30", "32"]),
};

PinIcon.defaultProps = {
  fill: '#000000',
  size: "16",
};