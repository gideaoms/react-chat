import { createStore, compose, applyMiddleware } from 'redux'

import reducers from './ducks'

const middlewares = []

/* add middlewares here */

const store = createStore(reducers, compose(applyMiddleware(...middlewares)))

export default store
