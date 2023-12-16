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

const MoreDropdown = ({isDarkTheme, onClick }) => {
  return (
    <ul 
      className={`absolute top-40 left-60 list-none w-[320px] 
      rounded-2xl overflow-hidden flex flex-col 
      ${isDarkTheme ? 'bg-secondary-15 effect-style-dark-bottom' : 'bg-gray-100 effect-style-light-bottom'}`}
    >
      <MoreDropdownItemTopics isDarkTheme={isDarkTheme} onClick={onClick}/>
      <MoreDropdownItemNews isDarkTheme={isDarkTheme} onClick={onClick}/>
      <MoreDropdownItemSpaces isDarkTheme={isDarkTheme} onClick={onClick}/>
      <MoreDropdownItemAds isDarkTheme={isDarkTheme} onClick={onClick}/>
      <MoreDropdownItemAnalytics isDarkTheme={isDarkTheme} onClick={onClick}/>
      <HorizontalBorder isDarkTheme={isDarkTheme}/>
      <MoreDropdownItemSettings isDarkTheme={isDarkTheme} onClick={onClick}/>
      <MoreDropdownItemHelp isDarkTheme={isDarkTheme} onClick={onClick}/>
      <MoreDropdownItemDisplay isDarkTheme={isDarkTheme} onClick={onClick}/>
      <MoreDropdownItemShortcuts isDarkTheme={isDarkTheme} onClick={onClick}/>
    </ul>
  );
}

export default MoreDropdown;

MoreDropdown.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
};

MoreDropdown.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
};