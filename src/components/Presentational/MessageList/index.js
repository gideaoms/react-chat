import React from 'react'

const MessageList = ({ messages }) => (
  <ul>
    {messages.map(({ id, message }) => (
      <li key={id}>{message}</li>
    ))}
  </ul>
)

export default MessageList
