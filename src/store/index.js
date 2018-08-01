import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'
import reducers from './ducks'

const middlewares = []

const sagaMiddleware = createSagaMiddleware({})

middlewares.push(sagaMiddleware)

const store = createStore(reducers, compose(applyMiddleware(...middlewares)))

sagaMiddleware.run(sagas)

export default store
