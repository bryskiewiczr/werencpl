import React from 'react';
import {Link} from 'react-router-dom';
import ImageCarousel from "../components/ImageCarousel";
import weightIcon from "../assets/icons/weight-icon.png";
import lengthIcon from "../assets/icons/length-icon.png";
import materialIcon from "../assets/icons/carbon-icon.png";
import lightIcon from "../assets/icons/feather-icon.png";
import wrenchIcon from "../assets/icons/wrench-icon.png"
import wireIcon from "../assets/icons/wire-icon.png";
import handIcon from '../assets/icons/hand-icon.png';
import productsData from "../data/productsData.js";

const ThrottlePage = () => {

  const throttle = productsData.categories.throttles.products[0]
  const images = throttle.photoList;

  return (
      <>
        <div className="content container mx-auto p-6 mt-10 md:mt-0 max-w-6xl">
          <div className="max-w-6xl mx-auto p-4">
            <div className="flex flex-row mt-10 mb-4">
              <h1 className="text-2xl md:text-3xl text-left md:text-center">
                <Link to="/products">Produkty WERENC</Link> / <span className="font-black">Manetka WERENC</span></h1>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex-grow">
                <h1 className="text-4xl md:text-6xl font-bold">{throttle.name}</h1>
                <p className="text-lg md:text-2xl font-regular">{throttle.desc}</p>
              </div>
              <div className="flex-shrink-0 w-1/3 md:w-1/2 lg:w-1/2 p-4">
                <div className="relative overflow-hidden aspect-w-3 aspect-h-1">
                  <img src={throttle.photo} alt={throttle.name} className="object-contain w-full h-full"/>
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
                  <p>{throttle.descExt}</p>
                </div>
                {throttle.additionalDetails && (
                  <div className="flex flex-row text-justify mt-10">
                    <p>{throttle.additionalDetails}</p>
                  </div>
                )}

                <div className="flex flex-row text-justify mt-10">
                  <p className="text-red-600 font-bold">Manetka jest wzorem przemysłowym, zastrzeżonym w Urzędzie Patentowym od marca 2015 roku. Na każdej manetce widnieje logotyp WERENC.</p>
                </div>

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
                      <p className="italic font-bold pt-3">100g</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row">
                      <img src={lengthIcon} width={80} alt="length"/>
                    </div>
                    <div className="flex flex-row">
                      <p className="italic font-bold pt-3">23 cm</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row">
                      <img src={materialIcon} width={80} alt="length"/>
                    </div>
                    <div className="flex flex-row">
                      <p className="italic font-bold pt-3">włókno węglowe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                      <p className="italic font-bold pt-3">niezwykle lekka</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row">
                      <img src={handIcon} width={80} alt="propeller"/>
                    </div>
                    <div className="flex flex-row">
                      <p className="italic font-bold pt-3">dla lewo- i praworęcznych</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row">
                      <img src={wrenchIcon} width={80} alt="quiet"/>
                    </div>
                    <div className="flex flex-row">
                      <p className="italic font-bold pt-3">łatwa regulacja</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row">
                      <img src={wireIcon} width={80} alt="mirror"/>
                    </div>
                    <div className="flex flex-row">
                      <p className="italic font-bold pt-3">sprzedawana razem z przewodem</p>
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

export default ThrottlePage;
