import React from 'react';
import Hero from './Hero';
import Features from './Features';
import FAQ from './FAQ';
import Work from './Work';
import Blog from './Blog';
import Intro from './Intro';


function Dashboard() {
  return (
    <>
      <Hero />
      <Work/>
      <Blog/>
      <Features/>
      <Intro/>
      <FAQ/>
    </>
  );
}

export default Dashboard;
