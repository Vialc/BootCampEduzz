import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ErrorBoundary from './ErrorBoundary'

const main = (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

ReactDOM.render(main, document.getElementById('root'));