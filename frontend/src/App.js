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
import ContactStyling from "./components/Styling/ContactStyling"
import NewsStyling from "./components/Styling/NewsStyling"
import ErrorStyling from "./components/Styling/ErrorStyling"
import WallOfFameJS from "./components/JS/WallOfFameJS.jsx";

function App() {
  return (
    <div className="probootstrap-page-wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<><Home /> <Footer /> </>} />
          <Route path="/technical" element={<><Technical /><Footer/></>} />
          <Route path="/hostel" element={<><Hostel /><Footer/></>} />
          <Route path="/academicCouncil" element={<><Senate /><Footer/></>} />
          <Route path="/research" element={<><Research /><Footer/></>} />
          <Route path="/literary" element={<><Literary /><Footer/></>} />
          <Route path="/cultural" element={<><Cultural /><Footer/></>} />
          <Route path="/sports" element={<><Sports /><Footer/></>} />
          <Route path="/contacts" element={<><ContactStyling /><Contact /><Footer/></>} />
          <Route path="/wall_of_fame" element={<><WallOfFame /><Footer/><WallOfFameJS /></>} />
          <Route path="/contributors" element={<><Contributors /><Footer/></>} />
          <Route path="/news" element={<><NewsStyling /><News /><Footer/></>} />
          <Route path="*" element={<><ErrorStyling /><Error/></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
