import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';



function App() {
  return (
    <div className="App">
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
