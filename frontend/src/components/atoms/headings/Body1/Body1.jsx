import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const Body1 = ({ children, color, weight }) => {
  return (
    <p 
      data-testid='body1-container'
      className={`text-[0.875rem] leading-[1rem] tracking-normal 
      ${weight} ${color}`}
    >
      {children}
    </p>
  )
};

export default Body1;

Body1.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.oneOf(["font-bold", "font-semibold", "font-medium", "font-normal", "font-light"]),
}
