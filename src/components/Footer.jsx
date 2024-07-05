import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="mt-24 bg-zinc-800 text-zinc-500 py-4 w-full z-50 shadow-md shadow-zinc-800">
      <div className="container mx-auto p-4 lg:p-12 flex flex-col lg:flex-row justify-between items-center h-auto lg:h-16">
        <div className="mb-4 lg:mb-0">
          <p className="text-center lg:text-left">© 2024 Werenc - Mariusz Werenc. All Rights Reserved</p>
          <p className="text-center lg:text-left">Realizacja: Zero Dawn IT - Robert Bryśkiewicz</p>
        </div>
        <div className="flex flex-col lg:flex-row text-center lg:text-right space-y-4 lg:space-y-0 lg:space-x-10">
          <a className="hover:text-zinc-200 transition-colors duration-300" href="callto:+48791068035">
            <FontAwesomeIcon icon={faPhone} />
            <span className="pl-2">(+48) 791 068 035</span>
          </a>
          <a className="hover:text-zinc-200 transition-colors duration-300" href="mailto:mwerenc@wp.pl">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="pl-2">mwerenc@wp.pl</span>
          </a>
          <a className="hover:text-zinc-200 transition-colors duration-300" href="https://www.facebook.com/profile.php?id=100048368456428">
            <FontAwesomeIcon icon={faFacebook} />
            <span className="pl-2">WERENC.pl</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
