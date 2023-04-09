import React from 'react';
import ReactDOM from 'react-dom/client';
//import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import { App } from './App.tsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
