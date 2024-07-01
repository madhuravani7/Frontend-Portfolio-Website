import React, {useState} from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Footer from './Footer';


function App() {

const [isFlipped, setFlipped] = useState("false")

function handleFlip(){
  setFlipped(!isFlipped)
}

function handleNavClick(){
  setFlipped(true)
}

  return (
    <div className="App">
      <Header onAboutClick={handleNavClick}/>
      <Home isFlipped={isFlipped} onFlip={handleFlip}/>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
