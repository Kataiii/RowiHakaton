import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import router from './routing/Router';
import './assets/fonts/stolzl_bold.otf';
import './assets/fonts/stolzl_book.otf';
import './assets/fonts/stolzl_light.otf';
import './assets/fonts/stolzl_medium.otf';
import './assets/fonts/stolzl_regular.otf';
import './assets/fonts/stolzl_thin.otf';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  
);
