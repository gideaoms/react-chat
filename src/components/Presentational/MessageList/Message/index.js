import React from 'react'
import { Li } from './styles'

const Message = ({ message, owner }) => <Li owner={owner}>{message}</Li>

export default Message
