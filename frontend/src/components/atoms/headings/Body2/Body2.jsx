import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const Body2 = ({ children, isDarkTheme, weight }) => {
  return (
    <p 
      data-testid='body2-container'
      className={`text-[0.875rem] leading-[0.875rem] tracking-normal ${weight} ${isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}`
    }>
      {children}
    </p>
  )
};

export default Body2;

Body2.propTypes = {
  children: PropTypes.string,
  isDarkTheme: PropTypes.bool,
  weight: PropTypes.oneOf(["font-bold", "font-semibold", "font-medium", "font-normal", "font-light"]),
}
