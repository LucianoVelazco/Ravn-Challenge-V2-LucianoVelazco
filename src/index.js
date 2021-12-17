import React from 'react';
import ReactDOM from 'react-dom';
import ApolloProvider from './Apollo/index';
import { StartWarsProvider } from './context/index';
import App from './components/App';

ReactDOM.render(
    <ApolloProvider>
     <StartWarsProvider>
      <App />
      </StartWarsProvider>
    </ApolloProvider>,
  document.getElementById('app')
);
