import { AiOutlineQrcode } from "react-icons/ai"; 
import { BsGraphUp } from "react-icons/bs"; 
import { AiOutlineThunderbolt } from "react-icons/ai"; 
import { AiOutlineEye } from "react-icons/ai"; 
import { BiArrowBack } from "react-icons/bi"; 
import Button from "../components/Button"
import Input from "../components/Input"


const CreateLinkPage = () => {
    return (
        <div className="flex flex-row justify-center min-h-screen bg-blue-100/80">
            <div className="w-1/2 mt-20 rounded-xl flex flex-col gap-5">
                <div>
                    <div className="flex flex-row gap-2">
                        <BiArrowBack />
                        <p className="text-blue-700 font-bold">Back to Dashboard</p>
                    </div>
                    <p className="text-xl font-bold">Create New Short Link</p>
                    <p>Transform your long URLs into clean, manageable assets.</p>
                </div>
                <div className="bg-white p-5 rounded-xl">
                    <p className="font-medium">DESTINATION URL <span className="text-red-600">*</span></p>
                    <Input></Input>
                    <p>Ensure your URL starts with http:// or https://</p>

                    <p>CUSTOM SLUG (OPTIONAL)</p>
                    <Input></Input>
                    <p>Leave blank to generate a random unique identifier.</p>

                    <div>
                        <div className="flex flex-row gap-2 items-center">
                            <AiOutlineEye />
                            <p className="text-blue-700 font-medium">LIVE PREVIEW</p>
                        </div>
                        <div>
                            Your short link will be: https://short.link/my-custom-slug
                        </div>
                    </div>
                    <div className="flex flex-row gap-10">
                        <Button variant="blue">
                            Create Link
                            <AiOutlineThunderbolt />
                        </Button>
                        <Button>Cancel</Button>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-5 items-center">
                        <div className="bg-red-200 p-2 rounded-full">
                            <BsGraphUp />
                        </div>
                        <div>
                            <p>Real-Time Analytics</p>
                            <p>Track every click, geographical location, and referral source instantly.</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 items-center">
                        <div className="bg-blue-300 p-2 rounded-full">
                            <AiOutlineQrcode />
                        </div>
                        <div>
                            <p>Auto-generated QR</p>
                            <p>Every link automatically creates a high-resolution QR code for print.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateLinkPage