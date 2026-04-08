import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiEye } from "react-icons/fi";
import Input from "../components/Input";
import Button from "../components/Button";

const LoginPage = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000))

            navigate("/dashboard")
        } catch (error) {
            console.error("Login failed", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-fit w-1/2 flex flex-col gap-5 items-center justify-center p-4">
            <h2 className="text-2xl font-black tracking-tight">
                ShortLink
            </h2>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 w-full max-w-md">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">Welcome Back</h1>
                    <p className="text-sm text-gray-500">Please enter your details to sign in.</p>
                </div>

                <form onSubmit={handleLogin}>
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="name@company.com"
                        required
                    />

                    <div className="relative">
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
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all"
                                required
                            />
                            <Button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                <FiEye size={18} />
                            </Button>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Button type="submit" variant="blue" isLoading={isLoading}>
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
                <Button
                    onClick={() => navigate("/register")}
                    className="text-blue-600 font-semibold hover:underline"
                >
                    Sign up
                </Button>
            </p>
        </div>
    )
}

export default LoginPage