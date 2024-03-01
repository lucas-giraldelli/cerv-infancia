/* eslint-disable react/no-deprecated */
import { render } from 'react-dom/';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import './styles/global.css';
import './styles/reset.css';

const queryClient = new QueryClient();

render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
