import { useNavigate } from "react-router-dom"
import Button from "./Button"

const NavigationBar = () => {
    const navigate = useNavigate()
    
    return (
        <div className="flex flex-row items-center justify-between bg-white/50 shadow-gray-100 fixed w-full z-10 px-10 py-2">
            <div>
                <ul className="list-none flex flex-row gap-4">
                    <li className="text-xl font-extrabold">ShortLink</li>
                    <li>Dashboard</li>
                    <li>Analtics</li>
                    <li>Links</li>
                </ul>
            </div>
            <div className="flex flex-row gap-5">
                <Button 
                    variant="white"
                    onClick={() => navigate('/auth/login')}
                >Login</Button>
                <Button 
                    variant="blue"
                    onClick={() => navigate('/auth/register')}
                >Sign up Free</Button>
            </div>
        </div>
    )
}

export default NavigationBar