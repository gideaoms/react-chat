import React from 'react'
import { shallow } from 'enzyme'
import MessageList from '.'

describe('MessageList Component - Presentational', () => {
  it('should be able to list the messages', () => {
    const messages = [
      { id: 1, message: 'Message 01', owner: true },
      { id: 2, message: 'Message 02', owner: false },
      { id: 3, message: 'Message 03', owner: true }
    ]
    const isMineMessage = jest.fn()
    const wrapper = shallow(
      <MessageList messages={messages} isMineMessage={isMineMessage} />
    )

    expect(wrapper.find('Message').length).toBe(3)
  })
})
