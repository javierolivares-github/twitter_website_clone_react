import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'
import TweetCardLoading from '../../../atoms/states/TweetCardLoading'



const TweetListLoading = ({ isDarkTheme }) => {
  let cards = [1, 2, 3, 4]

  return (
    <div className={`flex flex-col gap-4 p-4`}>
      {cards.map( (card, index) => (
        <TweetCardLoading key={index} isDarkTheme={isDarkTheme}/>
      ))}
    </div>
  )
}

export default TweetListLoading

TweetListLoading.propTypes = {
  isDarkTheme: PropTypes.bool,
}

TweetListLoading.defaultProps = {
  isDarkTheme: false,
}
