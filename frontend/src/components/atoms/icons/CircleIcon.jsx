import React from 'react'

const CircleIcon = ({ fillColor, size }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={size}>
      <circle cx="12" cy="12" r="11" fill="black" className={fillColor}/>
    </svg>
  )
}

export default CircleIcon