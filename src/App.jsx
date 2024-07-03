import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PropellerPage from "./pages/PropellerPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/propeller/:id" element={<PropellerPage />} />
          </Routes>
    </Router>
  );
};

export default App;
