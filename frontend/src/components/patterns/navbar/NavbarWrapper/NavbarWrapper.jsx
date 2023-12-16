import React from "react";
import PropTypes from 'prop-types';
import ButtonIconLogo from '../../../atoms/buttons/ButtonIconLogo';
import ButtonIconMoon from '../../../atoms/buttons/ButtonIconMoon';
import TweetButton from '../../../atoms/buttons/TweetButton';
import NavbarItemHome from '../navbarItems/NavbarItemHome';
import NavbarItemExplore from '../navbarItems/NavbarItemExplore';
import NavbarItemNotification from '../navbarItems/NavbarItemNotification';
import NavbarItemBookmarks from '../navbarItems/NavbarItemBookmarks';
import NavbarItemLists from '../navbarItems/NavbarItemLists';
import NavbarItemProfile from '../navbarItems/NavbarItemProfile';
import NavbarItemMore from '../navbarItems/NavbarItemMore';
import NavbarProfile from '../navbarItems/NavbarProfile';

const NavbarWrapper = ({ isDarkTheme, onClickMoon, onClickTweet, imageUrl, username, account, onClickMore , onClickProfile }) => {
  return (
    <nav
      data-testid="navbar-wrapper"
      className='flex flex-col flex-grow gap-4 p-4 transition-all duration-200 ease-in-out h-screen w-[240px]'
    >
      {/* Navbar header */}
      <header className='flex justify-between items-center py-3'>
        <ButtonIconLogo isDarkTheme={isDarkTheme}/>
        <ButtonIconMoon isDarkTheme={isDarkTheme} onClick={onClickMoon}/>
      </header>

      {/* Navbar body */}
      <ul className='list-none flex flex-col gap-4'>
        <NavbarItemHome isDarkTheme={isDarkTheme}/>
        <NavbarItemExplore isDarkTheme={isDarkTheme}/>
        <NavbarItemNotification isDarkTheme={isDarkTheme}/>
        <NavbarItemBookmarks isDarkTheme={isDarkTheme}/>
        <NavbarItemLists isDarkTheme={isDarkTheme}/>
        <NavbarItemProfile isDarkTheme={isDarkTheme}/>
        <NavbarItemMore isDarkTheme={isDarkTheme} onClick={onClickMore}/>

        <TweetButton size="large" isDarkTheme={isDarkTheme} onClick={onClickTweet}>Tweet</TweetButton>
      </ul>

      {/* Navbar footer */}
      <footer className='flex flex-col flex-grow justify-end h-full'>
        <NavbarProfile
          account={account}
          imageUrl={imageUrl}
          onClick={onClickProfile}
          username={username}
          isDarkTheme={isDarkTheme}
        />
      </footer>
    </nav>
  )
};

export default NavbarWrapper;

NavbarWrapper.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClickMoon: PropTypes.func, 
  onClickTweet: PropTypes.func, 
  imageUrl: PropTypes.string, 
  username: PropTypes.string, 
  account: PropTypes.string,
  onClickMore: PropTypes.func,
  onClickProfile: PropTypes.func,
};

NavbarWrapper.defaultProps = {
  isDarkTheme: false,
  onClickMoon: undefined, 
  onClickTweet: undefined, 
  imageUrl: "../../../../../assets/profile1.png", 
  username: "Username", 
  account: "@account",
  onClickMore: undefined, 
  onClickProfile: undefined,
}

