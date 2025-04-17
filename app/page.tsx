import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import WorkExperience from "./components/WorkExperience"
import Contact from "./components/Contact"
import SectionSeparator from "./components/SectionSeparator"

export default function Home() {
  return (
    <div className="bg-transparent">
      <Hero />
      <SectionSeparator />
      <section id="about">
        <About />
      </section>
      <SectionSeparator />
      <section id="skills">
        <Skills />
      </section>
      <SectionSeparator />
      <section id="projects">
        <Projects />
      </section>
      <SectionSeparator />
      <WorkExperience />
      <SectionSeparator />
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

