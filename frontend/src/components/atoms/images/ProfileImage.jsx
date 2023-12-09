import React from 'react';
import profileImg from '../../../assets/profile3.png';


const ProfileImage = ({ imageUrl }) => {
  return (
    <img 
      src={imageUrl ? imageUrl : profileImg}
      className={`object-cover w-[40px] h-[40px]`}
      alt="Profile image"
    />
  )
};


export default ProfileImage;