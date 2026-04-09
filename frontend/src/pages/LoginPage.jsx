import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Input from "../components/Input";
import Button from "../components/Button";

const LoginPage = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [searchParams] = useSearchParams()
    const isExpired = searchParams.get("error") === "session_expired"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        try {
            const response = await fetch("http://localhost:8888/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || "Login failed")
            }

            localStorage.setItem("token", result.data.token)

            navigate("/")
        } catch (error) {
            console.error("Login failed", error)
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-fit w-1/2 flex flex-col gap-5 items-center justify-center p-4">
            <div>
                {isExpired && (
                    <div className="bg-orange-100 text-orange-700 p-3 rounded-lg mb-4 text-sm font-bold border border-orange-200">
                        Sesi Anda telah berakhir. Silakan login kembali.
                    </div>
                )}
                <h2 className="text-2xl font-black tracking-tight">
                    ShortLink
                </h2>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 w-full max-w-md">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold">Welcome Back</h1>
                        <p className="text-sm text-gray-500">Please enter your details to sign in.</p>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin}>
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="name@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <div className="relative mt-4">
                            <div className="flex justify-between items-center mb-1">
                                <label className="text-sm font-semibold text-slate-600">Password</label>
                                <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Button type="submit" variant="blue" isLoading={isLoading} className="w-full">
                                Log In
                            </Button>
                        </div>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-3 text-slate-400 font-bold tracking-widest">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <Button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-slate-700 font-medium text-sm"
                    >
                        <FcGoogle size={20} />
                        Sign in with Google
                    </Button>
                </div>

                <p className="mt-8 text-sm text-slate-600">
                    Don't have an account?{" "}
                    <button
                        onClick={() => navigate("/auth/register")}
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Sign up
                    </button>
                </p>
            </div>
        </div>
    )
}

export default LoginPage