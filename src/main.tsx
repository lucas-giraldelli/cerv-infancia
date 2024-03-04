/* eslint-disable react/no-deprecated */
import { render } from 'react-dom/';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';
import './styles/global.css';
import './styles/reset.css';

const queryClient = new QueryClient();

render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
