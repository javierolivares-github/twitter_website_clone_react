import React from 'react';
import PropTypes from 'prop-types';
import AdsIcon from '../../../../../atoms/icons/AdsIcon';
import Heading1 from '../../../../../atoms/headings/Heading1';

const MoreDropdownItemAds = ({ isDarkTheme, onClick}) => {
  return (
    <li 
    data-testid="moredropitem-ads"
    className={`list-none inline-flex justify-start items-center gap-4 p-4 cursor-pointer transition-all duration-200 ease-in-out 
    ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
    onClick={onClick}
    >
      {/* Icon */}
      <AdsIcon fill={isDarkTheme ? "#FFFFFF" : "#172936"} size="24" />

      {/* Text */}
      <Heading1 weight={`font-normal`} color={isDarkTheme ? "text-gray-100" : "text-secondary-15"}>
        Ads
      </Heading1>
    </li>
  );
};


export default MoreDropdownItemAds;

MoreDropdownItemAds.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
};

MoreDropdownItemAds.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
};