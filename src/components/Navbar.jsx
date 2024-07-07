import React, {useState, useEffect, useRef} from 'react';
import {Link, useLocation} from "react-router-dom";
import propellerData from "../data/propellerData.js";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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
                  {propellerData.map(propeller => (
                    <li key={propeller.id} className="py-1">
                      <Link className="hover:text-amber-500 whitespace-nowrap"
                            to={`/propeller/${propeller.id}`}>{propeller.name}</Link>
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
          <li><Link className="block px-4 py-2" to={"/"}>Home</Link></li>
          {/*<li><a href="#" className="block px-4 py-2">Aktualności</a></li>*/}
          <li className="relative">
            <a href="#" className="block px-4 py-2">
              Śmigła
            </a>
            <ul className={`bg-zinc-800 ${menuOpen ? 'block' : 'hidden'}`}>
              {propellerData.map(propeller => (
                <li key={propeller.id} className="px-4 py-2">
                  <Link className="hover:text-amber-500" to={`/propeller/${propeller.id}`}>{propeller.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li><a href="#" className="block px-4 py-2">Manetki</a></li>
          <li><Link className="block px-4 py-2" to={"/service"}>Serwis</Link></li>
          <li><Link className="block px-4 py-2" to={"/dealers"}>Dealers</Link></li>
          <li><Link className="block px-4 py-2" to={"/contact"}>Kontakt</Link></li>
        </ul>

        {/* end mobile navbar*/}

      </nav>
    </>
  );
};

export default Navbar;
