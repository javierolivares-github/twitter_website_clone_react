import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'

const Loading = ({ message }) => {
  return (
    <p
      data-testid="loading"
      className="text-blue-600"
    >
      <b>{message}</b>
    </p>
  )
}

export default Loading

Loading.propTypes = {
  message: PropTypes.string,
}

Loading.defaultProps = {
  message: "Loading.."
}