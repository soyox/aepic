import { useEffect, useState } from 'react';
import './App.css';
import Main from './layout/Main';
import { RenderRoutes } from './router';
import { getPictures } from './api';

function App() {
  useEffect(() => {
    getPictures().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div className="App">
      <Main></Main>
      <header className="App-header"></header>
      {/* 一级路由出口 */}
      <RenderRoutes />
    </div>
  );
}

export default App;
