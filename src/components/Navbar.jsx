import React, {useState, useEffect, useRef} from 'react';
import {Link, useLocation} from "react-router-dom";
import propellerData from "../data/propellerData.js";
import productsData from "../data/productsData.js";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [propellerMenuOpen, setPropellerMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();

  const propellerSeries = productsData.categories.propellers.series;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const togglePropellerMenu = () => {
    setPropellerMenuOpen(!propellerMenuOpen);
  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
      setMenuOpen(false);
      closePropellerMenu();
    }
  };

  const closeMobileNavbar = () => {
    setMenuOpen(false);
    closePropellerMenu();
  }

  const closePropellerMenu = () => {
    setPropellerMenuOpen(false);
  }

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
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${scrolled || !isHomePage || menuOpen ? 'bg-zinc-800 shadow-zinc-800 shadow-md' : 'bg-transparent'}`}>
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>

          {/* main navbar */}

          <ul ref={menuRef} className={`hidden lg:flex md:items-center md:space-x-8 text-white nav-items`}>
            <Link to={"/"}>
              <li className='w-full hover:text-amber-500'>Home</li>
            </Link>
            <Link to={"/products"}>
              <li className='w-full hover:text-amber-500'>Produkty</li>
            </Link>
            {/*<Link to={"#"}><li className='w-full hover:text-amber-500'>Aktualności</li></Link>*/}
            <Link to={"/products/propellerSeries"}>
              <li className="relative group">
                <a className="cursor-pointer w-full hover:text-amber-500">
                  Śmigła
                </a>
                <ul className="absolute left-0 hidden group-hover:block bg-zinc-800 p-4 rounded-md shadow-lg">
                  {propellerSeries.map(series => (
                    <li key={series.id} className="py-1">
                      <Link className="hover:text-amber-500 whitespace-nowrap" to={`/products/propellerSeries/${series.id}`}>{series.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            </Link>
            <Link to={"/products/throttle"}>
              <li className='w-full hover:text-amber-500'>Manetki</li>
            </Link>
            <Link to={"/service"}>
              <li className='w-full hover:text-amber-500'>Serwis</li>
            </Link>
            <Link to={"/dealers"}>
              <li className='w-full hover:text-amber-500'>Dealers</li>
            </Link>
            <Link to={"/contact"}>
              <li className='w-full hover:text-amber-500'>Kontakt</li>
            </Link>
          </ul>
        </div>

        {/* end main navbar */}

        {/* mobile navbar */}

        <ul ref={menuRef}
            className={`lg:hidden bg-zinc-800 text-center uppercase text-white text-md overflow-hidden transition-all duration-300 ${menuOpen ? 'pb-2 opacity-100' : 'max-h-0 opacity-0'}`}>
          <li><Link onClick={closeMobileNavbar} className="block border-zinc-700 border-t border-b px-4 py-4 hover:text-amber-500"
                    to={"/"}>Home</Link></li>
          <li><Link onClick={closeMobileNavbar} className="block px-4 py-4 border-zinc-700 border-b hover:text-amber-500"
                    to={"/products"}>Produkty</Link></li>
          <li className="relative">
            <p onClick={togglePropellerMenu}
                  className="block border-zinc-700 border-b px-4 py-4 hover:text-amber-500"
                  >Śmigła</p>
            <ul className={`bg-zinc-700 ${propellerMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}>
              {propellerSeries.map(series => (
                <li key={series.id} className="">
                  <Link onClick={closeMobileNavbar} className="block px-4 py-4 border-zinc-800 border-b hover:text-amber-500 whitespace-nowrap"
                        to={`/products/propellerSeries/${series.id}`}>{series.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link onClick={closeMobileNavbar} className="block px-4 py-4 border-zinc-700 border-b hover:text-amber-500"
                    to={"/products/throttle"}>Manetki</Link></li>
          <li><Link onClick={closeMobileNavbar} className="block px-4 py-4 border-zinc-700 border-b hover:text-amber-500"
                    to={"/service"}>Serwis</Link></li>
          <li><Link onClick={closeMobileNavbar} className="block px-4 py-4 border-zinc-700 border-b hover:text-amber-500"
                    to={"/dealers"}>Dealers</Link></li>
          <li><Link onClick={closeMobileNavbar} className="block px-4 py-4 pb-2 hover:text-amber-500" to={"/contact"}>Kontakt</Link></li>
        </ul>

        {/* end mobile navbar*/}

      </nav>
    </>
  );
};

export default Navbar;
