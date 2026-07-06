import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Life from './components/Life'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Certifications />
        <Life />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
