import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Error from './pages/Error/Error';
import LoginPage from './pages/LoginPage/LoginPage';
import Home from './pages/HomePage/Home';
import About from './pages/About/About';
import HomePageNav from './components/HomePageNav/HomePageNav';
import Navbar from './components/Navbar/Navbar';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <>
      <LoginPage />
      <Navbar/>
    </>
  },
  {
    path: "/home",
    element: <>
    <Home/>
    <HomePageNav/>
      </>
  },
  {
    path: "/about",
    element: <>
        <About />
        <Navbar/>
    </>
  
  }
]);