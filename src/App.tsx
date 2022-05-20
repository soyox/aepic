import { useEffect, useState } from 'react';
import './App.css';
import Main from './layout/Main';
import { RenderRoutes } from './router';
import Header from './layout/Header';
import { isMobileStatic } from './utils/flexiable';

function App() {
  return (
    <div className="App">
      {/* 一级路由出口 */}
      <RenderRoutes />
    </div>
  );
}

export default App;
