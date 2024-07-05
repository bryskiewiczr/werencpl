import React from 'react';
import { useParams } from 'react-router-dom';
import propellerData from '../data/propellerData';
import ImageCarousel from "../components/ImageCarousel";

import lightIcon from "../assets/icons/feathers.png"
import quietIcon from "../assets/icons/silence.png"
import mirrorIcon from "../assets/icons/reflect.png"
import propellerIcon from "../assets/icons/propeller.png"
import weightIcon from "../assets/icons/weighing-machine.png"
import lengthIcon from "../assets/icons/measuring-tape.png"

const PropellerPage = () => {
  const {id} = useParams();
  const propeller = propellerData.find(p => p.id === id);

  if (!propeller) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl font-semibold text-gray-600">Propeller not found</div>
      </div>
    );
  }

  const images = propeller.photoList || [];
  const hasEngineList = propeller.hasEngineList || false;

  return (
    <>
      <div className="content container mx-auto p-6 mt-10 md:mt-0 max-w-6xl">
        <div className="max-w-6xl mx-auto p-4">
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
                <p>{propeller.descExtended}</p>
              </div>
            </div>
          </div>

          <hr className="mt-10"/>
          <div className="flex flex-row">
            <div className="flex flex-col flex-grow items-center">
              <div className="flex flex-row">
                <h1 className="text-2xl md:text-3xl font-bold py-8">Parametry techniczne</h1>
              </div>
              <div className="flex  flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20">
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
                    <img src={lengthIcon} width={80} alt="weight"/>
                  </div>
                  <div className="flex flex-row">
                    <p className="italic font-bold pt-3">{propeller.length}</p>
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
                    <li>silniki dla których przeznaczone jest śmigło</li>
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
                    <img src={lightIcon} width={80} alt="weight"/>
                  </div>
                  <div className="flex flex-row">
                    <p className="italic font-bold pt-3">niezwykle lekkie</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-row">
                    <img src={propellerIcon} width={80} alt="weight"/>
                  </div>
                  <div className="flex flex-row">
                    <p className="italic font-bold pt-3">generują duży ciąg</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-row">
                    <img src={quietIcon} width={80} alt="weight"/>
                  </div>
                  <div className="flex flex-row">
                    <p className="italic font-bold pt-3">bardzo ciche</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-row">
                    <img src={mirrorIcon} width={80} alt="weight"/>
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
