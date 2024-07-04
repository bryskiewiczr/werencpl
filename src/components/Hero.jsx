import React from 'react';
import heroVideo from '../assets/reel.mp4';
import { useScroll } from "../context/ScrollContext.jsx";

const Hero = () => {

  const targetSectionRef = useScroll();

  const scrollToSection = () => {
    if (targetSectionRef.current) {
      const offsetPosition = targetSectionRef.current.offsetTop - 150;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden drop-shadow-2xl shadow-zinc-800">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute inset-0 bg-zinc-900 opacity-55"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-werenc-orange text-3xl uppercase md:text-5xl font-bold mb-8 lato-black">
          Mistrzowska precyzja w powietrzu
        </h1>
        <p className="text-white text-sm md:text-xl mb-2 max-w-3xl">
          Śmigła WERENC zapewniają precyzję i bezpieczeństwo w każdym locie.
        </p>
        <p className="text-white text-sm md:text-xl mb-12 max-w-3xl">
          Ręcznie wykonane z najlepszej jakości włókien węglowych, nasze śmigła zapewniają idealne parametry i minimalne zużycie paliwa.
        </p>
        <button
          onClick={scrollToSection}
          className="btn rounded-sm uppercase bg-opacity-50 bg-zinc-800 hover:bg-amber-500 border-amber-500 hover:border-zinc-800 text-amber-500 hover:text-zinc-800">
          Poznaj produkty Werenc
        </button>
      </div>
    </div>
  );
};

export default Hero;
