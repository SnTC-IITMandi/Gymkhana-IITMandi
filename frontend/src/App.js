import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cultural from './components/cultural.component.js';
import Footer from './components/footer.component.js';
import Home from "./components/home.component.js";
import Hostel from './components/hostel.component.js';
import Senate from './components/senate.component.js';
import Technical from './components/technical.component.js';
import Literary from './components/literary.component.js';
import Research from './components/research.component.js';
import Sports from './components/sports.component.js';

function App() {
  return (
    <div className="probootstrap-page-wrapper">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/technical" element={<Technical/>} />
          <Route path="/hostel" element={<Hostel/>} />
          <Route path="/senate" element={<Senate/>} />
          <Route path="/research" element={<Research />} />
          <Route path="/literary" element={<Literary />} />
          <Route path="/cultural" element={<Cultural />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
