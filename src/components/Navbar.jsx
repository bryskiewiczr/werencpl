import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import propellerData from "../data/propellerData.js";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <>
      <nav className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${scrolled || !isHomePage || menuOpen ? 'bg-zinc-800 shadow-zinc-800 shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto p-12 flex justify-between items-center h-16">
          <h1 className={`text-white text-5xl blade-runner-font flex items-center`}>
            <Link to="/"><span>werenc</span><span className="text-werenc-orange">.pl</span></Link>
          </h1>
          <div className="lg:hidden flex items-center">
            <button
              ref={buttonRef}
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              className={`focus:outline-none text-white`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
          <ul ref={menuRef} className={`hidden lg:flex md:items-center md:space-x-8 text-white nav-items`}>
            <li><Link to={"/"}>Home</Link></li>
            <li><a href="#">Aktualności</a></li>
            <li tabIndex="0" className="relative">
              <a className="cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
                Śmigła
              </a>
              {dropdownOpen && (
                <ul className="p-2 bg-black absolute top-full mt-1">
                  {propellerData.map(propeller => (
                    <li key={propeller.id}>
                      <Link to={`/propeller/${propeller.id}`}>{propeller.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><a href="#">Manetki</a></li>
            <li><a href="#">Serwis</a></li>
            <li><a href="#">Dealerzy</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
        </div>
        <ul ref={menuRef} className={`lg:hidden bg-zinc-800 text-center uppercase text-white text-md overflow-hidden transition-all duration-300 ${menuOpen ? 'pb-2 opacity-100' : 'max-h-0 opacity-0'}`}>
          <li><a href="#" className="block px-4 py-2">Home</a></li>
          <li><a href="#" className="block px-4 py-2">Aktualności</a></li>
          <li className="relative">
            <a href="#" onClick={() => setDropdownOpen(!dropdownOpen)} className="block px-4 py-2">
              Śmigła
            </a>
            {dropdownOpen && (
              <ul className='bg-zinc-800'>
                {propellerData.map(propeller => (
                  <li key={propeller.id}>
                    <Link to={`/propeller/${propeller.id}`}>{propeller.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li><a href="#" className="block px-4 py-2">Manetki</a></li>
          <li><a href="#" className="block px-4 py-2">Serwis</a></li>
          <li><a href="#" className="block px-4 py-2">Dealerzy</a></li>
          <li><a href="#" className="block px-4 py-2">Kontakt</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
