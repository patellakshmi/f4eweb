import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { CookiesProvider } from "react-cookie";
import store from "./store";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <CookiesProvider>
      <React.StrictMode>
          <Provider store={store}>
                <App />
          </Provider>
      </React.StrictMode>
    </CookiesProvider>,
  document.getElementById('root')
);


reportWebVitals();
