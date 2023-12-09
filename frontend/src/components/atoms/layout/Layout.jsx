import React, {useContext} from 'react';
import { Context } from '../../../utilities/Context';


const Layout = ({ children }) => {
   const {
    isDarkTheme,
    setIsMoreActive,
    showMoreDrop,
    setShowMoreDrop,
    showProDrop,
    setShowProDrop,
  } = useContext(Context);

  const handleClick = () => {
    setIsMoreActive(false);
    setShowMoreDrop(false);
    setShowProDrop(false);
  }

  return (
    <div
      onClick={showMoreDrop || showProDrop ? handleClick : undefined}
      className={`layout grid grid-cols-[minmax(292px,_1fr)_5fr] h-screen
      transition-all duration-200 ease-in-out ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
    >
      {children}
    </div>
  )
};


export default Layout;