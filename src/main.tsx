import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import { Router } from './router';
import Store from './store';
import { useRem } from './utils/flexiable';
//固定svg插件地址
import 'virtual:svg-icons-register';

useRem();

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Store>
    <Router>
      <App />
    </Router>
  </Store>,
  // ,
  // </React.StrictMode>,
);
