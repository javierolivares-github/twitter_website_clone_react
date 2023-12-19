import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'
import { statusTypes } from '../../../../data/statusTypes'
import Loading from '../../../atoms/states/Loading'
import Error from '../../../atoms/states/Error'
import NewsFeedListItem from '../NewsFeedListItem'

const NewsFeedList = ({ status, data, isDarkTheme }) => {
  if (status === statusTypes.loading) {
    return <Loading color={isDarkTheme ? "text-gray-100" : "text-blue-600"}/>
  }

  if (status === statusTypes.error) {
    return <Error color={isDarkTheme ? "text-gray-100" : "text-red-600"}/>
  }

  return (
    <div
      data-testid="news-feed-list"
      className={`flex flex-col gap-4`}
    >
      {data.map( (news) => (
        <NewsFeedListItem
          key={news.id} 
          username={news.username}
          timestamp={news.timestamp}
          content={news.content}
          trending={news.trending}
          hashtag={news.hashtag}
          imageUrl={news.imageUrl}
          isDarkTheme={isDarkTheme}
        />
      ))}
    </div>    
  )
}

export default NewsFeedList

NewsFeedList.propTypes = {
  status: PropTypes.oneOf(["loading", "error", "loaded"]).isRequired,
  data: PropTypes.array,
  isDarkTheme: PropTypes.bool,
}
