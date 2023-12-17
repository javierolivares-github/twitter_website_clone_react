import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const WhoToFollowImage = ({ imageUrl }) => {
  return (
    <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
      <img
        data-testid="whoToFollow-img"
        src={imageUrl ? imageUrl : "../../../../../assets/profile1.png"}
        className={`object-cover w-full h-full `}
        alt="Who To Follow image"
      />
    </div>
  );
};

export default WhoToFollowImage;

WhoToFollowImage.propTypes = {
  imageUrl: PropTypes.string,
};

WhoToFollowImage.defaultProps = {
  imageUrl: "../../../../../assets/profile1.png",
};