export const Types = {
  ADD_MESSAGE: 'chat/ADD_MESSAGE'
}

const INITIAL_STATE = {
  messages: []
}

export default function chat (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_MESSAGE:
      console.log(state.messages.length)
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: state.messages.length, message: action.payload.message }
        ]
      }
    default:
      return state
  }
}

export const Creators = {
  addMessage: message => ({
    type: Types.ADD_MESSAGE,
    payload: { message }
  })
}
