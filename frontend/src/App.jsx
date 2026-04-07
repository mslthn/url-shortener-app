import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import UserContext from './components/context/UserContext';
import Layout from './layout/MainLayout';

const router = createBrowserRouter([
  {
    path: 'register',
    element: <RegisterPage />
  },
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
    ],
  },
])

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("loggedinInUser")) || null)
  })

  return (
      <UserContext value={user}>
        <RouterProvider router={router} />
      </UserContext>
  )
}

export default App