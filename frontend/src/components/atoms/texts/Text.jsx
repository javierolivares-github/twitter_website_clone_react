import React from 'react';

const Text = ({ children, weight, color }) => {
  return (
    <span className={`text-[0.875rem] leading-[1.875rem] tracking-tight ${weight} ${color}`}>{children}</span>
  )
};

export default Text;