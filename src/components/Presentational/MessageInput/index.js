import React from 'react'
import { IoMdSend } from 'react-icons/io'
import { Container, Input, Button } from './styles'

const MessageInput = ({ handleSubmit, handleChange, messageText }) => (
  <Container>
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Digite sua mensagem aqui...'
        value={messageText}
        onChange={handleChange}
      />
      <Button type='submit'>
        <IoMdSend />
      </Button>
    </form>
  </Container>
)

export default MessageInput
