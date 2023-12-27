import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'
import NewsFeedItemLoading from '../../../atoms/states/NewsFeedItemLoading'

const NewsFeedListLoading = ({ isDarkTheme }) => {
  let news = [1, 2, 3, 4, 5, 6 ]

  return (
    <div
      data-testid="news-feed-list-loading"
      className={`flex flex-col gap-4`}
    >
      {news.map((news, index) => (
        <NewsFeedItemLoading key={index} isDarkTheme={isDarkTheme} />
      ))}
    </div>    
  )
}

export default NewsFeedListLoading

NewsFeedListLoading.propTypes = {
  isDarkTheme: PropTypes.bool,
}
