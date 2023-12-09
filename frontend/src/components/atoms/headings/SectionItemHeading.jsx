import React from 'react'

const SectionItemHeading = ({ isDarkTheme, children }) => {
  return (
    <h3 className={`font-bold text-[1rem] leading-4 tracking-[0.25px] ${isDarkTheme ? 'text-gray-100' : 'text-secondary-15'}`}>
      {children}
    </h3>
  )
}

export default SectionItemHeading