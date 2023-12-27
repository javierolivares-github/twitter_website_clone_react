import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'
import WhoToFollowItemLoading from '../../../atoms/states/WhoToFollowItemLoading'

const WhoToFollowListLoading = ({ isDarkTheme }) => {
  let news = [1, 2, 3, 4, 5 ]

  return (
    <div
      data-testid="who-to-follow-list-loading"
      className={`flex flex-col gap-4`}
    >
      {news.map((news, index) => (
        <WhoToFollowItemLoading key={index} isDarkTheme={isDarkTheme} />
      ))}
    </div>    
  )
}

export default WhoToFollowListLoading

WhoToFollowListLoading.propTypes = {
  isDarkTheme: PropTypes.bool,
}
