import React from 'react';
import Hero from './Hero';
import Features from './Features';
import FAQ from './FAQ';
import Work from './Work';
import Blog from './Blog';


function Dashboard() {
  return (
    <>
      <Hero />
      <Work/>
      <Blog/>
      <Features/>
      <FAQ/>
    </>
  );
}

export default Dashboard;
