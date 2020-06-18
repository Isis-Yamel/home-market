import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './css/utils/normalize.css';
import App from './container/App';
import { IntlProvider } from 'react-intl';
import { locales } from './i18n/locales';
import messages from './i18n/messages';

const locale = locales.SPANISH;

ReactDOM.render(
  <IntlProvider locale={locale} textComponent={Fragment} messages={messages[locale]}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);


