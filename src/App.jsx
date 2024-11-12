import Navbar from './compoents/Navbar/Navbar.jsx';
import About from './compoents/About/about.jsx';
import Skills from './compoents/skills/skills.jsx';
import Gallery from './compoents/gallery/gallery.jsx';
import Contact from './compoents/contact/contact.jsx';
import './global.css';  // Global styles imported here (less common)

const App = () => {
  return (
    <div className="App">
      < Navbar />
      <About />
      <Skills />
      <Gallery />
      <Contact />
    </div>
  );
};

export default App;