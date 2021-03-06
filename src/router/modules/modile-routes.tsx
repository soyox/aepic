import { Navigate, RouteObject } from 'react-router-dom';
import Home from '@/pages/Home';
import DashBoard from '@/pages/Home/Dashboard';
import Chart from '@/pages/Home/Chart';
import Me from '@/pages/Me';
import Main from '@/layout/Main';

const mobileRoutes: RouteObject[] = [
  {
    path: '/home',
    element: <Main />,
    // children: [
    //   {
    //     path: '',
    //     //如果不适用replace=true，会造成浏览器后退不了，每次后退操作都会进行重定向
    //     element: <Navigate to={'/home/dashboard'} replace={true}></Navigate>,
    //   },
    //   {
    //     path: 'dashboard',
    //     element: <DashBoard />,
    //   },
    //   {
    //     path: 'chart',
    //     element: <Chart />,
    //   },
    //   {
    //     path: '*',
    //     element: <Navigate to="/home/dashboard" replace={true}></Navigate>,
    //   },
    // ],
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
export default mobileRoutes;
