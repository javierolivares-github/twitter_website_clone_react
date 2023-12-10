import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const Heading2 = ({ children, isDarkTheme, weight }) => {
  return (
    <h3 
      data-testid='heading2-container'
      className={`text-[1rem] leading-[1rem] tracking-normal ${weight} ${isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}`
    }>
      {children}
    </h3>
  )
};

export default Heading2;

Heading2.propTypes = {
  children: PropTypes.string,
  isDarkTheme: PropTypes.bool,
  weight: PropTypes.oneOf(["font-bold", "font-semibold", "font-medium", "font-normal", "font-light"]),
}
