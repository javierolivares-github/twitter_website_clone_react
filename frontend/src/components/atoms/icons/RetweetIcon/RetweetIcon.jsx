import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const RetweetIcon = ({ isFilled, fill, size }) => {

  const svgOutline = () => {
    return (
      <svg data-testid="retweet-outline-container" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path data-testid="retweet-outline-content" d="M23.77 15.67C23.478 15.377 23.003 15.377 22.71 15.67L20.49 17.89V7.65001C20.49 5.58201 18.807 3.90001 16.74 3.90001H10.89C10.476 3.90001 10.14 4.23601 10.14 4.65001C10.14 5.06401 10.476 5.40001 10.89 5.40001H16.74C17.98 5.40001 18.99 6.41001 18.99 7.65001V17.89L16.77 15.67C16.477 15.377 16.002 15.377 15.71 15.67C15.418 15.963 15.416 16.438 15.71 16.73L19.21 20.23C19.355 20.377 19.547 20.45 19.74 20.45C19.933 20.45 20.123 20.378 20.27 20.23L23.77 16.73C24.064 16.438 24.064 15.963 23.77 15.67ZM13.112 18.95H7.25997C6.01997 18.95 5.00997 17.94 5.00997 16.7V6.46001L7.22997 8.68001C7.37797 8.82701 7.56997 8.90001 7.76197 8.90001C7.95397 8.90001 8.14597 8.82701 8.29197 8.68001C8.58497 8.38701 8.58497 7.91201 8.29197 7.62001L4.79197 4.12001C4.49897 3.82601 4.02397 3.82601 3.73197 4.12001L0.231975 7.62001C-0.0620254 7.91201 -0.0620254 8.38701 0.231975 8.68001C0.525975 8.97301 0.998975 8.97301 1.29197 8.68001L3.51197 6.46001V16.7C3.51197 18.768 5.19497 20.45 7.26197 20.45H13.112C13.526 20.45 13.862 20.114 13.862 19.7C13.862 19.286 13.525 18.95 13.112 18.95Z" fill={fill} />
      </svg>
    )
  }

  const svgFilled = () => {
    return (
      <svg data-testid="retweet-filled-container" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path data-testid="retweet-filled-content" d="M12.562 18.5H7.36202C6.50802 18.5 5.81202 17.805 5.81202 16.95V7.54701L7.13802 8.87301C7.37202 9.10801 7.68002 9.22501 7.98602 9.22501C8.29202 9.22501 8.60002 9.10801 8.83602 8.87301C9.30402 8.40301 9.30402 7.64301 8.83602 7.17601L5.46002 3.80001C4.99002 3.33201 4.23002 3.33201 3.76302 3.80001L0.388022 7.17701C-0.0819775 7.64701 -0.0819775 8.40701 0.388022 8.87401C0.858022 9.34101 1.61802 9.34401 2.08502 8.87401L3.41002 7.54701V16.95C3.41002 19.128 5.18302 20.9 7.36002 20.9H12.56C13.224 20.9 13.76 20.362 13.76 19.7C13.76 19.038 13.225 18.5 12.562 18.5ZM23.615 15.477C23.145 15.007 22.385 15.007 21.918 15.477L20.592 16.803V7.40001C20.592 5.22201 18.82 3.45001 16.642 3.45001H11.442C10.779 3.45001 10.242 3.98801 10.242 4.65001C10.242 5.31201 10.779 5.85001 11.442 5.85001H16.642C17.496 5.85001 18.192 6.54501 18.192 7.40001V16.803L16.866 15.477C16.396 15.007 15.636 15.007 15.169 15.477C14.702 15.947 14.699 16.707 15.169 17.174L18.543 20.549C18.777 20.782 19.085 20.899 19.393 20.899C19.701 20.899 20.006 20.783 20.241 20.549L23.616 17.173C24.083 16.703 24.083 15.944 23.615 15.477ZM23.614 15.476L23.615 15.477L23.614 15.476Z" fill={fill} />
      </svg>
    )
  }
  
  return (
    <>
      {isFilled ? svgFilled() : svgOutline()}
    </>
  )
}

export default RetweetIcon;

RetweetIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOf(["16", "18", "20", "22", "24", "26", "28", "30", "32"]),
  isFilled: PropTypes.bool,
};

RetweetIcon.defaultProps = {
  fill: '#000000',
  size: "16",
  isFilled: false,
};