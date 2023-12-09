import React from 'react';
import TwitterLogo from '../../atoms/logos/TwitterLogo';
import Moon from '../../atoms/logos/Moon';
import NavbarItemHome from './navbarItems/NavbarItemHome';
import NavbarItemExplore from './navbarItems/NavbarItemExplore';
import NavbarItemNotification from './navbarItems/NavbarItemNotification';
import NavbarItemBookmarks from './navbarItems/NavbarItemBookmarks';
import NavbarItemLists from './navbarItems/NavbarItemLists';
import NavbarItemProfile from './navbarItems/NavbarItemProfile';
import NavbarItemMore from './navbarItems/NavbarItemMore';
import TweetButton from '../../atoms/buttons/TweetButton';
import NavbarItemUser from './navbarItems/NavbarItemUser';


const NavbarWrapper = ({ isDarkTheme }) => {
  return (
    <div className='flex flex-col flex-grow gap-4 p-4 transition-all duration-200 ease-in-out h-screen'>
      {/* Navbar header */}
      <header className='flex justify-between items-center p-[0.75rem]'>
        <TwitterLogo isDarkTheme={isDarkTheme}/>
        <Moon />
      </header>

      {/* Navbar body */}
      <ul className='list-none flex flex-col gap-4'>
        <NavbarItemHome isDarkTheme={isDarkTheme}/>
        <NavbarItemExplore isDarkTheme={isDarkTheme}/>
        <NavbarItemNotification isDarkTheme={isDarkTheme}/>
        <NavbarItemBookmarks isDarkTheme={isDarkTheme}/>
        <NavbarItemLists isDarkTheme={isDarkTheme}/>
        <NavbarItemProfile isDarkTheme={isDarkTheme}/>
        <NavbarItemMore isDarkTheme={isDarkTheme}/>

        <TweetButton size="large" isDarkTheme={isDarkTheme}>Tweet</TweetButton>
      </ul>

      {/* Navbar footer */}
      <footer className='flex flex-col flex-grow justify-end h-full'>
        <NavbarItemUser username="Francisco Olivares" account="@pancho" isDarkTheme={isDarkTheme}/>
      </footer>
    </div>
  )
};


export default NavbarWrapper;