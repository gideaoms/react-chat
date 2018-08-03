import React from 'react'
import { shallow } from 'enzyme'
import createStore from 'redux-mock-store'
import MessageList from '.'

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

describe('MessageList Component - Container', () => {
  it('should be able to list the messages', () => {
    const wrapper = shallow(<MessageList />, { context: { store } })

    expect(wrapper.length).toBe(1)
    expect(wrapper.props().messages.length).toEqual(3)
  })
})
