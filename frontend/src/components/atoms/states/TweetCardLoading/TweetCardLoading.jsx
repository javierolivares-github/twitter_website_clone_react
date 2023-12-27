import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'
import '../../../../css/placeholderAnimation.css'

const TweetCardLoading = ({ isDarkTheme }) => {
  return (
    <div
      data-testid="tweet-card-loading"
      className={`max-w-[38.75rem] w-full flex flex-col gap-2 p-4`}
    >
      {/* tweet-info */}
      <div className={`flex items-center gap-2 `}>
        {/* circle */}
        <div className={`w-12 h-12 rounded-full
        ${isDarkTheme ? "placeholder-animation-dark" : "placeholder-animation"}`}></div>
      </div>

      {/* tweet-username */}
      <div className={`flex items-center gap-4`}>
        <div className={`inline-flex items-center gap-2`}>
          {/* rectangle-1 */}
          <div className={`w-[6rem] h-5 rounded-2xl
          ${isDarkTheme ? "placeholder-animation-dark" : "placeholder-animation"}`}></div>

          {/* rectangle-2 */}
          <div className={`w-[4.5rem] h-[0.875rem] rounded-2xl
          ${isDarkTheme ? "placeholder-animation-dark" : "placeholder-animation"}`}></div>

          {/* rectangle-3 */}
          <div className={`w-[3rem] h-[0.875rem] rounded-2xl
          ${isDarkTheme ? "placeholder-animation-dark" : "placeholder-animation"}`}></div>
        </div>
      </div>

      {/* tweet-content */}
      <div className={`flex items-center gap-2`}>
        <div className={`flex flex-col gap-4 flex-grow`}>
          {/* rectangle-1 */}
          <div className={`w-[20rem] h-[0.875rem] rounded-2xl
          ${isDarkTheme ? "placeholder-animation-dark" : "placeholder-animation"}`}></div>

          {/* content-image */}
          <div className={`w-full h-[12.625rem] rounded-2xl
          ${isDarkTheme ? "placeholder-animation-dark" : "placeholder-animation"}`}></div>
        </div>
      </div>

      {/* tweet-analytics */}
      <div className={`flex items-center gap-2`}>
        {/* rectangle-1 */}
        <div className={`w-12 h-6 rounded-2xl
        ${isDarkTheme ? "placeholder-animation-dark" : "placeholder-animation"}`}></div>
        {/* rectangle-2 */}
        <div className={`w-12 h-6 rounded-2xl
        ${isDarkTheme ? "placeholder-animation-dark" : "placeholder-animation"}`}></div>
        {/* rectangle-3 */}
        <div className={`w-12 h-6 rounded-2xl
        ${isDarkTheme ? "placeholder-animation-dark" : "placeholder-animation"}`}></div>
        {/* rectangle-4 */}
        <div className={`w-12 h-6 rounded-2xl
        ${isDarkTheme ? "placeholder-animation-dark" : "placeholder-animation"}`}></div>
      </div>
    
    </div>
  )
}

export default TweetCardLoading

TweetCardLoading.propTypes = {
  isDarkTheme: PropTypes.bool
}

TweetCardLoading.defaultProps = {
  isDarkTheme: false,
}