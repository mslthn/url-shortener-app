import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const AuthLayout = () => {
    return (
        <>
            <section className="bg-blue-100/80 flex flex-col justify-center items-center min-h-screen">
                <Outlet />
            </section>
            <Footer />
        </>
    )
}
export default AuthLayout