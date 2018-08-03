import React from 'react'
import { shallow } from 'enzyme'
import createStore from 'redux-mock-store'
import MessageInput from '.'
import { Creators as ChatActions } from '../../../store/ducks/chat'

const mockStore = createStore()
const INITIAL_STATE = {
  chat: {
    messages: []
  }
}
const store = mockStore(INITIAL_STATE)

describe('MessageInput Component - Container', () => {
  it('should be able to add a message', () => {
    const message = 'Hello World'
    const wrapper = shallow(<MessageInput />, { context: { store } })

    wrapper
      .dive()
      .setState({ messageText: message })
      .find('MessageInput')
      .dive()
      .children()
      .find('form')
      .simulate('submit', { preventDefault: jest.fn() })

    expect(store.getActions()).toContainEqual(
      ChatActions.addMessage(message)
    )
  })
})
