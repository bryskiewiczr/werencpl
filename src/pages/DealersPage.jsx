import React from 'react';
import dealersData from "../data/dealers.js";
import {faCircleUser, faMapLocationDot, faPhone, faEnvelope, faGlobe} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DealersPage = () => {
  return (
    <div className="flex-grow">
      <div className="content container mx-auto p-6 max-w-6xl">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-row mt-10">
            <div className="flex flex-col">
              <div className="flex flex-row mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-left md:text-center">Dealers selling WERENC equipment outside of Poland:</h1>
              </div>
              {dealersData.map(dealer => (
                <>
                  <div className="flex flex-row mt-6">
                    <h1 className="font-bold text-lg md:text-xl uppercase mb-2">{dealer.country}</h1>
                  </div>
                  <div className="flex flex-row">
                    <p className="text-sm md:text-lg"><FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon><span className="pl-2">{dealer.name}</span></p>
                  </div>
                  <div className="flex flex-row">
                    <p className="text-sm md:text-lg"><FontAwesomeIcon icon={faMapLocationDot}></FontAwesomeIcon><span className="pl-2">{dealer.location}</span></p>
                  </div>
                  <div className="flex flex-row">
                    <p className="text-sm md:text-lg"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon><a className="pl-2" href={'callto:' + dealer.phone}>{dealer.phone}</a>
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <p className="text-sm md:text-lg"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon><a className="pl-2" href={'mailto:' + dealer.mail}>{dealer.mail}</a></p>
                  </div>
                  {dealer.website !== "" && (
                    <div className="flex flex-row">
                      <p className="text-sm md:text-lg"><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                        <span className="pl-2">{dealer.website}</span></p>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
          <div className="flex flex-row mt-10">
            <div className="flex flex-col">
            <div className="flex flex-row mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-left md:text-center">Join us in bringing excellence
                  to customers worldwide!</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row mt-8">
                <p className="text-sm md:text-xl">WERENC is continually seeking enthusiastic partners to represent our
                  high-quality products globally. If you are passionate about becoming a WERENC dealer, we would love to
                  hear from you.</p>
              </div>
              <div className="flex flex-row  mt-8">
                <p className="text-sm md:text-xl">Send us an email at <span
                  className="text-sky-500 underline">mwerenc@wp.pl</span>, or click the button below to head over to our
                  contact form.</p>
              </div>
              <div className="flex flex-row mt-8">
                <p className="text-sm md:text-xl">Make sure to select <span
                  className="font-bold">DEALERSHIP INQUIRY</span> in the subject drop-down menu.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-12">
            <a className="w-full" href="/contact">
              <button
                className="btn rounded-none text-xl md:text-3xl uppercase bg-zinc-800 hover:bg-amber-500 text-amber-500 hover:text-zinc-800 w-full h-12 md:h-16">contact
                us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealersPage;
