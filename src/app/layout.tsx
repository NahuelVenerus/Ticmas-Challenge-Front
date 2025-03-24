import React from 'react';
import StoreProvider from '@/store/StoreProvider';
import './globals.css';

export const metadata = {
  title: 'Tu aplicación',
  description: 'Descripción de tu aplicación',
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
