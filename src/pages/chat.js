import React, { Fragment } from 'react'
import MessageInput from '../components/Container/MessageInput'
import MessageList from '../components/Container/MessageList'
import MessageCount from '../components/Container/MessageCount'

const Chat = () => (
  <Fragment>
    <MessageCount />
    <MessageList />
    <MessageInput />
  </Fragment>
)

export default Chat
