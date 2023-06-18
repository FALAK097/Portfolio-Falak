import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registered: ', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed: ', error);
        });
    });
  }
};

registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
