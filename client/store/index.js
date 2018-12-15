import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../service/sagas'


export function configureStore() {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware)
    )
  )

  sagaMiddleware.run(rootSaga)
  store.close = () => store.dispatch(END)
  return store
}
