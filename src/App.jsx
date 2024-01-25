import { BrowserRouter } from 'react-router-dom';
import { About,Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, Tech } from './components';
import Services from './components/Services';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <BrowserRouter>
      <div className='z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <Hero />
        <Services />
        <Works />
        <Experience />
        <Tech />
        <Testimonials />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
