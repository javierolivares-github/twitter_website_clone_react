import React from 'react';
import PropTypes from 'prop-types';
import ProfileImage from '../../../../atoms/images/ProfileImage';
import Heading2 from '../../../../atoms/headings/Heading2';
import Body2 from '../../../../atoms/headings/Body2';
import CheckIcon from '../../../../atoms/icons/CheckIcon';

const ProfileDropdownHeader = ({ imageUrl, username, account, isDarkTheme }) => {
  return (
    <div
      data-testid="profiledrop-header"
      className={`flex items-center gap-4 p-4 transition-all duration-200 ease-in-out max-w-[320px]`}
    >
      
      {/* Image */}
      <ProfileImage imageUrl={imageUrl} size={`40px`}/>

      {/* Texts */}
      <div className={`flex-grow flex flex-col gap-1 overflow-hidden`}>
        <Heading2 
          weight="font-bold" 
          color={isDarkTheme ? "text-gray-100" : "text-secondary-25"}
        >
          {username}
        </Heading2>
        <Body2
          weight="font-normal" 
          color={isDarkTheme ? "text-gray-100" : "text-secondary-40"}
        >
          {account}
        </Body2>
      </div>
      
      {/* Icon */}
      <CheckIcon 
        fill="#00BA18"
        size="24"
      />

    </div>
  )
};


export default ProfileDropdownHeader;

ProfileDropdownHeader.propTypes = {
  imageUrl: PropTypes.string,
  username: PropTypes.string,
  account: PropTypes.string,
  isDarkTheme: PropTypes.bool,
};

ProfileDropdownHeader.defaultProps = {
  imageUrl: "../../../../../assets/profile3.png", 
  username: "Username",
  account: "@account",
  isDarkTheme: false,
}