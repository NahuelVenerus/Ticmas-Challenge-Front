import React from 'react';
import StoreProvider from '@/store/StoreProvider';
import '../styles/globals.css';

export const metadata = {
  title: 'Planify',
  description: 'Task Management Application',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <html lang="es">
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
};

export default Layout;
