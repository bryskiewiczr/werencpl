import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollProvider } from "./context/ScrollContext.jsx";
import PropellerPage from "./pages/PropellerPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Router>
          <ScrollProvider>
            <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/propeller/:id" element={<PropellerPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            <Footer />
          </ScrollProvider>
        </Router>
      </div>
    </>
  );
};

export default App;

