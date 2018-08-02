import React from 'react'
import Message from './Message'

const MessageList = ({ messages }) => (
  <ul>
    {messages.map(({ id, message }) => (
      <Message key={id} message={message} />
    ))}
  </ul>
)

export default MessageList
