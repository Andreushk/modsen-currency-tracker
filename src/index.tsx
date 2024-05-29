import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App';
import { store } from '@/state/store';

const rootContainer: HTMLElement | null = document.getElementById('root');

if (!rootContainer) {
  throw new Error("Root element isn't found!");
}

const root: Root = createRoot(rootContainer);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
