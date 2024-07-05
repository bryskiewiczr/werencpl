import React from 'react';
import { useScroll } from '../context/ScrollContext.jsx';

import throttle from "../assets/throttle/throttle.jpg"
import throttle2 from "../assets/throttle/throttle2.jpg"
import throttle3 from "../assets/throttle/throttle3.jpg"
import CS3propeller from "../assets/propellers/cs3-propeller.jpg"
import T1propeller from "../assets/propellers/t1-propeller.jpg"

const HomePageContent = () => {

  const targetSectionRef = useScroll();

  return (
    <>
      <div ref={targetSectionRef} className="px-10 md:px-0">
        <div className="flex flex-row mt-12 md:mt-24 flex-wrap justify-center">
          <h2 className="text-3xl font-bold mb-12">Śmigła</h2>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-col flex-grow">
            <p className="pr-8 text-zinc-800 text-sm md:text-xl mb-2 max-w-3xl text-justify">
              Śmigła WERENC wykonywane są ręcznie z najlepszej jakości włókien węglowych i szklanych o bardzo wysokich
              parametrach wytrzymałościowych.
            </p>
            <p className="pr-8 text-zinc-800 text-sm md:text-xl mb-2 max-w-3xl mt-4 text-justify">
              Dzięki precyzyjnemu (i czasochłonnemu!) procesowi produkcji, nie ma potrzeby dodatkowego wyważania
              poszczególnych łopat śmigieł carbonowych Werenc.
            </p>
          </div>
          <div className="flex flex-col flex-shrink-0 w-1/4">
            <div className="flex flex-row">
              <img className="" src={CS3propeller} alt="śmigło"/>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-8 items-center">
          <div className="flex flex-col flex-shrink-0 w-1/4">
            <div className="flex flex-row">
              <img className="rotate-45" src={T1propeller} alt="śmigło"/>
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <p className="pl-8 text-zinc-800 text-sm md:text-xl mb-2 max-w-3xl text-justify">
              Śmigła WERENC są symetrycznie dzielone, dzięki czemu w przypadku uszkodzenia jednej z łopat, zawsze
              istnieje możliwość kupna zamiennika. Jeżeli uszkodzenia są niewielkie, możliwa jest również naprawa śmigła.
            </p>
            <p className="pl-8 text-zinc-800 text-sm md:text-xl mb-2 max-w-3xl mt-4 text-justify">
              Firma WERENC non stop pracuje nad nowymi modelami śmigieł i co raz to dokładniejszymi metodami ich
              wykonania.
            </p>
          </div>
        </div>

        <div className="flex flex-row mt-12 md:mt-24 flex-wrap justify-center">
          <h2 className="text-3xl mb-12 font-bold">Manetki</h2>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-col flex-shrink-0 w-1/4">
            <div className="flex flex-row">
              <img src={throttle} alt="manetka"/>
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <p className="pl-8 text-zinc-800 text-sm md:text-xl mb-2 max-w-3xl text-justify">
              Manetki WERENC wykonane są w całości z włókna węglowego, a jej niesamowicie ergonomiczny kształt powoduje
              idealne dopasowanie manetki do dłoni pilota.
            </p>
            <p className="pl-8 text-zinc-800 text-sm md:text-xl mb-2 mt-4 max-w-3xl text-justify">
              Dostępne są w wersjach dla lewo- i praworęcznych użytkowników, manetki WERENC sprzedawane są razem z
              przewodem. Maksymalny skok przepustnicy wynosi 30 mm.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-8">
          <div className="flex flex-col flex-grow">
            <p className="pr-8 text-zinc-800 text-sm md:text-xl mb-2 max-w-3xl text-justify">
              Wysokiej jakości przycisk gaszenia - umieszczony dokładnie pod kciukiem -
              jest łatwo dostępny, a jednocześnie schowany w manetce tak, że pozwala uniknąć niechcianego wyłączenia
              silnika w trakcie lotu.
            </p>
            <p className="pr-8 text-zinc-800 text-sm md:text-xl mt-4 mb-2 max-w-3xl text-justify">
              Mocowanie pancerza oraz przewodu gaszenia wykonane jest w sposób uniemożliwiający wysunięcie się, a
              przepustnicę gaźnika można bezproblemowo wysunąć - w razie wystąpienia problemów.
            </p>
          </div>
          <div className="flex flex-col flex-shrink-0 w-1/4">
            <div className="flex flex-row">
              <img src={throttle2} alt="manetka"/>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center mt-8">
          <div className="flex flex-col flex-shrink-0 w-1/4">
            <div className="flex flex-row">
              <img src={throttle3} alt="manetka"/>
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <p className="pl-8 text-zinc-800 text-sm md:text-xl mb-2 max-w-3xl text-justify">
              Manetka posiada taśmę z rzepem wraz z regulacją, dzięki czemu możesz ją dokładnie dopasować do rozmiaru
              twojej dłoni, bez obaw, że manetka wypadnie z twojej ręki.
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-24">
          <a className="w-full" href="/contact"><button className="btn rounded-none text-xl md:text-3xl uppercase bg-zinc-800 hover:bg-amber-500 text-amber-500 hover:text-zinc-800 w-full h-12 md:h-16">Skontaktuj się z nami</button></a>
        </div>
      </div>
    </>
  );
};

export default HomePageContent;
