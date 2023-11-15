import React from 'react';
import ReactDOM from 'react-dom/client';
import * as firebase from 'firebase/app';

import App from './App/App';

import '~scss/main.scss';

import { firebaseConfig } from '~configs/firebaseConfig';

firebase.initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
