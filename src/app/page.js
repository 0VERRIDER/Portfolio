import MainHead from './sections/MainHead';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ContactMe from './sections/ContactMe';

export default function Home() {
  return (
    <main>
      <MainHead />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </main>
  )
}
