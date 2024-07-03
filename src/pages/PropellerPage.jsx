import React from 'react';
import { useParams } from 'react-router-dom';
import propellerData from '../data/propellerData';
import ImageCarousel from "../components/ImageCarousel";

import weightIcon from "../assets/icons/feathers.png"
import quietIcon from "../assets/icons/silence.png"
import mirrorIcon from "../assets/icons/reflect.png"
import propellerIcon from "../assets/icons/propeller.png"

const PropellerPage = () => {
  const { id } = useParams();
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
    <div className="content container mx-auto p-6">
      <div className="max-w-6xl mx-auto p-4 bg-white shadow-lg rounded-lg">

        <div className="flex flex-col md:flex-row">

          <div className="flex flex-col w-full md:w-1/2 p-4">
            <h1 className="text-5xl font-bold mb-4 text-gray-800">{propeller.name}</h1>

            <hr className="pb-4"/>

            <p className="text-lg text-gray-700 pb-4">{propeller.desc}</p>

            <hr className="pb-4"/>

            <p className="text-lg text-zinc-800 pb-2">Parametry:</p>
            <p className="text-lg text-zinc-800 pb-2"><span className="font-bold">Długość:</span> {propeller.length}</p>
            <p className="text-lg text-zinc-800 pb-4"><span className="font-bold">Waga:</span> {propeller.weight}</p>

            {hasEngineList && (
              <div className="pb-4">
                <p className="text-lg text-gray-700 font-bold">Przeznaczenie:</p>
                <ul className="list-disc list-inside text-lg text-gray-700 pl-4">
                  {propellerData.map((propeller, index) => (
                    propeller.engineList && propeller.engineList.map((engine, engineIndex) => (
                      <li key={`${index}-${engineIndex}`}>{engine}</li>
                    ))
                  ))}
                </ul>
              </div>
            )}

            <p className="text-lg text-gray-700">{propeller.descExtended}</p>

            <div className="mt-6 md:hidden">
              <ImageCarousel images={images}/>
            </div>
          </div>

          <div className="hidden md:flex flex-col w-1/2 p-4">
            <ImageCarousel images={images}/>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-around pt-12">
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              <img src={weightIcon} width={80} alt="weight"/>
            </div>
            <div className="flex flex-row">
              <p>bardzo lekkie</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:pt-0 pt-6">
            <div className="flex flex-row">
              <img src={propellerIcon} width={80} alt="weight"/>
            </div>
            <div className="flex flex-row">
              <p>generują duży ciąg</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:pt-0 pt-6">
            <div className="flex flex-row">
              <img src={quietIcon} width={80} alt="weight"/>
            </div>
            <div className="flex flex-row">
              <p>cicha praca</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:pt-0 pt-6">
            <div className="flex flex-row">
              <img src={mirrorIcon} width={80} alt="weight"/>
            </div>
            <div className="flex flex-row">
              <p>symetrycznie dzielone</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full mx-auto pt-12">
          <img src={propeller.photo} alt={propeller.name} className="rounded-lg shadow-lg"/>
        </div>

      </div>
    </div>
  );
};

export default PropellerPage;
