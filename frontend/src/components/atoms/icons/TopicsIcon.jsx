import React from 'react'

const TopicsIcon = ({fillColor, size}) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={size ? size : ''}>
      <path d="M12.003 23.274C11.92 23.274 11.836 23.26 11.755 23.232C11.455 23.127 11.253 22.842 11.253 22.524V18.384C9.17299 18.212 7.23998 17.318 5.74698 15.824C2.29698 12.374 2.29698 6.762 5.74698 3.314C9.19699 -0.134001 14.809 -0.136001 18.259 3.314C21.355 6.411 21.709 11.384 19.079 14.879L12.589 22.991C12.443 23.173 12.226 23.273 12.002 23.273L12.003 23.274ZM12.002 2.224H12.003H12.002C10.121 2.224 8.23998 2.941 6.80798 4.374C3.94398 7.237 3.94398 11.898 6.80798 14.764C8.19598 16.151 10.041 16.914 12.003 16.914C12.417 16.914 12.753 17.251 12.753 17.664V20.384L17.895 13.959C20.065 11.074 19.771 6.945 17.199 4.372C15.765 2.942 13.883 2.224 12.002 2.224ZM12.5 11.938H8.44998C8.03698 11.938 7.69998 11.602 7.69998 11.188C7.69998 10.774 8.03698 10.438 8.44998 10.438H12.5C12.914 10.438 13.25 10.774 13.25 11.188C13.25 11.602 12.914 11.938 12.5 11.938ZM15.55 8.7H8.44998C8.03698 8.7 7.69998 8.363 7.69998 7.95C7.69998 7.537 8.03698 7.2 8.44998 7.2H15.55C15.963 7.2 16.3 7.535 16.3 7.95C16.3 8.365 15.963 8.7 15.55 8.7Z" fill="black" className={fillColor}/>
    </svg>  
  )
}

export default TopicsIcon