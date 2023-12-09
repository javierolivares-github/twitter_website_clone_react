import React from 'react';
import profileImg from '../../../assets/profile4.png';


const WhoToFollowImage = ({ imageUrl }) => {
  return (
    <img 
      src={imageUrl ? imageUrl : profileImg}
      className={`object-cover w-[100%] h-[100%]`}
      alt="Profile image"
    />
  )
};


export default WhoToFollowImage;