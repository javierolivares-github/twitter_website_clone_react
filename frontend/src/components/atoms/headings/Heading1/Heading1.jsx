import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const Heading1 = ({ children, weight, color }) => {
  return (
    <h2 
      data-testid='heading1-container'
      className={`text-[1.25rem] leading-[1.25rem] tracking-normal ${weight} ${color}`}
    >
      {children}
    </h2>
  )
};

export default Heading1;

Heading1.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.oneOf(["font-bold", "font-semibold", "font-medium", "font-normal", "font-light"]),
}

Heading1.defaultProps = {
  children: 'This is a Heading2',
  color: "text-secondary-15",
  weight: 'font-bold',
}
