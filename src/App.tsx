import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import { getGategories } from './api';
import './App.css';
import { RenderRoutes } from './router';
import { categoriesState } from './store';

function App() {
  // 获取导航栏数据
  const queryState = useQuery('categories', () => getGategories(0));
  const [, setCategories] = useRecoilState(categoriesState);
  useEffect(() => {
    if (queryState.data) {
      setCategories(queryState.data.data.categorys);
    }
  }, [queryState]);

  return (
    <div className="App">
      {/* 一级路由出口 */}
      <RenderRoutes />
    </div>
  );
}

export default App;
