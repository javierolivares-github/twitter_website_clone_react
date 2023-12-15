import React from 'react';
import PropTypes from 'prop-types';
import MoreDropdownItemTopics from '../MoreDropdownItems/MoreDropdownItemTopics';
import MoreDropdownItemNews from '../MoreDropdownItems/MoreDropdownItemNews';
import MoreDropdownItemSpaces from '../MoreDropdownItems/MoreDropdownItemSpaces';
import MoreDropdownItemAds from '../MoreDropdownItems/MoreDropdownItemAds';
import MoreDropdownItemAnalytics from '../MoreDropdownItems/MoreDropdownItemAnalytics';
import MoreDropdownItemSettings from '../MoreDropdownItems/MoreDropdownItemSettings';
import MoreDropdownItemHelp from '../MoreDropdownItems/MoreDropdownItemHelp';
import MoreDropdownItemDisplay from '../MoreDropdownItems/MoreDropdownItemDisplay';
import MoreDropdownItemShortcuts from '../MoreDropdownItems/MoreDropdownItemShortcuts';
import HorizontalBorder from '../../../../atoms/borders/HorizontalBorder';

const MoreDropdown = ({isDarkTheme}) => {
  return (
    <ul 
      className={`absolute top-4 left-4 list-none w-[320px] 
      rounded-2xl overflow-hidden flex flex-col 
      ${isDarkTheme ? 'bg-secondary-15 effect-style-dark-bottom' : 'bg-gray-100 effect-style-light-bottom'}`}
    >
      <MoreDropdownItemTopics isDarkTheme={isDarkTheme} />
      <MoreDropdownItemNews isDarkTheme={isDarkTheme}/>
      <MoreDropdownItemSpaces isDarkTheme={isDarkTheme}/>
      <MoreDropdownItemAds isDarkTheme={isDarkTheme}/>
      <MoreDropdownItemAnalytics isDarkTheme={isDarkTheme}/>
      <HorizontalBorder isDarkTheme={isDarkTheme}/>
      <MoreDropdownItemSettings isDarkTheme={isDarkTheme}/>
      <MoreDropdownItemHelp isDarkTheme={isDarkTheme}/>
      <MoreDropdownItemDisplay isDarkTheme={isDarkTheme}/>
      <MoreDropdownItemShortcuts isDarkTheme={isDarkTheme}/>
    </ul>
  );
}

export default MoreDropdown;

MoreDropdown.propTypes = {
  isDarkTheme: PropTypes.bool,
};

MoreDropdown.defaultProps = {
  isDarkTheme: false,
};