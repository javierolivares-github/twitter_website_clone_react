import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const ImagesIcon = ({fill, size}) => {
  return (
    <svg data-testid="images-container" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path data-testid="images-content" d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25V19.75C2 20.99 3.01 22 4.25 22H19.75C20.99 22 22 20.99 22 19.75V4.25C22 3.01 20.99 2 19.75 2ZM3.506 19.78L8.924 14.246L15.206 20.5H4.25C3.848 20.5 3.523 20.178 3.506 19.78ZM19.75 20.5H17.33L12.323 15.513L16.115 11.663L20.5 16.047V19.75C20.5 20.163 20.163 20.5 19.75 20.5ZM4.25 3.5H19.75C20.163 3.5 20.5 3.837 20.5 4.25V13.926L16.642 10.068C16.502 9.928 16.312 9.848 16.112 9.848H16.109C15.909 9.848 15.716 9.928 15.577 10.072L11.26 14.456L9.447 12.65C9.307 12.51 9.117 12.43 8.917 12.43C8.724 12.4 8.522 12.51 8.382 12.657L3.5 17.642V4.25C3.5 3.837 3.837 3.5 4.25 3.5ZM8.868 9.851C9.72 9.851 10.41 9.161 10.41 8.309C10.41 7.457 9.72 6.767 8.868 6.767C8.016 6.767 7.326 7.457 7.326 8.309C7.326 9.161 8.016 9.851 8.868 9.851Z" fill={fill} />
    </svg>
  )
}

export default ImagesIcon;

ImagesIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOf(["16", "18", "20", "22", "24", "26", "28", "30", "32"]),
};

ImagesIcon.defaultProps = {
  fill: '#000000',
  size: "16",
};