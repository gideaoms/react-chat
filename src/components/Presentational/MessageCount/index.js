import React from 'react'

const MessageCount = ({ sent, received }) => (
  <div>
    <p>Mensagens recebidas: {sent}</p>
    <p>Mensagens enviadas: {received}</p>
  </div>
)

export default MessageCount
