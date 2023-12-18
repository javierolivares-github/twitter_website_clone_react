import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const SectionWrapper = ({ children }) => {
  return (
    <div className='flex flex-col gap-4'>
      {children ? children : 'The content of a section goes here!'}
    </div>
  )
};

export default SectionWrapper;

SectionWrapper.propTypes = {
  children: PropTypes.any,
}

SectionWrapper.defaultProps = {
  children: "This is a Section Wrapper!"
}