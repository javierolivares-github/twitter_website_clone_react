import React, { useContext } from 'react';

const ScreenWrapper = ({ children }) => {
  return (
    <section
      className={`grid grid-cols-[1px_3fr_1px_minmax(400px,_2fr)] h-auto overflow-auto`}
    >
      {children ? children : 'The content of a screen goes here!'}
    </section>
  )
};


export default ScreenWrapper;