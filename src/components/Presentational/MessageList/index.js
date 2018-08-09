import React from 'react'
import Message from './Message'
import { Container } from './styles'

const MessageList = ({ messages, isMineMessage }) => (
  <Container>
    <tbody>
      {messages.map(({ id, message, owner }, index) => (
        <Message
          key={id}
          message={message}
          owner={owner}
          isMineMessage={owner && isMineMessage(messages, index)}
        />
      ))}
    </tbody>
  </Container>
)

export default MessageList
