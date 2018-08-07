import React from 'react'
import { Container } from './styles'

const MessageCount = ({ sent, received }) => (
  <Container>
    <p>
      Mensagens recebidas: <span>{sent}</span>
    </p>
    <p>
      Mensagens enviadas: <span>{received}</span>
    </p>
  </Container>
)

export default MessageCount
