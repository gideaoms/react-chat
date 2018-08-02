import React, { Fragment } from 'react'

const MessageInput = ({ handleSubmit, handleChange, messageText }) => (
  <Fragment>
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Digite seu texto aqui...'
        value={messageText}
        onChange={handleChange}
      />
      <button type='submit'>Enviar</button>
    </form>
  </Fragment>
)

export default MessageInput
