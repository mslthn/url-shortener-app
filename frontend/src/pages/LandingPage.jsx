import Button from "../components/Button"


const LandingPage = () => {

    return (
        <div className="bg-blue-100/80 min-h-2/4 flex flex-col gap-10">
            <div className="bg-white/80 flex flex-col justify-center items-center gap-5 my-10 mx-10 p-10 place-items-center h-3/4">
                <h1 className="text-7xl font-extrabold">Shorten URLs. <span className="text-blue-700">Share Easily.</span></h1>
                <p className="text-2xl w-3xl text-center">Create short, memorable links for your team communications. Transform long, cumbersome URLs into powerful digital assets that drive engagement.</p>
                <div className="flex flex-row gap-10">
                    <Button variant="blue">Get Started</Button>
                    <Button variant="white">Learn More</Button>
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
                        <svg className="p-5 bg-blue-300/50" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"></path></svg>
                        <p>Easy Create</p>
                        <p>Instantly generate high-performance short links with a single click or through our surgical API endpoints.</p>

                    </div>
                    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
                        <svg className="p-5 bg-blue-400/50" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 7H15V9H4zM4 11H15V13H4zM4 15H11V17H4zM19.299 12.292L14.999 16.583 13.707 15.292 12.293 16.707 14.999 19.411 20.711 13.708z"></path></svg>
                        <p>Custom Slugs</p>
                        <p>Maintain brand authority with readable, custom link endings that resonate with your digital audience.</p>

                    </div>
                    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
                        <svg className="p-5 bg-red-400/70" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 11a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5zm-6.712 3.006a6.983 6.983 0 0 0-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 0 1 3.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0 1 22 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"></path></g></svg>
                        <p>Team Ready</p>
                        <p>Collaborate across departments with shared workspaces, permissions, and unified analytics dashboards.</p>

                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-10 bg-white rounded-2xl mx-10 p-10">
                <div>
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