import React from 'react'
import Message from './Message'
import { Container } from './styles'

const MessageList = ({ messages }) => (
  <Container>
    {messages.map(({ id, message, owner }) => (
      <Message key={id} message={message} owner={owner} />
    ))}
  </Container>
)

export default MessageList
