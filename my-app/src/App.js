
import './App.css';
// import Navbar from './components/Navbar';
import Home from './view/Home';
import About from './view/About';
import Skills from './view/Skills';
import Contact from './view/Contact';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
