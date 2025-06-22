import { Routes, Route } from "react-router-dom";
import Endlayout from "./Layout/Endlayout";
import Home from "./Pages/Home";
import Facility from "./Pages/facility";
import Aboutus from "./Pages/Aboutus";
import Room from "./Pages/Room";
import MyBooking from "./Pages/MyBooking";
import RoomDetails from "./pages_layout/RoomDetails";
import Admin from "./Pages/Admin";
import Notpage from "./Pages/Notpage";
import HotelRegis from "./pages_layout/HotelRegis";
import Layout from "./pages_layout/HotelOwner/Layout";
import Dashboard from "./pages_layout/HotelOwner/Dashboard";
import AddRoom from "./pages_layout/HotelOwner/AddRoom";
import ListRoom from "./pages_layout/HotelOwner/ListRoom";

function App() {
  return (
    <>
      {false && <HotelRegis />}
      <Routes>
        <Route path="/" element={<Endlayout />}>
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/room" element={<Room />} />
          <Route path="/room/:id" element={<RoomDetails />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/mybooking" element={<MyBooking />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Notpage />} />
        </Route>

        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-room" element={<AddRoom />} />
          <Route path="list-room" element={<ListRoom />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;