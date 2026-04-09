import { useNavigate } from "react-router-dom";
import { FiBarChart2, FiLink, FiCode, FiArrowLeft, FiAlertTriangle } from "react-icons/fi";
import Button from "../components/Button";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6 font-sans text-center">
            {/* Icon 404 Illustration */}
            <div className="relative mb-8">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center">
                    <FiLink className="w-10 h-10 text-slate-300 rotate-45" />
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white p-2 rounded-lg shadow-lg">
                    <FiAlertTriangle size={16} />
                </div>
            </div>

            {/* Main Message */}
            <h1 className="text-5xl font-black text-blue-600 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Page Not Found</h2>
            <p className="text-slate-500 max-w-md mb-10 leading-relaxed">
                The page you're looking for doesn't exist. It may have been moved, deleted, or the link might be broken.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full max-w-sm">
                <Button variant="primary" onClick={() => navigate("/dashboard")}>
                    <FiArrowLeft className="mr-1" /> Go to Dashboard
                </Button>
                <Button variant="secondary" onClick={() => window.open("mailto:support@shortlink.com")}>
                    Report an Issue
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3 text-left transition-hover hover:shadow-md cursor-pointer group">
                    <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <FiBarChart2 size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 text-sm">Check Analytics</h3>
                        <p className="text-slate-500 text-xs leading-relaxed mt-1">Track your active links and traffic sources in real-time.</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3 text-left transition-hover hover:shadow-md cursor-pointer group">
                    <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <FiLink size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 text-sm">New ShortLink</h3>
                        <p className="text-slate-500 text-xs leading-relaxed mt-1">Create a brand new architected URL in seconds.</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3 text-left transition-hover hover:shadow-md cursor-pointer group">
                    <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <FiCode size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 text-sm">Developer API</h3>
                        <p className="text-slate-500 text-xs leading-relaxed mt-1">Integrate our link infrastructure into your apps.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;