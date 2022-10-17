import './App.css';
import {Navbar} from './components/Navbar.js'
import {Welcome} from './components/Welcome.js'
import {About} from './components/About.js'
import {Work} from './components/Work.js'
import {Contact} from './components/Contact.js'
import{Footer} from './components/Footer.js'
import {useRef} from 'react'

function App() {
  const HomeRef = useRef(null)
  const AboutRef = useRef(null)
  const WorkRef = useRef(null)
  const ContactRef = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }
 
  return (
    <div className="App">
      <div style={{display:'flex', justifyContent: 'center'}}>
        <Navbar scrollToSection={scrollToSection} HomeRef={HomeRef} AboutRef={AboutRef} WorkRef={WorkRef} ContactRef={ContactRef}/>
      </div>

      <section className='greeting' ref={HomeRef}>
        <Welcome/>
      </section>

      <section ref={AboutRef} className='About'>
        <About/>
      </section>

      <section ref={WorkRef} className='Work'>
        <Work/>
      </section>

      <section ref={ContactRef} className='Contact'>
        <Contact/>
      </section>

      <Footer/>
    </div>
  );
}

export default App;
