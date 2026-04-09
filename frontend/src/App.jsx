import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import CreateLinkPage from './pages/CreateLinkPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFounPage';
import NavigationBar from './components/NavigationBar';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
    return (
        <BrowserRouter>
            <NavigationBar/>
            <div className="pt-16">
                <Routes>
                  {/* publik */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/auth/login" element={<LoginPage />} />
                    <Route path="/auth/register" element={<RegisterPage />} />

                  {/* user login */}
                    <Route element={<ProtectedRoute/>}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/create-link" element={<CreateLinkPage />} />
                        <Route path="/profile-page" element={<ProfilePage />} />
                    </Route>

                    <Route path="*" element={<NotFoundPage/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App