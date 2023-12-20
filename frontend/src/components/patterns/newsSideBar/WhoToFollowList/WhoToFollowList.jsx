import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'
import { statusTypes } from '../../../../data/statusTypes'
import Loading from '../../../atoms/states/Loading'
import Error from '../../../atoms/states/Error'
import WhoToFollowListItem from '../WhoToFollowListItem'

const WhoToFollowList = ({ status, data, isDarkTheme, onClick }) => {
  if (status === statusTypes.loading) {
    return <Loading color={isDarkTheme ? "text-gray-100" : "text-blue-600"}/>
  }

  if (status === statusTypes.error) {
    return <Error color={isDarkTheme ? "text-gray-100" : "text-red-600"}/>
  }

  return (
    <div
      data-testid="who-to-follow-list"
      className={`flex flex-col gap-4`}
    >
      {data.map( (item) => (
        <WhoToFollowListItem
          key={item.id} 
          username={item.username}
          account={item.account}
          imageUrl={item.imageUrl}
          isDarkTheme={isDarkTheme}
          onClick={onClick}
        />
      ))}
    </div>    
  )
}

export default WhoToFollowList

WhoToFollowList.propTypes = {
  status: PropTypes.oneOf(["loading", "error", "loaded"]).isRequired,
  data: PropTypes.array,
  isDarkTheme: PropTypes.bool,
  onClick: PropTypes.func,
}

WhoToFollowList.defaultProps = {
  onClick: undefined,
}
