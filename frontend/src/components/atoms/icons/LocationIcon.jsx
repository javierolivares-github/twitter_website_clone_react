import React from 'react'

const LocationIcon = ({fillColor, size}) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={size ? size : ''}>
      <path d="M20.692 10.69C20.692 5.9 16.792 2 12 2C7.208 2 3.308 5.9 3.308 10.69C3.308 12.592 3.911 14.398 5.051 15.913L5.054 15.911L5.061 15.926C6.689 17.996 11.339 21.683 11.536 21.838C11.674 21.948 11.838 22.001 12.001 22.001C12.164 22.001 12.328 21.948 12.466 21.839C12.663 21.684 17.313 17.999 18.941 15.927L18.948 15.913L18.95 15.915C20.09 14.399 20.692 12.595 20.692 10.692V10.69ZM12 20.29C10.776 19.3 7.48 16.575 6.244 15.005C5.304 13.755 4.808 12.263 4.808 10.693C4.808 6.727 8.035 3.5 12 3.5C15.965 3.5 19.192 6.726 19.192 10.69C19.192 12.26 18.695 13.752 17.756 15.003C16.52 16.573 13.224 19.297 12 20.288V20.29ZM12 14.315C9.912 14.315 8.213 12.617 8.213 10.529C8.213 8.441 9.913 6.74 12 6.74C14.087 6.74 15.787 8.44 15.787 10.527C15.787 12.614 14.087 14.312 12 14.312V14.315ZM12 8.242C10.74 8.242 9.713 9.268 9.713 10.529C9.713 11.79 10.74 12.814 12 12.814C13.26 12.814 14.287 11.789 14.287 10.528C14.287 9.267 13.26 8.24 12 8.24V8.242Z" fill="black" className={fillColor}/>
    </svg>
  )
}

export default LocationIcon