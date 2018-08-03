import React from 'react'
import { shallow } from 'enzyme'
import createStore from 'redux-mock-store'
import MessageCount from '.'

const mockStore = createStore()
const INITIAL_STATE = {
  chat: {
    messages: [
      { id: 1, message: 'Message 01', owner: true },
      { id: 2, message: 'Message 02', owner: false },
      { id: 3, message: 'Message 03', owner: true }
    ]
  }
}
const store = mockStore(INITIAL_STATE)

describe('MessageCount Component - Container', () => {
  it('should be able to count the messages', () => {
    const wrapper = shallow(<MessageCount />, { context: { store } })

    expect(wrapper.props().sent).toEqual(2)
    expect(wrapper.props().received).toEqual(1)
  })
})
