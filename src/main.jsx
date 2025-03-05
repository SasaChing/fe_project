import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import { store } from "./store/store";
import AppRoutes from './routes';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </StrictMode>,
  );
} else {
  console.error('Root element not found');
}
