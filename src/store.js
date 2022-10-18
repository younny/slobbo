import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './reducer'

const middlewareEnhancer = applyMiddleware(logger, thunk)

const store = createStore(rootReducer, middlewareEnhancer)

export default store