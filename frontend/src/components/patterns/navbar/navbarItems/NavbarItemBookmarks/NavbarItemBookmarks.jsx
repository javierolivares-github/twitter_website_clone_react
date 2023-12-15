import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../index.css';
import BookmarksIcon from '../../../../atoms/icons/BookmarksIcon';
import Heading1 from '../../../../atoms/headings/Heading1';


const NavbarItemBookmarks = ({ isDarkTheme, isHomeActive, onClick }) => {
  return (
    <li 
      data-testid="navbar-item-bookmarks-container"
      className={`inline-flex justify-start items-center gap-3 p-3 
      rounded-full cursor-pointer transition-all duration-200 
      ease-in-out
      ${!isDarkTheme & !isHomeActive && 'hover:bg-primary-98'}
      ${!isDarkTheme & isHomeActive && 'bg-primary-90 hover:bg-primary-90'}
      ${isDarkTheme & !isHomeActive && 'hover:bg-transparent-10'}
      ${isDarkTheme & isHomeActive && 'bg-transparent-25 hover:bg-transparent-25'}
      `}
      onClick={onClick}
    >
      {/* Icon */}
      {isHomeActive ? 
        <BookmarksIcon fill={isDarkTheme ? '#FFFFFF' : '#172936'} size="24" isFilled/> : 
        <BookmarksIcon fill={isDarkTheme ? '#FFFFFF' : '#172936'} size="24"/>
      }

      {/* Label */}
      <Heading1
        color={isDarkTheme ? "text-gray-100" : "text-secondary-15"}
        weight={isHomeActive ? 'font-bold' : 'font-normal'}
      >
        Bookmarks
      </Heading1>
    </li>
  )
};


export default NavbarItemBookmarks;

NavbarItemBookmarks.propTypes = {
  isDarkTheme: PropTypes.bool,
  isHomeActive: PropTypes.bool,
  onClick: PropTypes.func,
};

NavbarItemBookmarks.defaultProps = {
  isDarkTheme: false,
  isHomeActive: false,
  onClick: undefined,
}