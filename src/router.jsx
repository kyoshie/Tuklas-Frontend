import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Error from './pages/Error/Error';
import LoginPage from './pages/LoginPage/LoginPage';
import Home from './pages/HomePage/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <Home />,
  }
]);