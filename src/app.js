import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Chat from './pages/chat'

const App = () => (
  <Provider store={store}>
    <Chat />
  </Provider>
)

export default App
