import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import { getGategories } from './api';
import './App.css';
import { RenderRoutes } from './router';
import { categoriesState, themeState } from './store';
import { useChangeTheme } from './utils';

function App() {
  // 获取导航栏数据
  const queryState = useQuery('categories', () => getGategories(0));
  const [, setCategories] = useRecoilState(categoriesState);
  useEffect(() => {
    if (queryState.data) {
      setCategories(queryState.data.data.categorys);
    }
  }, [queryState]);

  useChangeTheme();

  return (
    //  h-screen w-screen fixed top-0 left-0
    <div className="App h-screen w-screen fixed top-0 left-0">
      {/* 一级路由出口 */}
      <RenderRoutes />
    </div>
  );
}

export default App;
