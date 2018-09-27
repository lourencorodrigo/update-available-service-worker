import { createStore, combineReducers } from 'redux'

import serviceWorker from '../reducers/serviceWorker'

const store = createStore(
  combineReducers({
    serviceWorker,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
