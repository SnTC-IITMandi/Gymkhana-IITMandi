import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer.component.js';
import Home from "./components/home.component.js";
import Literary from './components/literary.component.js';
import Research from './components/research.component.js';

function App() {
  return (
    <div className="probootstrap-page-wrapper">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/research" exact element={<Research />} />
          <Route path="/literary" exact element={<Literary />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
