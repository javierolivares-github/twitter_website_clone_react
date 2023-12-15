import React from 'react';
import PropTypes from 'prop-types';
import HelpIcon from '../../../../../atoms/icons/HelpIcon';
import Heading1 from '../../../../../atoms/headings/Heading1';

const MoreDropdownItemHelp = ({ isDarkTheme, onClick}) => {
  return (
    <li 
    data-testid="moredropitem-help"
    className={`list-none inline-flex justify-start items-center gap-4 p-4 cursor-pointer transition-all duration-200 ease-in-out 
    ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
    onClick={onClick}
    >
      {/* Icon */}
      <HelpIcon fill={isDarkTheme ? "#FFFFFF" : "#172936"} size="24" />

      {/* Text */}
      <Heading1 weight={`font-normal`} color={isDarkTheme ? "text-gray-100" : "text-secondary-15"}>
        Help
      </Heading1>
    </li>
  );
};


export default MoreDropdownItemHelp;

MoreDropdownItemHelp.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
};

MoreDropdownItemHelp.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
};