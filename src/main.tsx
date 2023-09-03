import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorPage from './error-page';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CurrentEvents from './CurrentEvents';
import Equipment from './Equipment';
import News from './News';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'CurrentEvents',
    element: <CurrentEvents />,
  },
  {
    path: 'Equipment',
    element: <Equipment />,
  },
  {
    path: 'News',
    element: <News />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
