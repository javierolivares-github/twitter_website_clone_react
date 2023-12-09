import React from 'react';

const Headline1 = ({ children, color }) => {
  return (
    <h2 className={`text-[1.25rem] leading-[1.25rem] tracking-normal font-bold ${color}`}>
      {children}
    </h2>
  )
};

export default Headline1;