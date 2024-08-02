import React from "react";
import Hero from "../components/Hero/Hero";
import FAQ from "../components/FAQ/FAQ";
import Services from "../components/Banners/Services";
import Pricing from "../components/Banners/Pricing";
import Statistics from "../components/Banners/Statistics";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Statistics />
      <Testimonials />
      <Pricing />

      <FAQ />
    </>
  );
};

export default Home;
