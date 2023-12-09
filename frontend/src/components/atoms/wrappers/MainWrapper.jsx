import React from 'react';


const MainWrapper = ({ children }) => {
  return (
    <div className='flex flex-col p-4 h-[2000px] overflow-auto'>
      {children ? children : 'A main section goes here!'}
    </div>
  )
};


export default MainWrapper;