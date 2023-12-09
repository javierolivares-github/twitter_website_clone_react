import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const Heading1 = ({ children, isDarkTheme, weight }) => {
  return (
    <h2 
      data-testid='heading1-container'
      className={`heading1 text-[1.25rem] leading-[1.25rem] tracking-normal ${weight} ${isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}`
    }>
      {children}
    </h2>
  )
};

export default Heading1;

Heading1.propTypes = {
  children: PropTypes.string,
  isDarkTheme: PropTypes.bool,
  weight: PropTypes.oneOf(["font-bold", "font-semibold", "font-medium", "font-normal", "font-light"]),
}
