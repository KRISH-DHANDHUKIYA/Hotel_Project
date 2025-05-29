import { Routes, Route } from "react-router-dom";
import Endlayout from "./Layout/Endlayout"
import Contactus from "./Pages/Contactus"
import Home from "./Pages/Home"
import Aboutus from "./Pages/Aboutus";
import Gallery from "./Pages/Gallery"
import Offers from "./Pages/Offers"
import Admin from "./Pages/Admin"
import Notpage from "./Pages/Notpage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Endlayout />}>
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Notpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;