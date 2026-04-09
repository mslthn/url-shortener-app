import { useNavigate, useLocation, Link } from "react-router-dom";
import Button from "./Button";
import { FiPlus, FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";

const NavigationBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [userData, setUserData] = useState(null);
    
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            try {
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                
                const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));

                setUserData(JSON.parse(jsonPayload));
            } catch (error) {
                console.error("Invalid token format", error);
                localStorage.removeItem("token");
            }
        }
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUserData(null);
        navigate("/auth/login");
    };

    const activeClass = (path) => {
        return location.pathname === path 
            ? "text-blue-600 border-b-2 border-blue-600 pb-1 font-bold" 
            : "text-slate-500 hover:text-blue-600 transition-all";
    };

    const getInitial = (name) => {
        if (!name) return "?";
        return name.charAt(0).toUpperCase();
    };

    return (
        <nav className="flex flex-row items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-100 fixed top-0 w-full z-50 px-10 py-3">
            <div className="flex items-center gap-10">
                <div className="text-xl font-black cursor-pointer tracking-tighter" onClick={() => navigate("/")}>
                    ShortLink
                </div>
                
                <ul className="list-none flex flex-row gap-8 text-sm font-medium">
                    <li><Link to="/dashboard" className={activeClass("/dashboard")}>Dashboard</Link></li>
                    <li><Link to="/analytics" className={activeClass("/analytics")}>Analytics</Link></li>
                    <li><Link to="/links" className={activeClass("/links")}>Links</Link></li>
                </ul>
            </div>

            <div className="flex flex-row items-center gap-4">
                {token ? (
                    <>
                        <Button 
                            variant="blue" 
                            onClick={() => navigate("/create-link")}
                            className="flex items-center gap-2 px-5 py-2 hidden md:flex"
                        >
                            <FiPlus /> Create New Link
                        </Button>
                        
                        <div className="flex items-center gap-3 ml-4 border-l pl-6 border-slate-200">
                            <div 
                                className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center border border-blue-700 cursor-pointer overflow-hidden shadow-sm hover:ring-2 hover:ring-blue-100 transition-all"
                                onClick={() => navigate("/profile-page")}
                            >
                                <span className="text-white font-bold text-sm">
                                    {getInitial(userData?.fullname)}
                                </span>
                            </div>

                            <button onClick={handleLogout} className="flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-red-600 transition-colors">
                                <FiLogOut /> Logout
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex gap-4">
                        <button onClick={() => navigate('/auth/login')} className="text-sm font-bold text-slate-600 hover:text-blue-600 px-4">Login</button>
                        <Button variant="blue" onClick={() => navigate('/auth/register')} className="px-6">Sign up Free</Button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavigationBar;