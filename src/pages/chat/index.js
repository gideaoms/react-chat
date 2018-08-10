import React from 'react'
import MessageInput from '../../components/Container/MessageInput'
import MessageList from '../../components/Container/MessageList'
import MessageCount from '../../components/Container/MessageCount'
import { Container } from './styles'

const Chat = () => (
  <Container>
    <h1>Wolcome to the chat</h1>
    <MessageCount />
    <MessageList />
    <MessageInput />
  </Container>
)

export default Chat
