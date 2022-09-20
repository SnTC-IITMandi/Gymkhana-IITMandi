import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./components/main.component.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
