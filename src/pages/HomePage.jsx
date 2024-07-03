import React from 'react';
import Hero from '../components/Hero';
import HomePageContent from '../components/HomePageContent.jsx';

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="container max-w-6xl mx-auto my-8">
        <HomePageContent />
      </div>

    </>
  );
};

export default HomePage;