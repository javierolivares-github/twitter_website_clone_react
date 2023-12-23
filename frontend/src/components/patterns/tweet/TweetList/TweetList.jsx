import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'
import { statusTypes } from '../../../../data/statusTypes'
import Loading from '../../../atoms/states/Loading'
import Error from '../../../atoms/states/Error'
import TweetCard from '../TweetCard'

const TweetList = ({ status, data, isDarkTheme }) => {
  if (status === statusTypes.loading) {
    return <Loading color={isDarkTheme ? "text-gray-100" : "text-blue-600"}/>
  }

  if (status === statusTypes.error) {
    return <Error color={isDarkTheme ? "text-gray-100" : "text-red-600"}/>
  }

  return (
    <div className={`inline-flex flex-col gap-4`}>
      {data.map((tweet) => (
        <TweetCard
          state={tweet.state}
          infoImageUrl={tweet.infoImageUrl}
          username={tweet.username}
          account={tweet.account}
          verified={tweet.verified}
          timestamp={tweet.timestamp}
          content={tweet.content}
          hasImage={tweet.hasImage}
          contentImageUrl={tweet.contentImageUrl}
          commentAmount={tweet.commentAmount}
          retweetAmount={tweet.retweetAmount}
          likeAmount={tweet.likeAmount}
          isDarkTheme={isDarkTheme}
        />
      ))}
    </div>
  )
}

export default TweetList

TweetList.propTypes = {
  status: PropTypes.oneOf(["loading", "error", "loaded"]).isRequired,
  data: PropTypes.array,
  isDarkTheme: PropTypes.bool,
}