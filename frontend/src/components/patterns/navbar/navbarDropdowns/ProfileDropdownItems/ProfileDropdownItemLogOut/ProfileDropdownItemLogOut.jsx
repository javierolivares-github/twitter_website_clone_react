import React from 'react';
import PropTypes from 'prop-types';
import Heading1 from '../../../../../atoms/headings/Heading1';

const ProfileDropdownItemLogOut = ({ account, isDarkTheme, onClick }) => {
  return (
    <li
      data-testid="profiledropitem-logout" 
      className={`list-none flex justify-start items-center p-4 cursor-pointer transition-all 
      duration-200 ease-in-out max-w-[320px] ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
      onClick={onClick}
    >
      {/* Text */}
      <Heading1 weight={`font-normal`} color={isDarkTheme ? "text-gray-100" : "text-secondary-15"}>
        Log out {account}
      </Heading1>
    </li>  
  )
};

export default ProfileDropdownItemLogOut;

ProfileDropdownItemLogOut.propTypes = {
  isDarkTheme: PropTypes.bool,
  account: PropTypes.string,
  onClick: PropTypes.func,
};

ProfileDropdownItemLogOut.defaultProps = {
  isDarkTheme: false,
  account: "@account",
  onClick: undefined,
};