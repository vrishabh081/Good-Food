import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <App/>
      </Provider>
    </I18nextProvider>
  </BrowserRouter>
);


reportWebVitals();
serviceWorkerRegistration.register();