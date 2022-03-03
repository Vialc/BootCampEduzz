import React from 'react';
import { ResetCSS } from './global/resetCSS';
import TwitterProvider from './providers/twitter-provider';
import App from './App';

// import { Container } from './styles';

const Providers = () => {
  return (
    <main>
    <TwitterProvider>
      <ResetCSS />
      <App />
      </TwitterProvider>
    </main>
  );
}

export default Providers;