import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'
import MenuIcon from '../../icons/MenuIcon'
import './style.css'

const ProfileLoading = ({ isDarkTheme }) => {
  return (
    <div
      data-testid="profile-loading"
      className={`inline-flex rounded-full items-center gap-4 p-4`}
    >
      {/* circle */}
      <div className={`w-10 h-10 rounded-full
      ${isDarkTheme ? "placeholder-animation-dark" : "placeholder-animation"}`}></div>

      {/* texts */}
      <div className='inline-flex flex-col gap-1'>
        <div className={`w-[4.75rem] h-4 rounded-2xl 
        ${isDarkTheme ? "placeholder-animation-dark" : "placeholder-animation"}`}></div>

        <div className={`w-16 h-[0.875rem] rounded-2xl
        ${isDarkTheme ? "placeholder-animation-dark" : "placeholder-animation"}`}></div>
      </div>

      {/* icon */}
      <MenuIcon fill={isDarkTheme ? "rgba(245, 251, 254, 0.1)" : "#E7E7E7"} size="24"/>

    </div>
  )
}

export default ProfileLoading

ProfileLoading.propTypes = {
  isDarkTheme: PropTypes.bool
}

ProfileLoading.defaultProps = {
  isDarkTheme: false,
}