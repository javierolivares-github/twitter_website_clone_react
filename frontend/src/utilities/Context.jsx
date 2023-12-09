import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [isDarkTheme, setisDarkTheme] = useState(false);
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isExploreActive, setIsExploreActive] = useState(false);
  const [isNotifActive, setIsNotifActive] = useState(false);
  const [isBookmarksActive, setIsBookmarksActive] = useState(false);
  const [isListsActive, setIsListsActive] = useState(false);
  const [isProfileActive, setIsProfileActive] = useState(false);
  const [isMoreActive, setIsMoreActive] = useState(false);
  const [showMoreDrop, setShowMoreDrop] = useState(false);
  const [showProDrop, setShowProDrop] = useState(false);

  return (
    <Context.Provider
      value={{
        isDarkTheme,
        setisDarkTheme,
        isHomeActive,
        setIsHomeActive,
        isExploreActive,
        setIsExploreActive,
        isNotifActive,
        setIsNotifActive,
        isBookmarksActive,
        setIsBookmarksActive,
        isListsActive,
        setIsListsActive,
        isProfileActive,
        setIsProfileActive,
        isMoreActive,
        setIsMoreActive,
        showMoreDrop,
        setShowMoreDrop,
        showProDrop,
        setShowProDrop,
      }}
    >
      {children}
    </Context.Provider>
  )
};

export default AppContext;