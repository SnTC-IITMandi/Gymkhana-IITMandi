import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer.component.js';
import Home from "./components/home.component.js";
import Hostel from './components/hostel.component.js';
import Senate from './components/senate.component.js';
import Technical from './components/technical.component.js';

function App() {
  return (
    <div className="probootstrap-page-wrapper">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/technical" exact element={<Technical/>} />
          <Route path="/hostel" exact element={<Hostel/>} />
          <Route path="/senate" exact element={<Senate/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
