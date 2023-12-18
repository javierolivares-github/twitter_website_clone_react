import React from 'react'
import PropTypes from 'prop-types'
import '../../../../index.css'

const Error = ({ message }) => {
  return (
    <p
      data-testid="error"
      className="text-red-600"
    >
      <b>{message}</b>
    </p>
  )
}

export default Error

Error.propTypes = {
  message: PropTypes.string,
}

Error.defaultProps = {
  message: "Something went wrong!"
}