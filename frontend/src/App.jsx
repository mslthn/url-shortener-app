import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import UserContext from './components/context/UserContext';
import Layout from './layout/MainLayout';
import Dashboard from './pages/Dashboard';
import CreateLinkPage from './pages/CreateLinkPage';
import AuthLayout from './layout/AuthLayout';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />, 
    children: [
      { path: 'register', element: <RegisterPage /> },
      { path: 'login', element: <LoginPage /> },
    ]
  },
  {
    path: '/',
    element: <Layout />, 
    children: [
      { path: '/', element: <LandingPage /> },
    ],
  },
  {
    element: <ProtectedRoute />, 
    children: [
      {
        element: <Layout />,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/create-link", element: <CreateLinkPage /> },
          { path: "/profile-page", element: <ProfilePage /> }
        ]
      }
    ]
  }
]);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedinInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;