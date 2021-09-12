import React from 'react'
import { findByTestAttr } from '../../test/testUtils'
import App from '../../App'
import {shallow} from 'enzyme'

const setup = () => {
    return shallow(<App />)
}

test('render without error', () => {
    const wrapper = setup()
    const app = findByTestAttr(wrapper, 'app-component')
    expect(app).toHaveLength(1)
})