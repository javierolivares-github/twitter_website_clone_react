import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'
import Heading1 from '../../../atoms/headings/Heading1'
import ButtonIconStar from '../../../atoms/buttons/ButtonIconStar'
import WhoToFollowImage from '../../../atoms/images/WhoToFollowImage'
import ButtonIconImage from '../../../atoms/buttons/ButtonIconImage'
import ButtonIconGif from '../../../atoms/buttons/ButtonIconGif'
import ButtonIconAnalytics from '../../../atoms/buttons/ButtonIconAnalytics'
import ButtonIconEmoji from '../../../atoms/buttons/ButtonIconEmoji'
import ButtonIconEvents from '../../../atoms/buttons/ButtonIconEvents'
import ButtonIconLocation from '../../../atoms/buttons/ButtonIconLocation'
import TweetButton from '../../../atoms/buttons/TweetButton'


const HomeHeader = ({ isDarkTheme }) => {
  return (
    <div className={`max-w-[600px] flex flex-col p-4 gap-4
    ${isDarkTheme ? "bg-secondary-15" : "bg-gray-100"}`} >

      {/* Row1 */}
      <div className={`w-full flex justify-between items-center `} >
        <Heading1 
          weight={`font-bold`} 
          color={isDarkTheme ? "text-gray-100" : "text-secondary-15"}
        >
          Home
        </Heading1>
        <ButtonIconStar isDarkTheme={isDarkTheme} onClick={() => {}} />
      </div>

      {/* Row2 */}
      <div className={`flex items-center gap-4`}>
        <WhoToFollowImage 
          imageUrl={`../../../../../assets/profile2.png`}
        />
        <input 
          type="text" 
          placeholder="What's happening?"
          className={`
            font-normal text-[1.25rem] leading-5 flex-grow outline-none
            ${!isDarkTheme && "bg-gray-100 placeholder-gray-40 text-gray-40"}
            ${isDarkTheme && "bg-secondary-15 placeholder-gray-100 text-gray-100"}
          `}
        />
      </div>

      {/* Row3 */}
      <div className={`flex justify-between items-center `}>
        <div className={`inline-flex gap-2`}>
          <ButtonIconImage isDarkTheme={isDarkTheme} onClick={() => {}} />
          <ButtonIconGif isDarkTheme={isDarkTheme} onClick={() => {}} />
          <ButtonIconAnalytics isDarkTheme={isDarkTheme} onClick={() => {}} />
          <ButtonIconEmoji isDarkTheme={isDarkTheme} onClick={() => {}} />
          <ButtonIconEvents isDarkTheme={isDarkTheme} onClick={() => {}} />
          <ButtonIconLocation isDarkTheme={isDarkTheme} onClick={() => {}} />
        </div>
        <TweetButton isDarkTheme={isDarkTheme} size={`small`} onClick={() => {}} >
          Tweet
        </TweetButton>
      </div>

    </div>
  )
}

export default HomeHeader

HomeHeader.propTypes = {
  isDarkTheme: PropTypes.bool,
}

HomeHeader.defaultProps = {
  isDarkTheme: false,
}