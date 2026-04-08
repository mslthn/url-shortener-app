import { GrFormNextLink } from "react-icons/gr"; 
import { GrFormPreviousLink } from "react-icons/gr"; 
import { BsFillTrash3Fill } from "react-icons/bs"; 
import { BiCopyAlt } from "react-icons/bi"; 
import { BiCalendar } from "react-icons/bi"; 
import { FiLink2 } from "react-icons/fi"; 
import { BiFilter } from "react-icons/bi"; 
import { BiSearchAlt2 } from "react-icons/bi"; 
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { FiBarChart2 } from "react-icons/fi";

const Dashboard = () => {
    const [links, setLinks] = useState([])
    const [totalActive, setTotalActive] = useState(0)
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    const fetchLinks = async () => {
        setIsLoading(true)
        try {
            const token = localStorage.getItem("token")
            const response = await fetch(`http://localhost:8888/api/v1/links?page=${page}&search=${search}`, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            const result = await response.json()
            if (response.ok) {
                setLinks(result.data)
                setTotalActive(result.total_count || result.data.length) 
                setTotalPages(result.total_pages || 1)
            }
        } catch (error) {
            console.error("Failed to fetch links", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchLinks()
    }, [page, search])

    const handleCopy = (slug) => {
        const fullLink = `http://localhost:8888/${slug}`
        navigator.clipboard.writeText(fullLink)
        alert("Link copied to clipboard!")
    }

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this link?")) return
        
        try {
            const token = localStorage.getItem("token")
            const response = await fetch(`http://localhost:8888/api/v1/links/${id}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            })
            if (response.ok) {
                fetchLinks()
            }
        } catch (error) {
            console.error("Delete failed", error)
        }
    }

    return (
        <div className="flex flex-row justify-center min-h-screen bg-blue-100/50">
            <div className="w-full max-w-4xl mt-30 px-6 flex flex-col gap-8">
                
                <div className="flex flex-row justify-between items-end">
                    <div className="flex flex-col gap-2">
                        <div className="text-3xl font-extrabold text-gray-900">My Links</div>
                        <div className="text-gray-500">Manage and track your shortened digital assets.</div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Active</div>
                        <div className="text-4xl font-black text-blue-600">{totalActive? totalActive : "0"}</div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative flex justify-between items-center gap-3 bg-white p-2 rounded-xl">
                    <div className="p-3 text-gray-400">
                        <BiSearchAlt2 size={20} />
                    </div>
                    <Input 
                        type="text"
                        placeholder="Search by name or URL..."
                        className="w-lg outline-none bg-transparent"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button className="p-3 text-gray-400 hover:text-gray-600">
                        <BiFilter size={20} />
                    </Button>
                </div>

                <div className="flex flex-col gap-4">
                    {links.length > 0 ? links.map((link) => (
                        <div key={link.id} className="bg-white border border-gray-100 hover:border-blue-200 transition-all flex flex-row justify-between p-5 rounded-2xl shadow-sm group">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <FiLink2 className="text-blue-500" size={18} />
                                    <p className="text-lg text-blue-600 font-bold hover:underline cursor-pointer">
                                        shrt.lnk/{link.slug}
                                    </p>
                                </div>
                                <div className="text-sm text-gray-400 max-w-md truncate">
                                    {link.original_url}
                                </div>
                                <div className="flex flex-row gap-6 mt-2 text-xs font-semibold text-gray-400 uppercase tracking-tight">
                                    <div className="flex items-center gap-1">
                                        <BiCalendar /> {new Date(link.created_at).toLocaleDateString()}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FiBarChart2 /> {link.click_count} Clicks
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <Button 
                                    onClick={() => handleCopy(link.slug)}
                                    className="p-2 bg-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                                >
                                    <BiCopyAlt size={18} />
                                </Button>
                                <Button 
                                    onClick={() => handleDelete(link.id)}
                                    className="p-2 bg-gray-200 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                                >
                                    <BsFillTrash3Fill size={18} />
                                </Button>
                            </div>
                        </div>
                    )) : (
                        <div className="text-center p-10 text-gray-400">No links found.</div>
                    )}

                    <div className="flex flex-row justify-between items-center mt-4">
                        <Button 
                            variant="white" 
                            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                            className="flex items-center gap-2 border border-gray-200 shadow-sm"
                        >
                            <GrFormPreviousLink /> Prev Page
                        </Button>
                        
                        <div className="text-sm font-medium text-gray-500">
                            <span className="text-blue-600 font-bold">{page}</span> of {totalPages}
                        </div>
                        
                        <Button 
                            variant="white" 
                            onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={page === totalPages}
                            className="flex items-center gap-2 border border-gray-200 shadow-sm"
                        >
                            Next <GrFormNextLink />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard