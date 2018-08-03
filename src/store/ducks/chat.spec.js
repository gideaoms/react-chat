import { Creators as ChatActions, Types as ChatTypes } from './chat'

describe('Chat Actions', () => {
  it('addMessage action', () => {
    const message = 'Hello World'
    const addMessage = ChatActions.addMessage(message)

    expect(addMessage).toEqual({
      type: ChatTypes.ADD_MESSAGE,
      payload: { message }
    })
  })
})
