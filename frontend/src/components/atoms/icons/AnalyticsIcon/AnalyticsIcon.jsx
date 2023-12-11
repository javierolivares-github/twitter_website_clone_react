import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';

const AnalyticsIcon = ({ isFilled, fill, size }) => {

  const svgOutline = () => {
    return (
      <svg data-testid="analyticsIcon-outline" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path data-testid="analyticsIcon-outline-content" d="M20.223 9.16H18.888C18.903 9.07 18.916 8.978 18.916 8.883V6.57C18.916 5.59 18.119 4.793 17.138 4.793H3.5V3.358C3.5 2.944 3.164 2.608 2.75 2.608C2.336 2.608 2 2.944 2 3.358V20.83C2 21.245 2.336 21.58 2.75 21.58C3.164 21.58 3.5 21.245 3.5 20.83V19.396H14.056C15.036 19.396 15.834 18.599 15.834 17.619V15.306C15.834 15.211 15.82 15.119 15.806 15.028H20.223C21.203 15.028 22.001 14.23 22.001 13.25V10.94C22.001 9.957 21.204 9.16 20.223 9.16ZM17.14 6.293C17.292 6.293 17.417 6.417 17.417 6.57V8.88C17.417 9.034 17.292 9.16 17.139 9.16H3.5V6.29H17.14V6.293ZM14.333 15.307V17.619C14.333 17.772 14.208 17.896 14.055 17.896H3.5V15.028H14.056C14.209 15.028 14.333 15.154 14.333 15.308V15.307ZM20.5 13.25C20.5 13.403 20.375 13.527 20.222 13.527H3.5V10.66H20.222C20.375 10.66 20.5 10.784 20.5 10.937V13.25Z" fill={fill}/>
      </svg>
    )
  }

  const svgFilled = () => {
    return (
      <svg data-testid="analyticsIcon-filled" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path data-testid="analyticsIcon-filled-content" d="M12 22C11.586 22 11.25 21.664 11.25 21.25V2.75C11.25 2.336 11.586 2 12 2C12.414 2 12.75 2.336 12.75 2.75V21.25C12.75 21.664 12.414 22 12 22ZM17.14 22C16.725 22 16.39 21.664 16.39 21.25V7.89C16.39 7.475 16.725 7.14 17.14 7.14C17.555 7.14 17.89 7.475 17.89 7.89V21.25C17.89 21.664 17.553 22 17.14 22ZM6.85999 22C6.44699 22 6.10999 21.664 6.10999 21.25V10.973C6.10999 10.559 6.44699 10.223 6.85999 10.223C7.27299 10.223 7.60999 10.559 7.60999 10.973V21.25C7.60999 21.664 7.27499 22 6.85999 22Z" fill={fill}/>
      </svg>
    )
  }
  
  return (
    <>
      {isFilled ? svgFilled() : svgOutline()}
    </>
  )
}

export default AnalyticsIcon;

AnalyticsIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOf(["16", "20", "24", "28", "32"]),
  isFilled: PropTypes.bool,
}

AnalyticsIcon.defaultProps = {
  fill: '#000001',
  size: "16",
  isFilled: false,
}