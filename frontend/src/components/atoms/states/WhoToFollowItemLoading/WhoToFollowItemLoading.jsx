import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'
import '../../../../css/placeholderAnimation.css'

const WhoToFollowItemLoading = ({ isDarkTheme }) => {
  return (
    <div
      data-testid="news-feed-item-loading"
      className={`max-w-[28.75rem] w-full h-[5rem] rounded-2xl
      ${isDarkTheme ? "placeholder-animation-dark" : "placeholder-animation"}`}
    ></div>
  )
}

export default WhoToFollowItemLoading

WhoToFollowItemLoading.propTypes = {
  isDarkTheme: PropTypes.bool
}

WhoToFollowItemLoading.defaultProps = {
  isDarkTheme: false,
}