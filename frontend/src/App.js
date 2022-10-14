import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cultural from "./components/Cultural.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Hostel from "./components/Hostel.jsx";
import Senate from "./components/Senate.jsx";
import Technical from "./components/Technical.jsx";
import Literary from "./components/Literary.jsx";
import Research from "./components/Research.jsx";
import Sports from "./components/Sports.jsx";
import Contact from "./components/Contact.jsx";
import WallOfFame from "./components/WallOfFame.jsx";
import Contributors from "./components/Contributors.jsx";
import News from "./components/News";
import Error from "./components/Error404"
function App() {
  return (
    <div className="probootstrap-page-wrapper">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/hostel" element={<Hostel />} />
          <Route path="/senate" element={<Senate />} />
          <Route path="/research" element={<Research />} />
          <Route path="/literary" element={<Literary />} />
          <Route path="/cultural" element={<Cultural />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/wall_of_fame" element={<WallOfFame />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
