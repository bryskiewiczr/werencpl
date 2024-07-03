import React from 'react';
import heroVideo from '../assets/reel.mp4';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute inset-0 bg-zinc-900 opacity-55"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-werenc-orange text-3xl uppercase md:text-5xl font-bold mb-8">
          Mistrzowska precyzja w powietrzu
        </h1>
        <p className="text-white text-sm md:text-xl mb-12 max-w-3xl">
          Śmigła Werenc zapewniają precyzję i bezpieczeństwo w każdym locie. Ręcznie wykonane z najlepszej jakości włókien węglowych, nasze śmigła zapewniają idealne parametry i minimalne zużycie paliwa.
        </p>
        <button className="btn rounded-sm uppercase bg-opacity-50 bg-zinc-800 hover:bg-amber-500 border-amber-500 hover:border-zinc-800 text-amber-500 hover:text-zinc-800">
          Poznaj produkty Werenc
        </button>
      </div>
    </div>
  );
};

export default Hero;
