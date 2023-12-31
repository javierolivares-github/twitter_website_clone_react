import React from 'react'

const MessagesIcon = ({ isFilled, fillColor, size }) => {

  const svgOutline = () => {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={size ? size : ''}>
        <path d="M19.25 3.01801H4.75C3.233 3.01801 2 4.25201 2 5.77001V18.265C2 19.783 3.233 21.018 4.75 21.018H19.25C20.767 21.018 22 19.783 22 18.265V5.77001C22 4.25201 20.767 3.01801 19.25 3.01801ZM4.75 4.51801H19.25C19.94 4.51801 20.5 5.07801 20.5 5.76801V6.48201L12.45 11.849C12.177 12.029 11.824 12.031 11.55 11.847L3.5 6.48201V5.76801C3.5 5.07801 4.06 4.51801 4.75 4.51801ZM19.25 19.516H4.75C4.06 19.516 3.5 18.956 3.5 18.266V8.24001L10.74 13.07C11.123 13.326 11.562 13.454 12 13.454C12.44 13.454 12.877 13.326 13.26 13.071L20.5 8.24101V18.263C20.5 18.953 19.94 19.513 19.25 19.513V19.516Z" fill="black" className={fillColor}/>
      </svg>
    )
  }

  const svgFilled = () => {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={size ? size : ''}>
        <path d="M11.55 12.082C11.823 12.264 12.177 12.264 12.45 12.082L22 5.716V5.5C22 4.26 20.99 3.25 19.75 3.25H4.25C3.01 3.25 2 4.26 2 5.5V5.697L11.55 12.082Z" fill="black" className={fillColor}/>
        <path d="M13.26 13.295C12.877 13.55 12.44 13.677 12 13.677C11.56 13.677 11.123 13.55 10.74 13.294L2 7.452V19.122C2 20.362 3.01 21.372 4.25 21.372H19.75C20.99 21.372 22 20.362 22 19.122V7.47L13.26 13.293V13.295Z" fill="black" className={fillColor}/>
      </svg>
    )
  }
  
  return (
    <>
      {isFilled ? svgFilled() : svgOutline()}
    </>
  )
}

export default MessagesIcon;