import React from 'react'

const CalendarIcon = ({ fillColor, size }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={size}>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 1C8.55228 1 9 1.44772 9 2V3H15V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V3H19C20.6569 3 22 4.34315 22 6V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V6C2 4.34315 3.34315 3 5 3H7V2C7 1.44772 7.44772 1 8 1ZM7 5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44771 19.5523 5 19 5H17V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V5H9V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V5ZM20 11H4V20C4 20.5523 4.44771 21 5 21H19C19.5523 21 20 20.5523 20 20V11Z" fill="black" className={fillColor}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10 14C10 13.4477 10.4477 13 11 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H11C10.4477 15 10 14.5523 10 14Z" fill="black" className={fillColor}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 18C6 17.4477 6.44772 17 7 17H13C13.5523 17 14 17.4477 14 18C14 18.5523 13.5523 19 13 19H7C6.44772 19 6 18.5523 6 18Z" fill="black" className={fillColor}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 14C6 13.4477 6.44772 13 7 13H7.01C7.56228 13 8.01 13.4477 8.01 14C8.01 14.5523 7.56228 15 7.01 15H7C6.44772 15 6 14.5523 6 14Z" fill="black" className={fillColor}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 18C16 17.4477 16.4477 17 17 17H17.01C17.5623 17 18.01 17.4477 18.01 18C18.01 18.5523 17.5623 19 17.01 19H17C16.4477 19 16 18.5523 16 18Z" fill="black" className={fillColor}/>
    </svg>
  )
}

export default CalendarIcon