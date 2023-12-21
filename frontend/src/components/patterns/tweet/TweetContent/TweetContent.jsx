import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'
import Body1 from '../../../atoms/headings/Body1'

const TweetContent = ({ isDarkTheme, hasImage, imageUrl, content }) => {
  return (
    <div className={`max-w-[586px] flex flex-col gap-4`}>
      {/* Placeholder */}
      <Body1 color={isDarkTheme ? "text-gray-100" : "text-gray-40"} weight={`font-medium`}>
        {content}
      </Body1>

      {/* Image */}
      {hasImage &&
        <div className={`rounded-[1rem] w-full h-[200px] overflow-hidden`}>
          <img className="object-cover w-full h-full" src={imageUrl} alt="Tweet content image" />
        </div>
      } 
    </div>
  )
}

export default TweetContent

TweetContent.propTypes = {
  isDarkTheme: PropTypes.bool,
  hasImage: PropTypes.bool,
  imageUrl: PropTypes.string,
  content: PropTypes.string,
}

TweetContent.defaultProps = {
  isDarkTheme: false,
  hasImage: false,
  imageUrl: "../../../../../assets/coffee.jpg",
  content: "Placeholder content goes here!",
}