import { RiTeamLine } from "react-icons/ri"; 
import { BiListCheck } from "react-icons/bi"; 
import { AiOutlineThunderbolt } from "react-icons/ai"; 
import Button from "../components/Button"
import {Navigate, useNavigate} from "react-router-dom"

const LandingPage = () => {
    const navigate = useNavigate()

    function toLoginPage() {
        navigate("/login")
    }

    function toRegisterPage() {
        navigate("/register")
    }

    return (
        <div className="bg-blue-100/80 min-h-2/4 flex flex-col gap-10">
            <div className="bg-white/50 rounded-xl flex flex-col justify-center items-center gap-5 mt-30 mx-10 p-10 h-3/4">
                <h1 className="text-7xl font-extrabold">Shorten URLs. <span className="text-blue-700">Share Easily.</span></h1>
                <p className="text-2xl w-3xl text-center">Create short, memorable links for your team communications. Transform long, cumbersome URLs into powerful digital assets that drive engagement.</p>
                <div className="flex flex-row gap-10">
                    <Button 
                        variant="blue"
                        onClick={ toLoginPage }
                    >
                        Get Started
                    </Button>
                    <Button 
                        variant="white"
                        onClick={ toRegisterPage }
                    >
                        Learn More
                    </Button>
                </div>
                <input></input>
            </div>
            <div className="flex flex-col gap-5">
                <div className="mx-10">
                    <h2>ARCHITECTURAL FEATURES</h2>
                    <h2 className="text-2xl font-bold">Built for Enterprise Precision</h2>
                </div>
                <div className="flex gap-20 mx-10">
                    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
                        <AiOutlineThunderbolt className="text-blue-700 bg-blue-400 w-10 h-10 rounded-xl"/>
                        <p>Easy Create</p>
                        <p>Instantly generate high-performance short links with a single click or through our surgical API endpoints.</p>

                    </div>
                    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
                        <BiListCheck className="text-blue-800 bg-blue-500 w-10 h-10 rounded-xl"/>
                        <p>Custom Slugs</p>
                        <p>Maintain brand authority with readable, custom link endings that resonate with your digital audience.</p>

                    </div>
                    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
                        <RiTeamLine className="text-red-700 bg-red-400 w-10 h-10 rounded-xl"/>
                        <p>Team Ready</p>
                        <p>Collaborate across departments with shared workspaces, permissions, and unified analytics dashboards.</p>

                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-10 bg-white rounded-2xl p-10 mx-10 max-h-fit">
                <div className="max-h-fit max-w-fit">
                    <img className="w-3/4 h-3/4" src="https://images.pexels.com/photos/15846497/pexels-photo-15846497.jpeg" alt="Photo by Rubaitul Azad" />
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-gray-400 font-medium">DATA DRIVEN INSIGHTS</p>
                    <h3 className="text-2xl font-bold">Observe your link architecture in real-time.</h3>
                    <p className="text-gray-400">Every click is a data point. Our dashboard provides surgical precision into where your traffic originates, who is engaging, and how your team communications are performing across the globe.</p>
                    <ul className="list-disc">
                        <li>Geographic Distribution Maps</li>
                        <li>Device & Browser Breakdown</li>
                        <li>UTM Parameter Tracking</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LandingPage