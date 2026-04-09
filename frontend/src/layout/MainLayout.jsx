import { Outlet } from "react-router-dom";

import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavigationBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout