import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/productsData.js';

const PropellerSeriesPage = () => {
  const propellerSeries = productsData.categories.propellers.series;

  return (
    <div className="flex-grow">
      <div className="content container mx-auto p-6 max-w-6xl">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-row mt-10">
            <div className="flex flex-col">
              <div className="flex flex-row mb-4">
                <h1 className="text-2xl md:text-3xl font-black text-left md:text-center"><span className="font-normal"><Link to="/products">Produkty WERENC</Link> / </span>Serie śmigieł WERENC</h1>
              </div>
              <div className="flex flex-wrap -mx-5 mt-12">
                {propellerSeries.map((series) => (
                  <Link to={`/products/propellerSeries/${series.id}`} key={series.id} className="w-full sm:w-1/2 px-5 mb-10">
                    <div className="bg-white hover:scale-110 transition-transform duration-300 shadow-zinc-800 drop-shadow hover:drop-shadow-2xl rounded-lg p-6">
                      <img src={series.photo} alt={series.name} className="w-full h-auto"/>
                      <h1 className="text-3xl text-center mt-4">{series.name}</h1>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropellerSeriesPage;
