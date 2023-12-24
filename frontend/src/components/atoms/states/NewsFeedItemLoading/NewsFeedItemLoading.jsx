import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'
import '../../../../css/placeholderAnimation.css'

const NewsFeedItemLoading = ({ isDarkTheme }) => {
  return (
    <div
      data-testid="news-feed-item-loading"
      className={`max-w-[28.75rem] w-full h-[6.5rem] rounded-2xl
      ${isDarkTheme ? "placeholder-animation-dark" : "placeholder-animation"}`}
    ></div>
  )
}

export default NewsFeedItemLoading

NewsFeedItemLoading.propTypes = {
  isDarkTheme: PropTypes.bool
}

NewsFeedItemLoading.defaultProps = {
  isDarkTheme: false,
}