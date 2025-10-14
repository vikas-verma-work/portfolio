import About from "@/components/about";
import Experience from "@/components/experience";
import Skill from "@/components/skill";
import React from "react";

function Home() {
  return (
    <div>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skill" className="snap-center">
        <Skill />
      </section>
    </div>
  );
}

export default Home;
