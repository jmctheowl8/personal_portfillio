import Navbar from './compoents/Navbar/Navbar.jsx';
import About from './compoents/About/about.jsx';
import Skills from './compoents/skills/skills.jsx';
import Gallery from './compoents/gallery/gallery.jsx';
import Contact from './compoents/contact/contact.jsx';

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to My Test Page</h1>
      <Navbar />
      <About />
      <Skills />
      <Gallery />
      <Contact />
    </div>
  );
};

export default App;