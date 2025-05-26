import { Route, Routes } from "react-router-dom"
import Endlayout from "./Endlayout"
import Home from "../Pages/Home"
import Aboutus from "../Pages/Aboutus"
import Contactus from "../Pages/Contactus"
import Offers from "../Pages/Offers"
import Gallery from "../Pages/Gallery"
import Admin from "../Pages/Admin"
import Notpage from "../Pages/Notpage"

const Endroute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Endlayout />}>
                    <Route index element={<Home />} />
                    <Route index element={<Aboutus />} />
                    <Route index element={<Offers />} />
                    <Route index element={<Gallery />} />
                    <Route index element={<Contactus />} />
                    <Route index element={<Admin />} />
                    <Route index element={<Notpage />} />
                </Route>
            </Routes>
        </>
    )
}

export default Endroute