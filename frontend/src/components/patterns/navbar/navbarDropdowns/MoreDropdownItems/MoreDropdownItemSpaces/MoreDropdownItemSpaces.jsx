import React from 'react';
import PropTypes from 'prop-types';
import SpacesIcon from '../../../../../atoms/icons/SpacesIcon';
import Heading1 from '../../../../../atoms/headings/Heading1';

const MoreDropdownItemSpaces = ({ isDarkTheme}) => {
  return (
    <li 
    data-testid="moredropitem-spaces"
    className={`list-none inline-flex justify-start items-center gap-4 p-4 cursor-pointer transition-all duration-200 ease-in-out 
    ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
    >
      {/* Icon */}
      <SpacesIcon fill={isDarkTheme ? "#FFFFFF" : "#172936"} size="24" />

      {/* Text */}
      <Heading1 weight={`font-normal`} color={isDarkTheme ? "text-gray-100" : "text-secondary-15"}>
        Spaces
      </Heading1>
    </li>
  );
};


export default MoreDropdownItemSpaces;

MoreDropdownItemSpaces.propTypes = {
  isDarkTheme: PropTypes.bool,
};

MoreDropdownItemSpaces.defaultProps = {
  isDarkTheme: false,
};