import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App';

import { setupStore } from './store';

const rootContainer: HTMLElement | null = document.getElementById('root');

if (!rootContainer) {
  throw new Error("Root element isn't found!");
}

const root: Root = createRoot(rootContainer);
const store = setupStore();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
