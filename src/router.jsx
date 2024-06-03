import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Error from './pages/Error/Error';
import LoginPage from './pages/LoginPage/LoginPage';
import Home from './pages/HomePage/Home';
import About from './pages/About/About';
import HomePageNav from './components/HomePageNav/HomePageNav';
import Navbar from './components/Navbar/Navbar';
import Marketplace from './pages/Marketplace/Marketplace';
import Gallery from './pages/Gallery/Gallery';
import Profile from './pages/Profile/Profile';





export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <>
      <Navbar/>
      <LoginPage />
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
  
  },
  {
    path: "/marketplace",
    element: <>
        <Marketplace />
        <HomePageNav/>
    </>
  
  },
  {
    path: "/gallery",
    element: <>
        <Gallery />
        <HomePageNav/>
    </>
  
  },
  {
    path: "/profile",
    element: <>
        <Profile />
        <HomePageNav/>
    </>
  
  },
  
]);