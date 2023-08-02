// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { registerServiceWorker } from './serviceWorkerRegistration';
import './index.css';

registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
