import { useEffect, useState } from 'react';
import './App.css';
import { RenderRoutes } from './router';

function App() {
  return (
    <div className="App">
      {/* 一级路由出口 */}
      <RenderRoutes />
    </div>
  );
}

export default App;
