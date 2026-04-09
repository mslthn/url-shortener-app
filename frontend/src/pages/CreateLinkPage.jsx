import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineQrcode, AiOutlineThunderbolt, AiOutlineEye } from "react-icons/ai"; 
import { BsGraphUp } from "react-icons/bs"; 
import { BiArrowBack } from "react-icons/bi"; 
import Button from "../components/Button";
import Input from "../components/Input";

const CreateLinkPage = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [destinationUrl, setDestinationUrl] = useState("")
    const [customSlug, setCustomSlug] = useState("")
    const [error, setError] = useState("")

    const handleCreateLink = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        try {
            const token = localStorage.getItem("token")
            const response = await fetch("http://localhost:8888/api/v1/links", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    original_url: destinationUrl,
                    slug: customSlug
                }),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || "Failed to create link")
            }

            navigate("/dashboard")
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-row justify-center min-h-screen bg-blue-50/50 p-4">
            <div className="w-full max-w-2xl mt-16 flex flex-col gap-6">
                
                <div className="flex flex-col gap-1">
                    <button 
                        onClick={() => navigate("/dashboard")}
                        className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors w-fit"
                    >
                        <BiArrowBack /> Back to Dashboard
                    </button>
                    <h1 className="text-2xl font-black text-slate-900 mt-2">Create New Short Link</h1>
                    <p className="text-slate-500">Transform your long URLs into clean, manageable assets.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-6">
                    {error && (
                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleCreateLink} className="flex flex-col gap-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
                                Destination URL <span className="text-red-500">*</span>
                            </label>
                            <Input 
                                placeholder="https://example.com/your-long-url-here"
                                value={destinationUrl}
                                onChange={(e) => setDestinationUrl(e.target.value)}
                                required
                            />
                            <p className="text-[11px] text-slate-400 mt-2 font-medium">Ensure your URL starts with http:// or https://</p>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
                                Custom Slug (Optional)
                            </label>
                            <div className="flex items-center">
                                <div className="bg-slate-100 border border-r-0 border-slate-200 px-3 py-2.5 rounded-l-lg text-slate-400 text-sm font-medium">
                                    short.link/
                                </div>
                                <input 
                                    className="w-full border border-slate-200 p-2 rounded-r-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                    placeholder="my-custom-slug"
                                    value={customSlug}
                                    onChange={(e) => setCustomSlug(e.target.value)}
                                />
                            </div>
                            <p className="text-[11px] text-slate-400 mt-2 font-medium">Leave blank to generate a random unique identifier.</p>
                        </div>

                        <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 border-dashed">
                            <div className="flex flex-row gap-2 items-center text-blue-600 mb-1">
                                <AiOutlineEye size={18} />
                                <p className="text-xs font-black uppercase tracking-widest">Live Preview</p>
                            </div>
                            <div className="text-sm font-semibold text-slate-700 break-all">
                                Your short link will be: <span className="text-blue-600">https://short.link/{customSlug || "random-id"}</span>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 pt-2">
                            <Button variant="blue" type="submit" isLoading={isLoading} className="flex items-center gap-2 px-8">
                                Create Link <AiOutlineThunderbolt />
                            </Button>
                            <Button type="button" onClick={() => navigate("/dashboard")} className="text-slate-500 font-bold">
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-4 px-2">
                    <div className="flex flex-row gap-4 items-start">
                        <div className="bg-orange-100 p-2 rounded-xl text-orange-600">
                            <BsGraphUp size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-800">Real-Time Analytics</p>
                            <p className="text-xs text-slate-500 leading-relaxed">Track every click, geographical location, and source instantly.</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 items-start">
                        <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                            <AiOutlineQrcode size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-800">Auto-generated QR</p>
                            <p className="text-xs text-slate-500 leading-relaxed">Every link automatically creates a high-resolution QR code.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateLinkPage