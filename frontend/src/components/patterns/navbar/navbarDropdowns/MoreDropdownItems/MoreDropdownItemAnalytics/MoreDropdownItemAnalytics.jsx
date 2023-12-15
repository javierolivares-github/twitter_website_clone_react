import React from 'react';
import PropTypes from 'prop-types';
import AnalyticsIcon from '../../../../../atoms/icons/AnalyticsIcon';
import Heading1 from '../../../../../atoms/headings/Heading1';

const MoreDropdownItemAnalytics = ({ isDarkTheme, onClick}) => {
  return (
    <li 
    data-testid="moredropitem-analytics"
    className={`list-none inline-flex justify-start items-center gap-4 p-4 cursor-pointer transition-all duration-200 ease-in-out 
    ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
    onClick={onClick}
    >
      {/* Icon */}
      <AnalyticsIcon fill={isDarkTheme ? "#FFFFFF" : "#172936"} size="24" />

      {/* Text */}
      <Heading1 weight={`font-normal`} color={isDarkTheme ? "text-gray-100" : "text-secondary-15"}>
        Analytics
      </Heading1>
    </li>
  );
};


export default MoreDropdownItemAnalytics;

MoreDropdownItemAnalytics.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
};

MoreDropdownItemAnalytics.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
};