import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const ProfileImage = ({ imageUrl }) => {
  return (
    <img
      data-testid="profile-img-container"
      src={imageUrl}
      className="object-cover w-10 h-10"
      alt="Profile image"
    />
  )
};

export default ProfileImage;

ProfileImage.propTypes = {
  imageUrl: PropTypes.string,
};

ProfileImage.defaultProps = {
  imageUrl: "../../../../../assets/profile1.png",
};