import React from 'react'

const MessageCount = ({ sent, received }) => (
  <div>
    <p>
      Mensagens recebidas: <span>{sent}</span>
    </p>
    <p>
      Mensagens enviadas: <span>{received}</span>
    </p>
  </div>
)

export default MessageCount
