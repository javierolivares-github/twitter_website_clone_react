import React, {useContext} from 'react';
import { Context } from '../../../utilities/Context';
import NavbarWrapper from './NavbarWrapper';
import MoreDropdown from './navbarDropdowns/MoreDropdown';
import ProfileDropdown from './navbarDropdowns/ProfileDropdown';


const Navbar = () => {
  const { isDarkTheme,showMoreDrop, showProDrop } = useContext(Context);

  return (
    <aside className='relative flex flex-col h-screen'>
      {/* Navbar wrapper */}
      <NavbarWrapper isDarkTheme={isDarkTheme}/>

      {/* MoreDropdown logic */}
      {showMoreDrop && (
        <MoreDropdown isDarkTheme={isDarkTheme}/>
      )}

      {/* ProfileDropdown logic */}
      {showProDrop && (
        <ProfileDropdown username="Francisco Olivares" account="@pancho" isDarkTheme={isDarkTheme} /> 
      )}
    </aside>
  )
};


export default Navbar;