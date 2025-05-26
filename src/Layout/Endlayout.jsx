import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Endlayout = () => {
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Endlayout