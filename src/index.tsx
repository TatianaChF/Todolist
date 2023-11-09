import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Providers } from './utils/Providers';
import { RouterProvider } from 'react-router';
import { router } from './utils/Router';
import RootStore from './store/roote-store';
import { Provider } from 'mobx-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider value={RootStore}>
      <Providers>
        <RouterProvider router={router} fallbackElement={<div>Загрузка...</div>} />
      </Providers>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
