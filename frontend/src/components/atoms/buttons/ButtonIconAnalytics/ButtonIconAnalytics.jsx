import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import AnalyticsIcon from '../../icons/AnalyticsIcon';

const ButtonIconAnalytics = ({ isDarkTheme, onClick }) => {
  return (
    <button
      data-testid="button-analytics-container"
      className={`w-9 h-9 rounded-full border-none inline-flex justify-center items-center ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
      onClick={onClick}
    >
      <AnalyticsIcon
        fill={isDarkTheme ? '#FFFFFF' : '#1092EF'}
        size="18"
      />
    </button>
  )
};

export default ButtonIconAnalytics;

ButtonIconAnalytics.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonIconAnalytics.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
}



