import Image from 'next/image'
import MainHead from './sections/MainHead';

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col">
      <MainHead />
    </main>
  )
}
