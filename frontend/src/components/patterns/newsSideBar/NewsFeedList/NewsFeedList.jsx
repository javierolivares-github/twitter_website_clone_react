import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'
import { statusTypes } from '../../../../statusTypes'
import Loading from '../../../atoms/states/Loading'
import Error from '../../../atoms/states/Error'
import NewsFeedListItem from '../NewsFeedListItem'

const NewsFeedList = ({ status, data, isDarkTheme }) => {
  if (status === statusTypes.loading) {
    return <Loading />
  }

  if (status === status.error) {
    return <Error />
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
}
