import React from 'react';
import MoreDropdownItem from './navbarDropdownItems/MoreDropdownItem';
import HorizontalBorder from '../../../atoms/borders/HorizontalBorder';

const MoreDropdown = ({isDarkTheme}) => {
  return (
    <ul 
      className={`absolute top-[125px] left-[16px] list-none w-[320px] 
      rounded-2xl overflow-hidden flex flex-col ${isDarkTheme ? 'bg-secondary-15 effect-style-dark-bottom' : 'bg-gray-100 effect-style-light-bottom'}`}
    >
      <MoreDropdownItem icon="topics" label="Temas" isDarkTheme={isDarkTheme}/>
      <MoreDropdownItem icon="news" label="Noticias" isDarkTheme={isDarkTheme}/>
      <MoreDropdownItem icon="spaces" label="Espacios" isDarkTheme={isDarkTheme}/>
      <MoreDropdownItem icon="ads" label="Anuncios" isDarkTheme={isDarkTheme}/>
      <MoreDropdownItem icon="analytics" label="Estadísticas" isDarkTheme={isDarkTheme}/>
      <HorizontalBorder isDarkTheme={isDarkTheme}/>
      <MoreDropdownItem icon="settings" label="Configuraciones" isDarkTheme={isDarkTheme}/>
    </ul>
  );
}

export default MoreDropdown;