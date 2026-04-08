import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { FiLink2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        profession: "",
        password: "",
        confirmPassword: ""
    })
    const [error, setError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!")
            setIsLoading(false)
            return
        }

        try {
            const response = await fetch("http://localhost:8888/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullname: formData.fullname,
                    email: formData.email,
                    profession: formData.profession || "Developer",
                    password: formData.password,
                }),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || "Registration failed")
            }

            alert("Registration successful! Please login.")
            navigate("/login")
        } catch (error) {
            console.error("Registration failed", error)
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-fit w-1/2 rounded-xl flex flex-col items-center justify-center p-4">
            <div className="mb-8 flex flex-col gap-3 justify-center items-center">
                <div className="bg-blue-300 h-fit w-10 rounded-lg flex justify-center text-blue-600">
                    <FiLink2 className="w-5 h-5" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h1>
                <p className="text-slate-500">Join the elite architects of the web.</p>
            </div>

            <div className="bg-white/50 p-8 rounded-xl w-full max-w-md">
                {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 text-center">
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleRegister} className="flex flex-col justify-center gap-4">
                    <Input
                        label="Full Name"
                        name="fullname"
                        type="text"
                        placeholder="John Doe"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Profession"
                        name="profession"
                        type="text"
                        placeholder="Fullstack Developer"
                        value={formData.profession}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        helperText="Minimum 6 characters"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    <div className="mt-2">
                        <Button type="submit" variant="blue" isLoading={isLoading} className="w-full">
                            Sign Up
                        </Button>
                    </div>
                </form>

                <p className="mt-6 text-center text-xs text-slate-500 leading-relaxed">
                    By signing up, you agree to our{" "}
                    <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and{" "}
                    <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </p>
            </div>

            <p className="mt-8 text-sm text-slate-600">
                Already have an account?{" "}
                <button 
                    onClick={() => navigate("/login")} 
                    className="text-blue-600 font-semibold hover:underline"
                >
                    Log in
                </button>
            </p>
        </div>
    )
}

export default RegisterPage