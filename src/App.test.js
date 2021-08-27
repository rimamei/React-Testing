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

test('render withour error', () => {
  const wrapper = shallow(<App />)
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1 )
})
test('increment button', () => {

})
test('counter display', () => {

})
test('dispaly starts at 0', () => {

})
test('clicking on button increments counter display', () => {

})