import About from './components/about/page'
import Hero from './components/hero/Hero'
import Work from './components/portfolio/page'

export default function Home() {
  return (
    <main >
      <Hero/>
      <About />
      <Work/>
    </main>
  )
}
