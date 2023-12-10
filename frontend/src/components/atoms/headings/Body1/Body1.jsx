import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const Body1 = ({ children, isDarkTheme, weight }) => {
  return (
    <p 
      data-testid='body1-container'
      className={`text-[0.875rem] leading-[1rem] tracking-normal ${weight} ${isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}`
    }>
      {children}
    </p>
  )
};

export default Body1;

Body1.propTypes = {
  children: PropTypes.string,
  isDarkTheme: PropTypes.bool,
  weight: PropTypes.oneOf(["font-bold", "font-semibold", "font-medium", "font-normal", "font-light"]),
}
