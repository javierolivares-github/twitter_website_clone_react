import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const MomentsIcon = ({fill, size}) => {
  return (
    <svg data-testid="moments-container" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path data-testid="moments-content" d="M8.98 22.698C8.877 22.698 8.775 22.678 8.678 22.635C8.368 22.5 8.188 22.175 8.238 21.841L9.466 13.314H6.542C6.322 13.314 6.112 13.216 5.969 13.048C5.825 12.878 5.765 12.655 5.802 12.438L7.49 2.5C7.552 2.14 7.863 1.875 8.23 1.875H15.04C15.27 1.875 15.487 1.98 15.63 2.16C15.772 2.34 15.824 2.575 15.77 2.8L14.324 8.875H19C19.29 8.875 19.553 9.041 19.678 9.303C19.802 9.565 19.765 9.873 19.582 10.099L9.562 22.42C9.416 22.6 9.2 22.696 8.979 22.696L8.98 22.698ZM7.43 11.812H10.333C10.551 11.812 10.758 11.907 10.9 12.072C11.042 12.236 11.106 12.454 11.075 12.67L10.109 19.37L17.422 10.375H13.372C13.144 10.375 12.927 10.27 12.784 10.09C12.642 9.91 12.59 9.675 12.644 9.45L14.09 3.375H8.864L7.43 11.812Z" fill={fill} />
    </svg>
  )
}

export default MomentsIcon;

MomentsIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOf(["16", "18", "20", "22", "24", "26", "28", "30", "32"]),
};

MomentsIcon.defaultProps = {
  fill: '#000000',
  size: "16",
};