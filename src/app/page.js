import Image from 'next/image'
import MainHead from './sections/MainHead';
import AboutMe from './sections/AboutMe';

export default function Home() {
  return (
    <main className="flex flex-col">
      <MainHead />
      <AboutMe />
    </main>
  )
}
