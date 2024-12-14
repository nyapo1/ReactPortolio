import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbar';
import './index.css'
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbars/>
    <Hero/>
    <Skills/>
    </>
  );
}

export default App;