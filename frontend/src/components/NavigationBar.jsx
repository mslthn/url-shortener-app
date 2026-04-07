import Button from "./Button"

const NavigationBar = () => {
    return (
        <div className="flex flex-row justify-between bg-white shadow-gray-100 fixed w-full z-10 px-10 py-5">
            <div>
                <ul className="list-none flex flex-row gap-4">
                    <li className="text-xl font-extrabold">ShortLink</li>
                    <li>Dashboard</li>
                    <li>Analtics</li>
                    <li>Links</li>
                </ul>
            </div>
            <div className="flex flex-row gap-5">
                <Button variant="white">Login</Button>
                <Button variant="blue">Sign up Free</Button>
            </div>
        </div>
    )
}

export default NavigationBar