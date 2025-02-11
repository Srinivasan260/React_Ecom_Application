import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { Store } from './app/Store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <Provider store={Store}>


    <App />

  </Provider>
 



);

