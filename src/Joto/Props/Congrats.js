import React from 'react'
import PropTypes from 'prop-types'

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test='component-congrats alert alert-success'>
        <span data-test='congrats-message'>
          Congratulation! You guessed word!
        </span>
      </div>
    )
  } else {
    return <div data-test='component-congrats'></div>
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats
