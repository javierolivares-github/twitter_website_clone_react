import React, {useState} from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from '../NavbarWrapper';
import MoreDropdown from '../navbarDropdowns/MoreDropdown';
import ProfileDropdown from '../navbarDropdowns/ProfileDropdown';

const Navbar = ({ isDarkTheme, imageUrl, username, account }) => {
  const [showMoreDrop, setShowMoreDrop] = useState(false);
  const [showProDrop, setShowProfDrop] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const hideMoreDrop = () => setShowMoreDrop(false);
  const hideProfDrop = () => setShowProfDrop(false);
  const handleClickMoon = () => {};
  const handleClickMoreBtn = () => {
    setShowMoreDrop(!showMoreDrop);
    hideProfDrop();
  };
  const handleClickTweetBtn = () => {
    hideMoreDrop();
    hideProfDrop();
  };
  const handleClickProfile = () => {
    setShowProfDrop(!showProDrop);
    hideMoreDrop();
  };
  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };


  return (
    <aside 
      className={`relative flex flex-col h-screen w-[240px] ${darkTheme ? "bg-secondary-15" : "bg-gray-100"}`}
    >
      {/* Navbar wrapper */}
      <NavbarWrapper
        isDarkTheme={darkTheme}
        imageUrl={imageUrl}
        username={username}
        account={account}
        onClickMoon={toggleDarkTheme}
        onClickMore={handleClickMoreBtn}
        onClickTweet={handleClickTweetBtn}
        onClickProfile={handleClickProfile}
      />

      {/* MoreDropdown logic */}
      {showMoreDrop && (
        <MoreDropdown isDarkTheme={darkTheme} onClick={hideMoreDrop}/>
      )}

      {/* ProfileDropdown logic */}
      {showProDrop && (
        <ProfileDropdown
          isDarkTheme={darkTheme}
          imageUrl={imageUrl}
          username={username}
          account={account}
          onClickNewAcc={hideProfDrop}
          onClickLogOut={hideProfDrop}
        />
      )}
    </aside>
  )
};

export default Navbar;

Navbar.propTypes = {
  isDarkTheme: PropTypes.bool, 
  imageUrl: PropTypes.string, 
  username: PropTypes.string, 
  account: PropTypes.string,
};

Navbar.defaultProps = {
  isDarkTheme: false, 
  imageUrl: "../../../../../assets/profile2.png", 
  username: "Jane Doe", 
  account: "@jane28",
}