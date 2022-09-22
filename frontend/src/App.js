import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer.component.js';
import Home from "./components/home.component.js";
import Navbar from './components/navbar.component.js';

function App() {
  return (
    <div className="probootstrap-page-wrapper">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
