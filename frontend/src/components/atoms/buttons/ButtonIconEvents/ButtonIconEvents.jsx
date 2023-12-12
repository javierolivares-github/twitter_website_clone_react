import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import EventsIcon from '../../icons/EventsIcon';

const ButtonIconEvents = ({ isDarkTheme, onClick }) => {
  return (
    <button
      data-testid="button-events-container"
      className={`w-9 h-9 rounded-full border-none inline-flex justify-center items-center ${isDarkTheme ? 'hover:bg-transparent-10' : 'hover:bg-primary-98'}`}
      onClick={onClick}
    >
      <EventsIcon 
        fill={isDarkTheme ? '#FFFFFF' : '#1092EF'}
        size="18"
      />
    </button>
  )
};

export default ButtonIconEvents;

ButtonIconEvents.propTypes = {
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonIconEvents.defaultProps = {
  isDarkTheme: false,
  onClick: undefined,
}



