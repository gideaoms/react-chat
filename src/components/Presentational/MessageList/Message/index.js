import React from 'react'
import { ColumnImg, ColumnMessage } from './styles'
import UserImage from '../../../../assets/images/user.png'

const Message = ({ message, owner, isMineMessage }) => (
  <tr>
    <ColumnImg>
      {isMineMessage && <img src={UserImage} alt='User Image' />}
    </ColumnImg>
    <ColumnMessage owner={owner}>
      <span>{message}</span>
    </ColumnMessage>
  </tr>
)

export default Message
