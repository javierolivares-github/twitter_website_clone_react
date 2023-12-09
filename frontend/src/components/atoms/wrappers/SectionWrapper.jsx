import React from 'react';

const SectionWrapper = ({ children }) => {
  return (
    <div className='flex flex-col gap-4'>
      {children ? children : 'The content of a section goes here!'}
    </div>
  )
};

export default SectionWrapper;