import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as ServiceWorkerActions from './actions/serviceWorker';
import store from './store';

const onUpdate = () => {
  store.dispatch(ServiceWorkerActions.updateRefresh(true))
}

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker(onUpdate);
