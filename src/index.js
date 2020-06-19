import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './css/utils/normalize.css';
import App from './container/App';
import { IntlProvider } from 'react-intl';
import { locales } from './i18n/locales';
import messages from './i18n/messages';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,(composeEnhancers(applyMiddleware(thunk))));

const locale = locales.SPANISH;

ReactDOM.render(
  <Provider store={store}>
      <IntlProvider locale={locale} textComponent={Fragment} messages={messages[locale]}>
        <App />
      </IntlProvider>
  </Provider>,
  document.getElementById('root')
);


