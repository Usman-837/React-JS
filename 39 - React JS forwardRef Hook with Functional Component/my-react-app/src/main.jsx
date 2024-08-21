// index.js or main entry file
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />  // Remove <React.StrictMode> if you want, but not recommended
);
