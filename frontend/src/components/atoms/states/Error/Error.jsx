import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'

const Error = ({ message, color }) => {
  return (
    <p
      data-testid="error"
      className={color}
    >
      <b>{message}</b>
    </p>
  )
}

export default Error

Error.propTypes = {
  message: PropTypes.string,
  color: PropTypes.string,
}

Error.defaultProps = {
  message: "Error, something went wrong!",
  color: "text-red-600"
}