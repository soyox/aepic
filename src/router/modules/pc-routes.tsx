import { Navigate, RouteObject } from 'react-router-dom';

import Layout from '@/layout';

const pcRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [],
  },
  {
    path: '*',
    element: <Navigate to="/"></Navigate>,
  },
];
export default pcRoutes;
