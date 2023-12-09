import React from 'react';
import virtualBoy from '../../../assets/virtualBoy.jpg';


const NewsFeedImage = ({ imageUrl }) => {
  return (
    <img 
      src={imageUrl ? imageUrl : virtualBoy}
      className={`object-cover w-[100%] h-[100%]`}
      alt="Profile image"
    />
  )
};


export default NewsFeedImage;