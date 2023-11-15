import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Providers } from './utils/Providers';
import { RouterProvider } from 'react-router';
import { router } from './utils/Router';
import { StoreProvider } from './utils/StoreProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreProvider>
      <Providers>
        <RouterProvider router={router} fallbackElement={<div>Загрузка...</div>} />
      </Providers>
    </StoreProvider>
  </React.StrictMode>
);

reportWebVitals();
