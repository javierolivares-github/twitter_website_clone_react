import React from 'react';
import PropTypes from 'prop-types';
import '../../../../index.css';
import WhoToFollowImage from '../../../atoms/images/WhoToFollowImage';
import Heading2 from '../../../atoms/headings/Heading2';
import OfficialIcon from '../../../atoms/icons/OfficialIcon';
import Body2 from '../../../atoms/headings/Body2';
import TweetButton from '../../../atoms/buttons/TweetButton';

const WhoToFollowListItem = ({ isDarkTheme, imageUrl, username, account, onClick  }) => {
  return (
    <div 
      data-testid="follow-item"
      className={`max-w-[460px] w-full rounded-[16px] flex flex-col
      item-start justify-center p-4
      ${!isDarkTheme && "bg-secondary-98 hover:bg-secondary-95"}
      ${isDarkTheme && "bg-transparent-10 hover:bg-transparent-25"}    
      `}
    >
      <div className={`flex justify-between items-center`}>
        {/* Col1 */}
        <div className={`flex gap-2`}>
          {/* Image */}
          <div>
            <WhoToFollowImage imageUrl={imageUrl} />
          </div>
          {/* Texts */}
          <div className={`flex flex-col`}>
            <div className={`flex items-center gap-2`}>
              <Heading2
                weight={`font-bold`}
                color={`
                ${!isDarkTheme && "text-secondary-15"}
                ${isDarkTheme && "text-gray-100"} 
                `}
              >
                {username}
              </Heading2>
              <OfficialIcon 
                size={`24`}
                fill={`
                ${!isDarkTheme && "#1092EF"}
                ${isDarkTheme && "#70BEF5"}
                `} 
              />
            </div>
            <Body2
              weight={`font-normal`}
              color={`
              ${!isDarkTheme && "text-secondary-50"}
              ${isDarkTheme && "text-gray-95"} 
              `}
            >
              {account}
            </Body2>
          </div>
        </div>
        {/* Col2 */}
        {/* Button */}
        <TweetButton
          onClick={onClick}
          size={`small`}
          isDarkTheme={isDarkTheme}
        >
          Follow
        </TweetButton>
      </div>
    </div>
  )
}

export default WhoToFollowListItem;

WhoToFollowListItem.propTypes = {
  isDarkTheme: PropTypes.bool, 
  imageUrl: PropTypes.string, 
  username: PropTypes.string, 
  account: PropTypes.string,
  onClick: PropTypes.func,
}

WhoToFollowListItem.defaultProps = {
  isDarkTheme: false, 
  imageUrl: "../../../../../assets/profile1.png", 
  username: "First name", 
  account: "@username",
  onClick: undefined,
}