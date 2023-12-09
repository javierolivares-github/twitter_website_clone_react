import React from 'react';


const AsideWrapper = ({ children }) => {
  return (
    <div className={`flex flex-col gap-8 p-4 h-[1000px] overflow-auto`}>
      {children ? children : 'A aside section goes here!'}
    </div>
  )
};


export default AsideWrapper;