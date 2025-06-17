import { Routes, Route } from "react-router-dom";
import Endlayout from "./Layout/Endlayout"
import Blog from "./Pages/Blog"
import Home from "./Pages/Home"
import Aboutus from "./Pages/Aboutus";
import Room from "./Pages/Room"
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Notpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;