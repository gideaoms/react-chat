import { put } from 'redux-saga/effects'
import { Creators as ChatActions } from '../ducks/chat'

export function * addMessage (action) {
  yield put(ChatActions.addMessage(action.payload.message))
}
