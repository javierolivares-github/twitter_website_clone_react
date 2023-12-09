import React, {useContext} from 'react';
import { useNavigate } from "react-router-dom";
import Icon from '../../../atoms/icons/Icon';
import { Context } from '../../../../utilities/Context';


const NavbarItemHome = ({ isDarkTheme }) => {
  const {
    isHomeActive,
    setIsHomeActive,
    setIsExploreActive,
    setIsNotifActive,
    setIsBookmarksActive,
    setIsListsActive,
    setIsProfileActive,
    setIsMoreActive
  } = useContext(Context);

  const navigate = useNavigate();

  const svgOutline = () => {
    return (
      <Icon 
        iconName="home"
        fillColor={isDarkTheme ? 'fill-current text-gray-100' : 'fill-current text-secondary-15'} 
        isFilled={false}
      />
    );
  };

  const svgFilled = () => {
    return (
      <Icon 
        iconName="home" 
        fillColor={isDarkTheme ? 'fill-current text-gray-100' : 'fill-current text-secondary-15'}
        isFilled={true}
      />
    );
  };

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
    <li 
      className={`inline-flex justify-start items-center gap-3 p-3 
      rounded-full cursor-pointer transition-all duration-200 
      ease-in-out ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`} 
      onClick={handleClick}
    >
      {/* Icon */}
      {isHomeActive ? svgFilled() : svgOutline()}

      {/* Label */}
      <span 
        className={`${isHomeActive ? 'font-bold' : 'font-normal'} text-[20px] leading-5 tracking-normal
        ${isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}`}
      >
        Inicio
      </span>
    </li>
  )
};


export default NavbarItemHome;