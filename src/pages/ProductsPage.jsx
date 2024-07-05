import React from 'react';

import CS3Propeller from '../assets/propellers/cs3-propeller-square.jpg'
import Throttle from '../assets/throttle/throttle-square.jpg'
import {Link} from "react-router-dom";

const ProductsPage = () => {
  return (
    <div className="flex-grow">
      <div className="content container mx-auto p-6 max-w-6xl">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-row mt-10">
            <div className="flex flex-col">
              <div className="flex flex-row mb-4">
                <h1 className="text-2xl md:text-3xl font-black text-left md:text-center">Produkty WERENC</h1>
              </div>
              <div className="flex flex-row mt-12">
                <div className="flex flex-col w-1/2">
                  <Link to={"/products/propellerSeries"}><button>
                    <div className="bg-white hover:scale-110 mx-5 my-5 transition-transform duration-300 shadow-zinc-800 drop-shadow hover:drop-shadow-2xl rounded-lg p-6">
                      <img src={CS3Propeller} alt="Carbonowe śmigło WERENC CS3"/>
                      <h1 className="text-3xl">Śmigła WERENC</h1>
                    </div>
                  </button></Link>
                </div>
                <div className="flex flex-col w-1/2">
                  <button>
                      <div
                        className="bg-white hover:scale-110 mx-5 my-5 transition-transform duration-300 shadow-zinc-800 drop-shadow hover:drop-shadow-2xl rounded-lg p-6">
                      <img src={Throttle} alt="Carbonowe śmigło WERENC CS3"/>
                      <h1 className="text-3xl">Manetki WERENC</h1>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
