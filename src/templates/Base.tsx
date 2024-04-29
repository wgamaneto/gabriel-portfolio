import React from "react";
import Hero from "./Hero";
import { Tools } from "./Tools";
import { GameJams } from "./GameJams";
import { Projects } from "./Projects";
import { Footer } from "./Footer";

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Hero />
    <Projects />
    <Tools />
    <GameJams />
    <Footer />
  </div>
);

export { Base };
