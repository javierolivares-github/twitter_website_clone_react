import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const ProfileImage = ({ imageUrl, size }) => {
  return (
    <img
      data-testid="profile-img-container"
      src={imageUrl}
      className={`object-cover w-[${size}] h-[${size}]`}
      alt="Profile image"
    />
  )
};

export default ProfileImage;

ProfileImage.propTypes = {
  imageUrl: PropTypes.string,
  size: PropTypes.string,
};

ProfileImage.defaultProps = {
  imageUrl: "../../../../../assets/profile1.png",
  size: "40px",
};