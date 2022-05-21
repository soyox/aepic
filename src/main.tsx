import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import { Router } from './router';
import Store from './store';
import { useRem } from './utils/flexiable';
//固定svg插件地址
import 'virtual:svg-icons-register';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient();

// 设置html的根字体大小
useRem();

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Store>
      <Router>
        <App />
      </Router>
    </Store>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  // </React.StrictMode>,
);
