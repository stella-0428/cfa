import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import userStore from './app/_shared/store/user-store';
import pageStore from './app/_shared/store/page-store';
import { Provider } from 'mobx-react';

const stores = {
  userStore,
  pageStore
};

/*
  Commented out <React.StrictMode> beacuse it was causing the routes to render twice.
  GitHub discussion: https://github.com/supasate/connected-react-router/issues/193#issuecomment-567596005 
*/
ReactDOM.render(
  // <React.StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);