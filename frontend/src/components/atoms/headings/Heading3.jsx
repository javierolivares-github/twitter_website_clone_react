import React from 'react';


const Heading3 = ({ children, weight, color }) => {
  return (
    <h2 className={`text-[1rem] leading-[1rem] tracking-tight ${weight} ${color}`}>{children}</h2>
  )
};


export default Heading3;