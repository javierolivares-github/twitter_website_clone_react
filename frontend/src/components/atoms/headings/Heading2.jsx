import React from 'react';


const Heading2 = ({ children, weight, color }) => {
  return (
    <h2 className={`text-[1.25rem] leading-[1.25rem] tracking-normal ${weight} ${color}`}>{children}</h2>
  )
};


export default Heading2