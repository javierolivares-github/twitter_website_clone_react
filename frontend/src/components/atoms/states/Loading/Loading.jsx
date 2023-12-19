import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'

const Loading = ({ message, color }) => {
  return (
    <p
      data-testid="loading"
      className={color}
    >
      <b>{message}</b>
    </p>
  )
}

export default Loading

Loading.propTypes = {
  message: PropTypes.string,
  color: PropTypes.string,
}

Loading.defaultProps = {
  message: "Loading..",
  color: "text-blue-600",
}