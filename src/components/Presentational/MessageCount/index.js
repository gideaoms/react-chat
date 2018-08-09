import React from 'react'
import { IoIosChatboxes, IoIosMail } from 'react-icons/io'
import { Container, Span, Count } from './styles'

const MessageCount = ({ sent, received }) => (
  <Container>
    <Span>
      <IoIosChatboxes />
      <Count>{sent}</Count>
      mensagens recebidas
    </Span>
    <Span>
      <IoIosMail />
      <Count>{received}</Count>
      mensagens enviadas
    </Span>
  </Container>
)

export default MessageCount
