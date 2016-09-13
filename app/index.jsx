import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/index';
import Root from './components/Root';

// Add the extenstions to allow Redux DevTools use.
const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());
// Create the react redux router history for time travel with route support
// using the Redux DevTools. Note that route query params won't be in state.
const history = syncHistoryWithStore(browserHistory, store);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);


// Use react performance tools in development.
if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');  // eslint-disable-line global-require
}

// Enable Webpack hot module replacement (used in development).
if (module.hot) {
  module.hot.accept('./reducers/index', () => {
    const nextRootReducer = require('./reducers/index').default;  // eslint-disable-line
    store.replaceReducer(nextRootReducer);
  });
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;  // eslint-disable-line
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
