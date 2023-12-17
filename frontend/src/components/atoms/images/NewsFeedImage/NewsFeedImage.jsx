import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const NewsFeedImage = ({ imageUrl }) => {
  return (
    <div className="w-[72px] h-[72px] rounded-[16px] overflow-hidden flex-grow">
      <img
        data-testid="newsfeed-img"
        src={imageUrl ? imageUrl : "../../../../../assets/virtualBoy.jpg"}
        className={`object-cover w-full h-full `}
        alt="NewsFeed image"
      />
    </div>
  )
};

export default NewsFeedImage;

NewsFeedImage.propTypes = {
  imageUrl: PropTypes.string,
};

NewsFeedImage.defaultProps = {
  imageUrl: "../../../../../assets/virtualBoy.jpg",
};

