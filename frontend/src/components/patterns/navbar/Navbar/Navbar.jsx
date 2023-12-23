import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from '../NavbarWrapper';
import MoreDropdown from '../navbarDropdowns/MoreDropdown';
import ProfileDropdown from '../navbarDropdowns/ProfileDropdown';
import { statusTypes } from '../../../../data/statusTypes';

const Navbar = () => {
  const [profileState, setProfileState] = useState({
    status: statusTypes.loading,
    data: [],
  });
  console.log(profileState)
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

  useEffect(() => {
    const getData = async () => {
      try {
        const profileFetch = await fetch('/api/profile');
        const profileResponse = await profileFetch.json();
        setProfileState({
          status: statusTypes.loaded,
          data: profileResponse,
        });
      } catch (error) {
        console.log(error);
        setProfileState({
          status: statusTypes.error,
          data: [],
        })
      }
    }

    getData();
  }, [])


  return (
    <aside 
      className={`relative flex flex-col h-screen w-[240px] ${darkTheme ? "bg-secondary-15" : "bg-gray-100"}`}
    >
      {/* Navbar wrapper */}
      <NavbarWrapper
        isDarkTheme={darkTheme}
        status={profileState.status}
        data={profileState.data}
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
          imageUrl={profileState.data[0].imageUrl}
          username={profileState.data[0].username}
          account={profileState.data[0].account}
          onClickNewAcc={hideProfDrop}
          onClickLogOut={hideProfDrop}
        />
      )}
    </aside>
  )
};

export default Navbar;
