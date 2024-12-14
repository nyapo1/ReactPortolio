import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbar';
import './index.css'
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {

  return (
    <>
    <Navbars/>
    <Hero/>
    <Skills/>
    <Projects/>
    </>
  );
}

export default App;