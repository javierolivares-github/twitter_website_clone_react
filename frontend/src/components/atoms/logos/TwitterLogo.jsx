import React, { useContext } from 'react';
import Icon from '../icons/Icon';
import { useNavigate } from "react-router-dom";
import { Context } from '../../../utilities/Context';


const TwitterLogo = ({ isDarkTheme }) => {
  const {
    setIsHomeActive,
    setIsExploreActive,
    setIsNotifActive,
    setIsBookmarksActive,
    setIsListsActive,
    setIsProfileActive,
    setIsMoreActive
  } = useContext(Context);

  const navigate = useNavigate();

  const handleClick = () => {
    setIsHomeActive(true);
    setIsExploreActive(false);
    setIsNotifActive(false);
    setIsBookmarksActive(false);
    setIsListsActive(false);
    setIsProfileActive(false);
    setIsMoreActive(false);
    navigate("/home");
  }

  return (
    <div onClick={handleClick} className={`p-2 rounded-full ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'} inline-flex justify-center items-center cursor-pointer transition-all duration-200 ease-in-out`}>

      <Icon 
        iconName="twitter" 
        fillColor={isDarkTheme ? 'fill-current text-gray-100' : 'fill-current text-primary-50'}
      />
      
    </div>
  )
};


export default TwitterLogo;