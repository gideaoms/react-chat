import React from 'react'
import { IoIosChatboxes } from 'react-icons/io'
import { Container, Span, Count } from './styles'

const MessageCount = ({ sent, received }) => (
  <Container>
    <Span>
      <IoIosChatboxes size='2em' />
      Mensagens recebidas: <Count>{sent}</Count>
    </Span>
    <Span>
      <IoIosChatboxes size='2em' />
      Mensagens enviadas: <Count>{received}</Count>
    </Span>
  </Container>
)

export default MessageCount
