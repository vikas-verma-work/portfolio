import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skill from "@/components/skill";

function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skill" className="snap-center">
        <Skill />
      </section>
      <section id="project" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
