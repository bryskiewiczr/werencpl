import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollProvider } from "./context/ScrollContext.jsx";
import PropellerPage from "./pages/PropellerPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <Router>
      <ScrollProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/propeller/:id" element={<PropellerPage />} />
          </Routes>
        <Footer />
      </ScrollProvider>
    </Router>
  );
};

export default App;
