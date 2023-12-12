import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const SendIcon = ({fill, size}) => {
  return (
    <svg data-testid="send-container" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path data-testid="send-content" fillRule="evenodd" clipRule="evenodd" d="M22.7071 1.29289C22.9788 1.56453 23.0708 1.96776 22.9439 2.33035L15.9439 22.3303C15.8084 22.7173 15.4504 22.9825 15.0408 22.9992C14.6311 23.0159 14.2527 22.7808 14.0862 22.4061L10.2424 13.7576L1.59387 9.91381C1.21919 9.74728 0.984122 9.36891 1.00084 8.95923C1.01755 8.54956 1.28265 8.19159 1.66965 8.05614L21.6697 1.05614C22.0322 0.929234 22.4355 1.02125 22.7071 1.29289ZM12.1928 13.2215L14.8894 19.2889L19.6085 5.80568L12.1928 13.2215ZM18.1943 4.39147L4.71108 9.1106L10.7785 11.8073L18.1943 4.39147Z" fill={fill} />
    </svg>
  )
}

export default SendIcon;

SendIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOf(["16", "18", "20", "22", "24", "26", "28", "30", "32"]),
};

SendIcon.defaultProps = {
  fill: '#000000',
  size: "16",
};