import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState('')

  return (
    <div data-test='component-input'>
      <form action='' className='form-inline'>
        <input
          data-test='input-box'
          type='text'
          className='mb-2 mx-sm-3'
          placeholder='enter guess'
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          data-test='submit-button'
          className='btn btn-primary mb-2'
          onClick={(e) => {
            e.preventDefault()
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
}

export default Input
