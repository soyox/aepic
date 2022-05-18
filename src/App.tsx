import { useEffect, useState } from 'react';
import './App.css';
import Main from './layout/Main';
import { RenderRoutes } from './router';

function App() {
  console.log(import.meta.env.VITE_BASE_API);

  return (
    <div className="App p-4">
      <Main></Main>
      <header className="App-header">
        <h1 className="text-lg mb-1 text-red-300 md:text-blue-900">
          Hello Vite + React!
        </h1>
      </header>
      {/* 一级路由出口 */}
      <RenderRoutes />
    </div>
  );
}

export default App;
