import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../atoms/icons/Icon';
import { Context } from '../../../../utilities/Context';


const NavbarItemLists = ({ isDarkTheme }) => {
  const {
    isListsActive,
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
        iconName="lists"
        fillColor={isDarkTheme ? 'fill-current text-gray-100' : 'fill-current text-secondary-15'} 
        isFilled={false}
      />
    );
  };

  const svgFilled = () => {
    return (
      <Icon 
        iconName="lists" 
        fillColor={isDarkTheme ? 'fill-current text-gray-100' : 'fill-current text-secondary-15'}
        isFilled={true}
      />
    );
  };

  const handleClick = () => {
    setIsHomeActive(false);
    setIsExploreActive(false);
    setIsNotifActive(false);
    setIsBookmarksActive(false);
    setIsListsActive(true);
    setIsProfileActive(false);
    setIsMoreActive(false);
    navigate("/lists");
  }

  return (
    <li 
      className={`inline-flex justify-start items-center gap-3 p-3 
      rounded-full cursor-pointer transition-all duration-200 
      ease-in-out ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`} 
      onClick={handleClick}
    >
      {/* Icon */}
      {isListsActive ? svgFilled() : svgOutline()}

      {/* Label */}
      <span 
        className={`${isListsActive ? 'font-bold' : 'font-normal'} text-[20px] leading-5 tracking-normal
        ${isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}`}
      >
        Listas
      </span>
    </li>
  )
};


export default NavbarItemLists;