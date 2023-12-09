import React, { useContext } from 'react';
import { Context } from '../../../../utilities/Context';
import ProfileDropdownUsername from './navbarDropdownItems/ProfileDropdownUsername';
import ProfileDropdownItem from './navbarDropdownItems/ProfileDropdownItem';
import HorizontalBorder from '../../../atoms/borders/HorizontalBorder';


const ProfileDropdown = ({ username, account, isDarkTheme }) => {
  const {showProDrop, setShowProDrop} = useContext(Context);

  const switchToggle = () => {
    setShowProDrop(!showProDrop);
  }

  return (
    <div 
      className={`absolute bottom-[92px] left-5 w-[320px] rounded-2xl overflow-hidden 
      flex flex-col ${isDarkTheme ? 'bg-secondary-15 effect-style-dark-bottom' : 'bg-gray-100 effect-style-light-bottom'}`}
      onClick={switchToggle}
    >
      <ProfileDropdownUsername username={username} account={account} isDarkTheme={isDarkTheme}/>

      <HorizontalBorder isDarkTheme={isDarkTheme}/>
      
      <ul>
        <ProfileDropdownItem label="Crear nueva cuenta" isDarkTheme={isDarkTheme}/>
        <ProfileDropdownItem label="Cerrar sesión" account={account} isDarkTheme={isDarkTheme} />
      </ul>
    </div>
  )
};


export default ProfileDropdown;