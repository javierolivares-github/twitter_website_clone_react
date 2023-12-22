import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'
import Heading1 from '../../../atoms/headings/Heading1'
import OfficialIcon from '../../../atoms/icons/OfficialIcon'
import Body2 from '../../../atoms/headings/Body2'
import ButtonIconMenu from '../../../atoms/buttons/ButtonIconMenu'

const TweetUsername = ({ username, account, verified, timestamp, isDarkTheme, handleMenu }) => {
  return (
    <div className={`max-w-[568px] flex justify-between items-center `}>
      
      {/* col1 */}
      <div className={`inline-flex items-center gap-2`}>
        <Heading1 
          color={isDarkTheme ? "text-gray-100" : "text-secondary-15"} 
          weight="font-bold"
        >
          {username}
        </Heading1>

        {verified && 
          <OfficialIcon fill={isDarkTheme ? "#70BEF5" : "#1092EF"} size="24" />
        }

        <Body2 color={isDarkTheme ? "text-gray-100" : "text-secondary-50"} weight="font-normal">
          {account}
        </Body2>

        <Body2 color={isDarkTheme ? "text-gray-100" : "text-secondary-50"} weight="font-normal">
          {timestamp}
        </Body2>
      </div>

      {/* col2 */}
      <ButtonIconMenu isDarkTheme={isDarkTheme} onClick={handleMenu} />

    </div>
  )
}

export default TweetUsername

TweetUsername.propTypes = {
  username: PropTypes.string.isRequired, 
  account: PropTypes.string.isRequired, 
  verified: PropTypes.bool, 
  timestamp: PropTypes.string.isRequired, 
  isDarkTheme: PropTypes.bool,
  handleMenu: PropTypes.func,
}

TweetUsername.defaultProps = {
  username: "First name", 
  account: "@username", 
  verified: false, 
  timestamp: "5h ago", 
  isDarkTheme: false,
  handleMenu: undefined,
}