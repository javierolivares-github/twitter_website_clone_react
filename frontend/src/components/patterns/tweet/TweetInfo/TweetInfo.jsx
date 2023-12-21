import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'
import WhoToFollowImage from '../../../atoms/images/WhoToFollowImage'
import LikeIcon from '../../../atoms/icons/LikeIcon'
import RetweetIcon from '../../../atoms/icons/RetweetIcon'
import ProfileIcon from '../../../atoms/icons/ProfileIcon'
import AdsIcon from '../../../atoms/icons/AdsIcon'
import PinIcon from '../../../atoms/icons/PinIcon'
import Body2 from '../../../atoms/headings/Body2'
import {tweetTypes} from '../../../../data/tweetTypes'

const TweetInfo = ({ isDarkTheme, imageUrl, state }) => {
  return (
    <div className={`w-[12.5rem] flex items-center gap-4`}>
      {/* col1 */}
      <div>
        <WhoToFollowImage 
          imageUrl={imageUrl}
        />
      </div>

      {/* state = none */}
      {state === tweetTypes.none && <div></div>}

      {/* state = liked */}
      {state === tweetTypes.liked && 
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

      {/* state = retweeted */}
      {state === tweetTypes.retweeted && 
        <div className={`flex items-center gap-2`} >
          <RetweetIcon
            fill={isDarkTheme ? "#FFFFFF" : "#666666"} 
            size={`24`} 
            isFilled={true} 
          />

          <Body2 
            color={isDarkTheme ? "text-gray-100" : "text-gray-40"} 
            weight={`font-bold`} 
          >
            Retweeted
          </Body2>
        </div>
      }

      {/* state = followed */}
      {state === tweetTypes.followed && 
        <div className={`flex items-center gap-2`} >
          <ProfileIcon
            fill={isDarkTheme ? "#FFFFFF" : "#666666"} 
            size={`24`} 
            isFilled={true} 
          />

          <Body2 
            color={isDarkTheme ? "text-gray-100" : "text-gray-40"} 
            weight={`font-bold`} 
          >
            Has followed
          </Body2>
        </div>
      }

      {/* state = promoted */}
      {state === tweetTypes.promoted && 
        <div className={`flex items-center gap-2`} >
          <AdsIcon
            fill={isDarkTheme ? "#FFFFFF" : "#666666"} 
            size={`24`} 
            isFilled={true} 
          />

          <Body2 
            color={isDarkTheme ? "text-gray-100" : "text-gray-40"} 
            weight={`font-bold`} 
          >
            Promoted
          </Body2>
        </div>
      }

      {/* state = pinned */}
      {state === tweetTypes.pinned && 
        <div className={`flex items-center gap-2`} >
          <PinIcon
            fill={isDarkTheme ? "#FFFFFF" : "#666666"} 
            size={`24`} 
            isFilled={true} 
          />

          <Body2 
            color={isDarkTheme ? "text-gray-100" : "text-gray-40"} 
            weight={`font-bold`} 
          >
            Pinned
          </Body2>
        </div>
      }
      
    </div>
  )
}

export default TweetInfo

TweetInfo.propTypes = {
  isDarkTheme: PropTypes.bool,
  state: PropTypes.oneOf(["none", "liked", "retweeted", "followed", "promoted", "pinned"]),
  imageUrl: PropTypes.string,
}

TweetInfo.defaultProps = {
  isDarkTheme: false,
  state: "none",
  imageUrl: "../../../../../assets/profile2.png",
}