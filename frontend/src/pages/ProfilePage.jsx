import { useState, useEffect } from "react";
import { FiEdit3, FiMail, FiCalendar, FiLink, FiBell, FiShield, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { authorizedFetch } from "../utils/api";

const ProfilePage = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await authorizedFetch("http://localhost:8888/api/v1/profile")
                // const token = localStorage.getItem("token")
                // const response = await fetch("http://localhost:8888/api/v1/profile", {
                //     headers: { "Authorization": `Bearer ${token }` }
                // })
                // const result = await response.json()
                if (response && response.ok ) {
                    const result = await response.json()
                    setUser(result.data)
                }
            } catch (error) {
                console.error("Failed to fetch profile", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProfile()
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/auth/login")
    }

    if (isLoading) return <div className="flex justify-center mt-20">Loading profile...</div>

    return (
        <div className="flex flex-col items-center min-h-screen bg-slate-50/50 pt-24 pb-12">
            <div className="w-full max-w-2xl px-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 text-center">
                    Account Management
                </p>

                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
                    {/* Profile Header */}
                    <div className="flex flex-row justify-between items-start mb-10">
                        <div className="flex flex-row gap-6 items-center">
                            <div className="relative">
                                {/* Kontainer Avatar */}
                                <div className="w-24 h-24 rounded-2xl bg-blue-600 flex items-center justify-center border-2 border-white shadow-md overflow-hidden transition-all">
                                    {user?.profile_picture ? (
                                        <img
                                            src={user.profile_picture}
                                            alt="Avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-white text-4xl font-black uppercase">
                                            {user?.fullname ? user.fullname.charAt(0) : "?"}
                                        </span>
                                    )}
                                </div>

                                {/* Tombol Edit tetap ada di pojok */}
                                <button className="absolute -bottom-2 -right-2 p-2 bg-white rounded-xl shadow-lg border border-slate-100 text-blue-600 hover:text-blue-700 hover:scale-110 transition-transform">
                                    <FiEdit3 size={16} />
                                </button>
                            </div>

                            <div>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-2xl font-black text-slate-900 leading-tight">
                                        {user?.fullname || "User Name"}
                                    </h2>
                                    <span className="bg-blue-100 text-blue-600 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                                        Pro Member
                                    </span>
                                </div>
                                <p className="text-slate-500 font-medium">
                                    {user?.profession || "Member at ShortLink"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email Address</p>
                            <p className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                <FiMail className="text-slate-400" /> {user?.email || "user@example.com"}
                            </p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Account Tenure</p>
                            <p className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                <FiCalendar className="text-slate-400" /> Member since: Jan 1, 2026
                            </p>
                        </div>
                    </div>

                    {/* Active Assets Banner */}
                    <div className="bg-blue-600 rounded-2xl p-6 text-white flex justify-between items-center mb-10 shadow-lg shadow-blue-200">
                        <div className="flex items-center gap-4">
                            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                                <FiLink size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest">Active Assets</p>
                                <p className="text-2xl font-black">12</p>
                            </div>
                        </div>
                        <Button
                            variant="white"
                            className="w-fit text-xs px-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
                            onClick={() => navigate("/dashboard")}
                        >
                            View Links
                        </Button>
                    </div>

                    {/* Settings List */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-4">
                                <div className="text-slate-400"><FiBell size={20} /></div>
                                <p className="text-sm font-bold text-slate-700">Email Notifications</p>
                            </div>
                            <div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer">
                                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-2 border-t border-slate-50">
                            <div className="flex items-center gap-4">
                                <div className="text-slate-400"><FiShield size={20} /></div>
                                <p className="text-sm font-bold text-slate-700">Two-Factor Authentication</p>
                            </div>
                            <span className="text-[10px] font-black text-red-400 uppercase tracking-widest">Disabled</span>
                        </div>
                    </div>

                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className="w-full mt-10 flex items-center justify-center gap-2 p-4 bg-slate-50 text-slate-500 font-bold rounded-2xl hover:bg-red-50 hover:text-red-600 transition-all border border-slate-100"
                    >
                        <FiLogOut /> Logout Session
                    </button>
                </div>

                <p className="mt-8 text-center text-[10px] text-slate-400">
                    Your data is encrypted using AES-256 standards. <span className="text-blue-500 cursor-pointer">Privacy Policy</span>
                </p>
            </div>
        </div>
    )
}

export default ProfilePage