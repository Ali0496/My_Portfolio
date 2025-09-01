import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
const Hero = () => {
  return (
    <section className="py-5 md:py-10 max-w-7xl mx-auto ">
        <div className="flex flex-col items-center mb-4">
          <HeroImage />
        </div>
        <HeroText />
    </section>
  );
};

export default Hero;
