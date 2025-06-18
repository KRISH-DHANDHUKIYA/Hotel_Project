import { Route, Routes } from "react-router-dom"
import Endlayout from "./Endlayout"
import Home from "../Pages/Home"
import Aboutus from "../Pages/Aboutus"
import Facility from "../Pages/facility"
import Room from "../Pages/Room"
import Admin from "../Pages/Admin"
import Notpage from "../Pages/Notpage"

const Endroute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Endlayout />}>
                    <Route index element={<Home />} />
                    <Route index element={<Aboutus />} />
                    <Route index element={<Room />} />
                    <Route index element={<Facility />} />
                    <Route index element={<Admin />} />
                    <Route index element={<Notpage />} />
                </Route>
            </Routes>
        </>
    )
}

export default Endroute