import { Routes, Route } from "react-router-dom"
import Endlayout from "./Layout/Endlayout"
import Home from "./Pages/Home"
import Facility from "./Pages/facility"
import Aboutus from "./Pages/Aboutus"
import Room from "./Pages/Room"
import RoomDetails from "./pages_layout/RoomDetails"
import Admin from "./Pages/Admin"
import Notpage from "./Pages/Notpage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Endlayout />}>
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/room" element={<Room />} />
         <Route path="/room/:id" element={<RoomDetails />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Notpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;