import React, { Fragment } from 'react'
import MessageInput from '../components/Container/MessageInput'
import MessageList from '../components/Container/MessageList'

const Chat = () => (
  <Fragment>
    <MessageList />
    <MessageInput />
  </Fragment>
)

export default Chat
