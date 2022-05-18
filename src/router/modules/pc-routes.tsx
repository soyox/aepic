import { Navigate, RouteObject } from 'react-router-dom';
import Home from '@/pages/Home';
import DashBoard from '@/pages/Home/Dashboard';
import Chart from '@/pages/Home/Chart';
import Me from '@/pages/Me';

const pcRoutes: RouteObject[] = [
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '',
        //如果不适用replace=true，会造成浏览器后退不了，每次后退操作都会进行重定向
        element: <Navigate to={'/home/dashboard'} replace={true}></Navigate>,
      },
      {
        path: 'dashboard',
        element: <DashBoard />,
      },
      {
        path: 'chart',
        element: <Chart />,
      },
      {
        path: '*',
        element: <Navigate to="/home/dashboard" replace={true}></Navigate>,
      },
    ],
  },
  {
    path: '/me',
    element: <Me />,
  },
  {
    path: '*',
    element: <Navigate to={'/home'} replace={true}></Navigate>,
  },
];
export default pcRoutes;
