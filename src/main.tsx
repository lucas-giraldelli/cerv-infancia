/* eslint-disable react/no-deprecated */
import * as React from 'react';
import { render } from 'react-dom/';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import './styles/global.css';
import './styles/reset.css';
import { Router } from './Router';

const queryClient = new QueryClient();

render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
