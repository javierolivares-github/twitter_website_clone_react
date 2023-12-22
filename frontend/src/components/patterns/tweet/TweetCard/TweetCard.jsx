import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'
import TweetInfo from '../TweetInfo'
import TweetUsername from '../TweetUsername'
import TweetContent from '../TweetContent'
import TweetAnalytics from '../TweetAnalytics'

const TweetCard = ({ isDarkTheme, state, infoImageUrl, username, account, verified, timestamp, handleMenu, content, hasImage, contentImageUrl, commentAmount, retweetAmount, likeAmount, handleComment, handleRetweet, handleLike, handleShare }) => {
  return (
    <div className={`max-w-[620px] flex flex-col gap-2 p-4
    ${isDarkTheme ? "bg-secondary-15" : "bg-gray-100"}`}
    >
      <TweetInfo isDarkTheme={isDarkTheme} state={state} imageUrl={infoImageUrl} />
      <TweetUsername username={username} account={account} verified={verified} timestamp={timestamp} isDarkTheme={isDarkTheme} handleMenu={handleMenu} />
      <TweetContent content={content} hasImage={hasImage} imageUrl={contentImageUrl} isDarkTheme={isDarkTheme} />
      <TweetAnalytics commentAmount={commentAmount} retweetAmount={retweetAmount} likeAmount={likeAmount} handleComment={handleComment} handleRetweet={handleRetweet} handleLike={handleLike} handleShare={handleShare} isDarkTheme={isDarkTheme} />
    </div>
  )
}

export default TweetCard

TweetCard.propTypes = {
  isDarkTheme: PropTypes.bool,
  state: PropTypes.oneOf(["none", "liked", "retweeted", "followed", "promoted", "pinned"]),
  infoImageUrl: PropTypes.string,
  username: PropTypes.string,
  account: PropTypes.string,
  verified: PropTypes.bool,
  timestamp: PropTypes.string,
  content: PropTypes.string,
  hasImage: PropTypes.bool,
  contentImageUrl: PropTypes.string,
  commentAmount: PropTypes.number,
  retweetAmount: PropTypes.number,
  likeAmount: PropTypes.number,
  handleComment: PropTypes.func,
  handleRetweet: PropTypes.func,
  handleLike: PropTypes.func,
  handleShare: PropTypes.func,
  handleMenu: PropTypes.func,
}

