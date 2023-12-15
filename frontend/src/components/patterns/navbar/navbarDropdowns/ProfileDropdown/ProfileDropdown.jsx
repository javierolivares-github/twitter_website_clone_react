import React from 'react';
import PropTypes from 'prop-types';
import ProfileDropdownHeader from '../ProfileDropdownHeader';
import HorizontalBorder from '../../../../atoms/borders/HorizontalBorder';
import ProfileDropdownItemNewAccount from '../ProfileDropdownItems/ProfileDropdownItemNewAccount';
import ProfileDropdownItemLogOut from '../ProfileDropdownItems/ProfileDropdownItemLogOut';

const ProfileDropdown = ({ username, account, imageUrl, isDarkTheme, onClick1, onClick2 }) => {
  return (
    <div
      data-testid="profiledropdown" 
      className={`absolute top-2 left-2 w-[320px] rounded-2xl overflow-hidden 
      flex flex-col ${isDarkTheme ? 'bg-secondary-15 effect-style-dark-bottom' : 'bg-gray-100 effect-style-light-bottom'}`}
    >
      <ProfileDropdownHeader
        account={account}
        imageUrl={imageUrl}
        username={username}
        isDarkTheme={isDarkTheme}
      />

      <HorizontalBorder isDarkTheme={isDarkTheme}/>
      
      <ul>
        <ProfileDropdownItemNewAccount isDarkTheme={isDarkTheme} onClick={onClick1} />
        <ProfileDropdownItemLogOut account={account} isDarkTheme={isDarkTheme} onClick={onClick2} />
      </ul>
    </div>
  );
};

export default ProfileDropdown;

ProfileDropdown.propTypes = {
  username: PropTypes.string,
  account: PropTypes.string,
  imageUrl: PropTypes.string,
  isDarkTheme: PropTypes.bool,
  onClick1: PropTypes.func,
  onClick2: PropTypes.func,
};

ProfileDropdown.defaultProps = {
  username: "Username",
  account: "@account",
  imageUrl: "../../../../../assets/profile3.png",
  isDarkTheme: false,
  onClick1: undefined,
  onClick2: undefined,
};



