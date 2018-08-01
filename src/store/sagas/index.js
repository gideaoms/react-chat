import { all, takeLatest } from 'redux-saga/effects'
import { Types as ChatTypes } from '../ducks/chat'
import { addMessage } from './chat'

export default function * rootSaga () {
  yield all([
    takeLatest(ChatTypes.ADD_MESSAGE, addMessage)
  ])
}
