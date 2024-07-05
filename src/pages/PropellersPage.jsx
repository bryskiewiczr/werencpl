import React from 'react';

import productsData from '../data/productsData.js'
import {Link, useParams} from "react-router-dom";

const PropellersPage = () => {

  const { id } = useParams();
  const series = productsData.categories.propellers.series
  const selectedSeries = series.find(s => s.id === id)
  const propellersBySeries = selectedSeries.products

  return (
    <div className="flex-grow">
      <div className="content container mx-auto p-6 max-w-6xl">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-row mt-10">
            <div className="flex flex-col">
              <div className="flex flex-row mb-4">
                <h1 className="text-2xl md:text-3xl font-black text-left md:text-center"><span className="font-normal"><Link to="/products">Produkty WERENC</Link> / <Link to="/products/propellerSeries">Serie śmigieł WERENC</Link> / </span>{selectedSeries.name}</h1>
              </div>
              <div className="flex flex-row mt-12 flex-wrap">
                {propellersBySeries.map((propeller) => (
                  // <Link to={`/products/propellerSeries/${series.id}`} key={series.id}>
                    <div className="flex flex-col w-1/2">
                      <button>
                        <div className="bg-white my-5 mx-5 hover:scale-110 transition-transform duration-300 shadow-zinc-800 drop-shadow hover:drop-shadow-2xl rounded-lg p-6">
                          <img src={propeller.photo} alt={propeller.name}/>
                          <h1 className="text-3xl">{propeller.name}</h1>
                        </div>
                      </button>
                    </div>
                  // </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropellersPage;
