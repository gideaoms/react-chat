import React from 'react'
import MessageInput from '../../components/Container/MessageInput'
import MessageList from '../../components/Container/MessageList'
import MessageCount from '../../components/Container/MessageCount'
import { Container } from './styles'

const Chat = () => (
  <Container>
    <MessageCount />
    <MessageList />
    <MessageInput />
  </Container>
)

export default Chat
