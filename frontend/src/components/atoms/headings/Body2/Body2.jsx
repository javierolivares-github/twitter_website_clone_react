import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const Body2 = ({ children, color, weight }) => {
  return (
    <p 
      data-testid='body2-container'
      className={`text-[0.875rem] leading-[0.875rem] tracking-normal 
      ${weight} ${color}`}
    >
      {children}
    </p>
  )
};

export default Body2;

Body2.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.oneOf(["font-bold", "font-semibold", "font-medium", "font-normal", "font-light"]),
}
