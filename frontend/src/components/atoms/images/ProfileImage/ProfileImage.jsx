import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const ProfileImage = ({ imageUrl }) => {
  return (
    <div className={`w-10 h-10 rounded-full overflow-hidden`}>
      <img
      data-testid="profile-img-container"
      src={imageUrl}
      className={`object-cover w-full h-full`}
      alt="Profile image"
    />
    </div>
  )
};

export default ProfileImage;

ProfileImage.propTypes = {
  imageUrl: PropTypes.string,
};

ProfileImage.defaultProps = {
  imageUrl: "../../../../../assets/profile1.png",
};