import React from "react";

// Import global CSS
import "../index.css";

import { AboutTheLab } from "../components/home/aboutthelab";
import { FeaturedProjects } from "../components/home/featured";
import { Hero } from "../components/home/hero";
import { Statistics } from "../components/home/statistics";

export const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Statistics />
      <AboutTheLab />
    </>
  );
};
