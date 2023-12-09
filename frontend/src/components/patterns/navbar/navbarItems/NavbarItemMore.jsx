import React, {useContext} from 'react';
import Icon from '../../../atoms/icons/Icon';
import { Context } from '../../../../utilities/Context';


const NavbarItemMore = ({ isDarkTheme }) => {
  const {
    isMoreActive,
    setIsMoreActive,
    showMoreDrop,
    setShowMoreDrop,
  } = useContext(Context);

  const svgOutline = () => {
    return (
      <Icon 
        iconName="more"
        fillColor={isDarkTheme ? 'fill-current text-gray-100' : 'fill-current text-secondary-15'} 
        isFilled={false}
      />
    );
  };

  const svgFilled = () => {
    return (
      <Icon 
        iconName="more" 
        fillColor={isDarkTheme ? 'fill-current text-gray-100' : 'fill-current text-secondary-15'}
        isFilled={true}
      />
    );
  };

  const handleClick = () => {
    setIsMoreActive(!isMoreActive);
    setShowMoreDrop(!showMoreDrop);
  }

  return (
    <li 
      className={`inline-flex justify-start items-center gap-3 p-3 
      rounded-full cursor-pointer transition-all duration-200 
      ease-in-out ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`} 
      onClick={handleClick}
    >
      {/* Icon */}
      {isMoreActive ? svgFilled() : svgOutline()}

      {/* Label */}
      <span 
        className={`${isMoreActive ? 'font-bold' : 'font-normal'} text-[20px] leading-5 tracking-normal
        ${isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}`}
      >
        Más
      </span>
    </li>
  )
};


export default NavbarItemMore;