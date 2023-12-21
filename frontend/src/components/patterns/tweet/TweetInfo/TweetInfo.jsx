import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'
import WhoToFollowImage from '../../../atoms/images/WhoToFollowImage'
import LikeIcon from '../../../atoms/icons/LikeIcon'
import Body2 from '../../../atoms/headings/Body2'
import {statusTweetTypes} from '../../../../data/statusTweetTypes'

const TweetInfo = ({ isDarkTheme, tweetState }) => {
  return (
    <div className={`w-[12.5rem] flex items-center gap-2`}>
      {/* col1 */}
      <div>
        <WhoToFollowImage 
          imageUrl={`../../../../../assets/profile2.png`}
        />
      </div>

      {/* tweetState = none */}
      {tweetState === statusTweetTypes.none && <div></div>}

      {/* tweetState = liked */}
      {tweetState === statusTweetTypes.liked && 
        <div className={`flex items-center gap-2`} >
          <LikeIcon 
            fill={isDarkTheme ? "#FFFFFF" : "#666666"} 
            size={`24`} 
            isFilled={true} 
          />

          <Body2 
            color={isDarkTheme ? "text-gray-100" : "text-gray-40"} 
            weight={`font-bold`} 
          >
            Liked
          </Body2>
        </div>
      }

      {/* tweetState = retweeted */}
      {tweetState === statusTweetTypes.liked && 
        <div className={`flex items-center gap-2`} >
          <LikeIcon 
            fill={isDarkTheme ? "#FFFFFF" : "#666666"} 
            size={`24`} 
            isFilled={true} 
          />

          <Body2 
            color={isDarkTheme ? "text-gray-100" : "text-gray-40"} 
            weight={`font-bold`} 
          >
            Liked
          </Body2>
        </div>
      }
      
    </div>
  )
}

export default TweetInfo

TweetInfo.propTypes = {
  isDarkTheme: PropTypes.bool,
  tweetState: PropTypes.oneOf(["none", "liked", "retweeted", "followed", "promoted", "pinned"]),
}

TweetInfo.defaultProps = {
  isDarkTheme: false,
  tweetState: "liked",
}