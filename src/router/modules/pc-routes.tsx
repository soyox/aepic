import { Navigate, RouteObject } from 'react-router-dom';

import Layout from '@/layout';
import Me from '@/pages/Me';

const pcRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [],
  },
  {
    path: '/me',
    element: <Me></Me>,
  },
  {
    path: '*',
    element: <Navigate to="/"></Navigate>,
  },
];
export default pcRoutes;
