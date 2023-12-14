import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const Heading2 = ({ children, weight, color }) => {
  return (
    <h3 
      data-testid='heading2-container'
      className={`text-[1rem] leading-[1rem] tracking-normal ${weight} ${color}`
    }>
      {children}
    </h3>
  )
};

export default Heading2;

Heading2.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.oneOf(["font-bold", "font-semibold", "font-medium", "font-normal", "font-light"]),
}

Heading2.defaultProps = {
  children: "This is a Heading!",
  color: "text-secondary-15",
  weight: "font-semibold",
}
