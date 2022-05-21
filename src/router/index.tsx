import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import mobileRoutes from './modules/modile-routes';
import pcRoutes from './modules/pc-routes';
import { isMobileStatic, isMobileTerminal } from '@/utils/flexiable';

export const RenderRoutes = React.memo(() => {
  const isMT = isMobileStatic();
  const routes = useRoutes(isMT ? mobileRoutes : pcRoutes);
  return routes;
});

interface RouterProps {
  children: React.ReactElement | React.ReactElement[];
}

export function Router(props: RouterProps) {
  const { children } = props;

  return <BrowserRouter>{children}</BrowserRouter>;
}
