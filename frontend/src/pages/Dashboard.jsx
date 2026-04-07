import Button from "../components/Button"
import Input from "../components/Input"

const Dashboard = () => {
    return (
        <div className="flex flex-row justify-center min-h-screen bg-blue-100/80">
            <div className="w-1/2 mt-20 rounded-xl flex flex-col gap-5">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-3"                                                                                                                                                                                                                                                                               >
                        <div className="text-2xl font-bold">My Links</div>
                        <div>Manage and track your shortened digital assets.</div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="text-2xl font-bold">TOTAL ACTIVE</div>
                        <div className="text-2xl font-bold">124</div>
                    </div>
                </div>
                <div>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path></svg>
                    <Input></Input>
                    <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H7C6.44772 9 6 8.55228 6 8Z" fill="currentColor"></path><path d="M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12Z" fill="currentColor"></path><path d="M11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H11Z" fill="currentColor"></path></svg>
                </div>
                <div className="flex flex-col gap-3">
                    <div className=" bg-white/50 flex flex-row gap-3 justify-between p-3">
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row gap-1 items-center">
                                <svg color="blue" fontSize={20} stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                {/* diganti link hasil shorten */}
                                <p className="text-xl text-blue-800 font-bold">
                                    link pendek
                                </p>
                            </div>
                            <div>link panjangggggggggg</div>
                            <div className="flex flex-row gap-5">
                                <div>tanggal</div>
                                <div>berapa klik</div>
                            </div>
                        </div>
                        <div>
                            <Button
                            //   onClick={} copy link
                            >
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></svg>
                            </Button>
                            <Button
                            //  onClick={} delete entity
                            >
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div><Button variant="white">&lt Prev Page</Button></div>
                        <div>
                            1
                            of
                            5
                        </div>
                        <div>
                            <Button variant="white">
                                <p>
                                    Next
                                </p>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M2,12 L22,12 M13,3 L22,12 L13,21"></path></svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard