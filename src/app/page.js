import Image from 'next/image'
import MainHead from './sections/MainHead';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';

export default function Home() {
  return (
    <main>
      <MainHead />
      <AboutMe />
      <Skills />
    </main>
  )
}
