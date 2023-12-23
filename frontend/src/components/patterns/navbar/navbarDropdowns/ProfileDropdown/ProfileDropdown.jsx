import React from 'react';
import PropTypes from 'prop-types';
import ProfileDropdownHeader from '../ProfileDropdownHeader';
import HorizontalBorder from '../../../../atoms/borders/HorizontalBorder';
import ProfileDropdownItemNewAccount from '../ProfileDropdownItems/ProfileDropdownItemNewAccount';
import ProfileDropdownItemLogOut from '../ProfileDropdownItems/ProfileDropdownItemLogOut';

const ProfileDropdown = ({ status, data, isDarkTheme, onClickNewAcc, onClickLogOut }) => {
  return (
    <div
      data-testid="profiledropdown" 
      className={`absolute bottom-12 left-60 w-[320px] rounded-2xl overflow-hidden 
      flex flex-col ${isDarkTheme ? 'bg-secondary-15 effect-style-dark-bottom' : 'bg-gray-100 effect-style-light-bottom'}`}
    >
      <ProfileDropdownHeader
        status={status}
        data={data}
        isDarkTheme={isDarkTheme}
      />

      <HorizontalBorder isDarkTheme={isDarkTheme}/>
      
      <ul>
        <ProfileDropdownItemNewAccount isDarkTheme={isDarkTheme} onClick={onClickNewAcc} />
        <ProfileDropdownItemLogOut account={data[0]?.account} isDarkTheme={isDarkTheme} onClick={onClickLogOut} />
      </ul>
    </div>
  );
};

export default ProfileDropdown;

ProfileDropdown.propTypes = {
  status: PropTypes.oneOf(["loading", "error", "loaded"]),
  data: PropTypes.array,
  isDarkTheme: PropTypes.bool,
  onClickNewAcc: PropTypes.func,
  onClickLogOut: PropTypes.func,
};

ProfileDropdown.defaultProps = {
  isDarkTheme: false,
  onClickNewAcc: undefined,
  onClickLogOut: undefined,
};



