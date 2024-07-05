import React from 'react';

const ServicePage = () => {
  return (
    <div className="flex-grow">
      <div className="content container mx-auto p-6 max-w-6xl">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-row mt-10">
            <div className="flex flex-col">
              <div className="flex flex-row mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-left md:text-center">Uszkodziłeś śmigło lub
                  manetkę?</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row mt-8">
                <p className="text-sm md:text-xl">Napisz do nas!</p>
              </div>
              <div className="flex flex-row  mt-8">
                <p className="text-sm md:text-xl">Jeżeli uszkodzenia nie przekreślają
                  całkowicie
                  dalszej użyteczności sprzętu,
                  jest duża szansa, że uda nam się go naprawić!</p>
              </div>
              <div className="flex flex-row mt-8">
                <p className="text-sm md:text-xl">Napisz do nas maila na <span
                  className="text-sky-500 underline">mwerenc@wp.pl</span>, albo skorzystaj z przycisku poniżej, żeby
                  przenieść się do formularza kontaktowego.</p>
              </div>
              <div className="flex flex-row mt-8">
                <p className="text-sm md:text-xl">W formularzu wybierz <span className="font-bold">ZAPYTANIE SERWISOWE</span> jako
                  temat zapytania.</p>
              </div>
              <div className="flex flex-row mt-8">
                <p className="text-sm md:text-xl">W treści wiadomości dokładnie podaj:</p>
              </div>
              <div className="flex flex-row">
                <ul className="list-inside list-decimal pl-4">
                  <li className="text-sm md:text-xl">precyzyjny opis uszkodzeń</li>
                  <li className="text-sm md:text-xl">sposób i okoliczości w jakich te uszkodzenia powstały</li>
                  <li className="text-sm md:text-xl">a także nie zapomnij dołączyć zdjęć uszkodzeń</li>
                </ul>
              </div>
              <div className="flex flex-row mt-12">
                <a className="w-full" href="/contact">
                  <button
                    className="btn rounded-none text-xl md:text-3xl uppercase bg-zinc-800 hover:bg-amber-500 text-amber-500 hover:text-zinc-800 w-full h-12 md:h-16">napisz do nas
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
