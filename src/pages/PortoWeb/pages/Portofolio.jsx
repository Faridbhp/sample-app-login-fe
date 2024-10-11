
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import '../styles/App.css';

function Portofolio() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default Portofolio;
