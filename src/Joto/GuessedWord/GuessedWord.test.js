import React from 'react'
import { mount } from 'enzyme'
import GuessedWords from '../GuessedWords'
import { findByTestAttr } from '../../test/testUtils'

const setup = (state = {}) => {
  const wrapper = mount(<GuessedWords />)

  // add value to input box
  const inputBox = findByTestAttr(wrapper, 'input-box')
  inputBox.simulate('change', { target: { value: 'train' } })

  // simulate click on submit Button
  const submitButton = findByTestAttr(wrapper, 'submit-button')
  submitButton.simulate('click', { preventDefault() {} })

  return wrapper
}

describe('no words guessed', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ secretWord: 'party', success: false, guessedWords: [] })
  })

  test('create GuessedWords table with one row', () => {
    const GuessedWordRows = findByTestAttr(wrapper, 'guessed-word')
    expect(GuessedWordRows).toHaveLength(1)
  })
})

describe('some words guessed', () => {})

describe('guess secret word', () => {})
