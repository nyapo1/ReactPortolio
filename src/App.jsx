import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbar';
import './index.css'
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Navbars/>
    <Hero/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;