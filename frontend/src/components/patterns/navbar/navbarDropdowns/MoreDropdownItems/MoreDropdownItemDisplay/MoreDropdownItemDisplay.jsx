import React from 'react';
import PropTypes from 'prop-types';
import DisplayIcon from '../../../../../atoms/icons/DisplayIcon';
import Heading1 from '../../../../../atoms/headings/Heading1';

const MoreDropdownItemDisplay = ({ isDarkTheme}) => {
  return (
    <li 
    data-testid="moredropitem-display"
    className={`list-none inline-flex justify-start items-center gap-4 p-4 cursor-pointer transition-all duration-200 ease-in-out 
    ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
    >
      {/* Icon */}
      <DisplayIcon fill={isDarkTheme ? "#FFFFFF" : "#172936"} size="24" />

      {/* Text */}
      <Heading1 weight={`font-normal`} color={isDarkTheme ? "text-gray-100" : "text-secondary-15"}>
        Display
      </Heading1>
    </li>
  );
};


export default MoreDropdownItemDisplay;

MoreDropdownItemDisplay.propTypes = {
  isDarkTheme: PropTypes.bool,
};

MoreDropdownItemDisplay.defaultProps = {
  isDarkTheme: false,
};