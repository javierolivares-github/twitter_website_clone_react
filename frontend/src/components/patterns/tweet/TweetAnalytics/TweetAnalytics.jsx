import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import IconButtonComment from '../../../atoms/buttons/IconButtonComment';
import IconButtonRetweet from '../../../atoms/buttons/IconButtonRetweet';
import IconButtonLike from '../../../atoms/buttons/IconButtonLike';
import IconButtonShare from '../../../atoms/buttons/IconButtonShare';
import Body2 from '../../../atoms/headings/Body2';

const TweetAnalytics = ({ isDarkTheme, handleComment, handleRetweet, handleShare, handleLike, commentAmount, retweetAmount, likeAmount }) => {
  return (
    <div data-testid="tweet-analytics" className="inline-flex items-center gap-4">

      {/* comments */}
      <div className='inline-flex items-center gap-1'>
        <IconButtonComment isDarkTheme={isDarkTheme} onClick={handleComment} />
        <Body2 color={isDarkTheme ? "text-gray-100" : "text-gray-40"} weight={`font-regular`}>{commentAmount}</Body2>
      </div>

      {/* retweets */}
      <div className='inline-flex items-center gap-1'>
        <IconButtonRetweet isDarkTheme={isDarkTheme} onClick={handleRetweet} />
        <Body2 color={isDarkTheme ? "text-gray-100" : "text-gray-40"} weight={`font-regular`}>{retweetAmount}</Body2>
      </div>

      {/* likes */}
      <div className='inline-flex items-center gap-1'>
        <IconButtonLike isDarkTheme={isDarkTheme} onClick={handleLike} />
        <Body2 color={isDarkTheme ? "text-gray-100" : "text-gray-40"} weight={`font-regular`}>{likeAmount}</Body2>
      </div>

      {/* share */}
      <div className='inline-flex items-center'>
        <IconButtonShare isDarkTheme={isDarkTheme} onClick={handleShare} />
      </div>

    </div>
  )
}

export default TweetAnalytics

TweetAnalytics.propTypes = {
  isDarkTheme: PropTypes.bool,
  commentAmount: PropTypes.number,
  retweetAmount: PropTypes.number,
  likeAmount: PropTypes.number,
  handleComment: PropTypes.func,
  handleRetweet: PropTypes.func,
  handleLike: PropTypes.func,
  handleShare: PropTypes.func,
}

TweetAnalytics.defaultProps = {
  isDarkTheme: false,
  commentAmount: 200,
  retweetAmount: 200,
  likeAmount: 200,
  handleComment: undefined,
  handleRetweet: undefined,
  handleLike: undefined,
  handleShare: undefined,
}