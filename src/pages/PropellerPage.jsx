import React from 'react';
import {Link, useParams} from 'react-router-dom';
import ImageCarousel from "../components/ImageCarousel";

import productsData from '../data/productsData.js';

import lightIcon from "../assets/icons/feather-icon.png"
import quietIcon from "../assets/icons/quiet-icon.png"
import mirrorIcon from "../assets/icons/symmetry-icon.png"
import propellerIcon from "../assets/icons/propeller-icon.png"
import weightIcon from "../assets/icons/weight-icon.png"
import lengthIcon from "../assets/icons/length-icon.png"
import materialIcon from "../assets/icons/carbon-icon.png"

const PropellerPage = () => {
  const { seriesId, propellerId } = useParams();
  const series = productsData.categories.propellers.series.find(s => s.id === seriesId);
  const propeller = series.products.find(p => p.id === propellerId);

  if (!propeller) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl font-semibold text-gray-600">Propeller not found</div>
      </div>
    );
  }

  const patentedList = ["UNIVERSAL", "CS3", "S1", "3S1", "L4", "L3"];
  const hasPatent = patentedList.includes(propeller.id);
  const hubPatent = propeller.id === "UNIVERSAL";

  const images = propeller.photoList || [];
  const hasEngineList = propeller.hasDedicatedEngines || false;

  return (
    <>
      <div className="content container mx-auto p-6 mt-10 md:mt-0 max-w-6xl">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-row mt-10 mb-4">
            <h1 className="text-2xl md:text-3xl font-black text-left md:text-center"><span
              className="font-normal"><Link to="/products">Produkty WERENC</Link> / <Link
              to="/products/propellerSeries">Serie śmigieł WERENC</Link> / <Link
              to={`/products/propellerSeries/${series.id}`}>{series.name}</Link> / </span>{propeller.name}</h1>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex-grow">
              <h1 className="text-4xl md:text-6xl font-bold">{propeller.name}</h1>
              <p className="text-lg md:text-2xl font-regular">{propeller.desc}</p>
            </div>
            <div className="flex-shrink-0 w-1/3 md:w-1/2 lg:w-1/2 p-4">
              <div className="relative overflow-hidden aspect-w-3 aspect-h-1">
                <img src={propeller.photo} alt={propeller.name} className="object-contain w-full h-full"/>
              </div>
            </div>
          </div>

          <hr className="mt-10"/>
          <div className="flex flex-row">
            <div className="flex flex-col items-center">
              <div className="flex flex-row">
                <h1 className="text-2xl md:text-3xl font-bold py-8">Opis</h1>
              </div>
              <div className="flex flex-row text-justify">
                <p>{propeller.descExt}</p>
              </div>
                {propeller.additionalDetails && (
                  <div className="flex flex-row text-justify mt-10">
                    <p>{propeller.additionalDetails}</p>
                  </div>
                )}

              {hasPatent && (
                <div className="flex flex-row text-justify mt-10">
                  <p className="text-red-600 font-bold">Śmigło jest wzorem przemysłowym, zastrzeżonym w Urzędzie Patentowym od marca 2015 roku. Na każdym śmigle widnieje logotyp WERENC.</p>
                </div>
              )}

              {hubPatent && (
                <div className="flex flex-row text-justify">
                  <p className="text-red-600 font-bold">Piasta jest wzorem użytkowym, zastrzeżonym w Urzędzie Patentowym od marca 2015 roku. Na każdej piaście widnieje logotyp WERENC.</p>
                </div>
              )}

            </div>
          </div>

          <hr className="mt-10"/>
          <div className="flex flex-row">
          <div className="flex flex-col flex-grow items-center">
              <div className="flex flex-row">
                <h1 className="text-2xl md:text-3xl font-bold py-8">Parametry techniczne</h1>
              </div>
              <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20">
                <div className="flex flex-col items-center">
                  <div className="flex flex-row">
                    <img src={weightIcon} width={80} alt="weight"/>
                  </div>
                  <div className="flex flex-row">
                    <p className="italic font-bold pt-3">{propeller.weight}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-row">
                    <img src={lengthIcon} width={80} alt="length"/>
                  </div>
                  <div className="flex flex-row">
                    <p className="italic font-bold pt-3">{propeller.length}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-row">
                    <img src={materialIcon} width={80} alt="length"/>
                  </div>
                  <div className="flex flex-row">
                    <p className="italic font-bold pt-3">{propeller.materials}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {hasEngineList && (
            <>
              <hr className="mt-10"/>
              <div className="flex flex-row">
                <div className="flex flex-col flex-grow items-center">
                  <div className="flex flex-row">
                    <h1 className="text-2xl md:text-3xl font-bold py-8">Przeznaczenie</h1>
                  </div>
                  <ul>
                    {propeller.dedicatedEngines.map((engine, index) => (
                      <li key={index}>{engine}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          <hr className="mt-10"/>
          <div className="flex flex-row">
            <div className="flex flex-col flex-grow items-center">
              <div className="flex flex-row">
                <h1 className="text-2xl md:text-3xl font-bold py-8">Cechy</h1>
              </div>
              <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20 pt-2">
                <div className="flex flex-col items-center">
                  <div className="flex flex-row">
                    <img src={lightIcon} width={80} alt="light"/>
                  </div>
                  <div className="flex flex-row">
                    <p className="italic font-bold pt-3">niezwykle lekkie</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-row">
                    <img src={propellerIcon} width={80} alt="propeller"/>
                  </div>
                  <div className="flex flex-row">
                    <p className="italic font-bold pt-3">generują duży ciąg</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-row">
                    <img src={quietIcon} width={80} alt="quiet"/>
                  </div>
                  <div className="flex flex-row">
                    <p className="italic font-bold pt-3">bardzo ciche</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-row">
                    <img src={mirrorIcon} width={80} alt="mirror"/>
                  </div>
                  <div className="flex flex-row">
                    <p className="italic font-bold pt-3">symetrycznie dzielone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-10"/>
          <h1 className="text-2xl md:text-3xl font-bold py-8 text-center">Galeria</h1>
          <ImageCarousel images={images}/>
        </div>
      </div>
    </>
  );
};

export default PropellerPage;
