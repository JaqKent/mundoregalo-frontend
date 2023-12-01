import React from 'react';
import ReactDOM from 'react-dom/client';
import * as firebase from 'firebase/app';

import { firebaseConfig } from '~configs/firebaseConfig';

import '~scss/main.scss';

import App from './App/App';

firebase.initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
