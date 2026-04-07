import Button from "../components/Button"
import Input from "../components/Input"


const CreateLinkPage = () => {
    return (
        <div className="flex flex-row justify-center min-h-screen bg-blue-100/80">
            <div className="w-1/2 mt-20 rounded-xl flex flex-col gap-5">
                <div>
                    <div className="flex flex-row gap-2">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M2,12 L22,12 M13,3 L22,12 L13,21" transform="matrix(-1 0 0 1 24 0)"></path></svg>
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
                            <svg color="blue" fontSize={20} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
                            <p className="text-blue-700 font-medium">LIVE PREVIEW</p>
                        </div>
                        <div>
                            Your short link will be: https://short.link/my-custom-slug
                        </div>
                    </div>
                    <div className="flex flex-row gap-10">
                        <Button variant="blue">
                            Create Link
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"></path></svg>
                        </Button>
                        <Button>Cancel</Button>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-5 items-center">
                        <div className="bg-red-200 p-2 rounded-full">
                            <svg color="red" fontSize={20} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 0 0-11.3 0L266.3 586.7a8.03 8.03 0 0 0 0 11.3l39.5 39.7z"></path></svg>
                        </div>
                        <div>
                            <p>Real-Time Analytics</p>
                            <p>Track every click, geographical location, and referral source instantly.</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 items-center">
                        <div className="bg-blue-300 p-2 rounded-full">
                            <svg color="blue" fontSize={20} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clip-rule="evenodd"></path><path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"></path></svg>
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