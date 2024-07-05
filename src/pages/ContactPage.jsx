import React from 'react';
import polandIcon from '../assets/icons/poland.png';
import worldIcon from '../assets/icons/worldwide.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../components/ContactForm.jsx";

const ContactPage = () => {
  return (
    <div className="flex-grow">
      <div className="content container mx-auto p-6 max-w-6xl">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-col md:flex-row justify-around space-y-10 md:space-y-0 md:space-x-24 mt-10">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-row items-center space-x-4 mb-2">
                <img src={polandIcon} width={30} alt="weight" />
                <h1 className="text-2xl md:text-3xl font-bold">Sprzedaż krajowa</h1>
              </div>
              <div className="flex flex-row md:pl-12">
                <a className="hover:text-amber-500 transition-colors duration-300 text-regular md:text-xl"
                   href="https://www.facebook.com/profile.php?id=100048368456428">
                  <FontAwesomeIcon icon={faFacebook} />
                  <span className="pl-2">odwiedź nas na Facebooku</span>
                </a>
              </div>
              <div className="flex flex-row md:pl-12">
                <a className="hover:text-amber-500 transition-colors duration-300 text-regular md:text-xl"
                   href="tel:+48791068035">
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="pl-2">(+48) 791 068 035</span>
                </a>
              </div>
              <div className="flex flex-row md:pl-12">
                <a className="hover:text-amber-500 transition-colors duration-300 text-regular md:text-xl"
                   href="mailto:mwerenc@wp.pl">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="pl-2">mwerenc@wp.pl</span>
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-row items-center space-x-4 mb-2">
                <img src={worldIcon} width={30} alt="weight"/>
                <h1 className="text-2xl md:text-3xl font-bold">Foreign sales</h1>
              </div>
              <div className="flex flex-row md:pl-12">
              <a className="hover:text-amber-500 transition-colors duration-300 text-regular md:text-xl"
                   href="https://www.facebook.com/profile.php?id=100048368456428">
                  <FontAwesomeIcon icon={faFacebook} />
                  <span className="pl-2">visit us on Facebook</span>
                </a>
              </div>
              <div className="flex flex-row md:pl-12">
                <a className="hover:text-amber-500 transition-colors duration-300 text-regular md:text-xl"
                   href="tel:+48791068035">
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="pl-2">(+48) 791 068 035</span>
                </a>
              </div>
              <div className="flex flex-row md:pl-12">
                <a className="hover:text-amber-500 transition-colors duration-300 text-regular md:text-xl"
                   href="mailto:mwerenc@wp.pl">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="pl-2">mwerenc@wp.pl</span>
                </a>
              </div>
            </div>
          </div>
          <hr className="mt-12" />
          <div className="flex flex-col md:items-center mt-10">
            <h1 className="text-2xl md:text-3xl font-bold pb-12">lub użyj formularza</h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
