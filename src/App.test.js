import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

// test('renders without crashing', () => {
//   const wrapper = shallow(<App />)
//   // console.log(wrapper.debug())
//   // expect(wrapper.exists()).toBe(true)
//   expect(wrapper.exists()).toBe(false)
// })

const setup = () => shallow(<App />)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('render withour error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})

test('increment button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1)
})

test('counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
})

test('display starts at 0', () => {
  const wrapper = setup()
  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe('0')
})

test('clicking on button increments counter display', () => {
  const wrapper = setup()
  // find the button
  const button = findByTestAttr(wrapper, 'increment-button')

  // click the button
  button.simulate('click')

  // find the display
  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe('1')
})
