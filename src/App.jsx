import Navbar from "./compoents/Navbar/Navbar";
import Hero from "./compoents/Hero/hero";
import Skills from "./compoents/skills/skills";
import About from "./compoents/About/about"
import Contact from "./compoents/contact/contact";
import Gallery from "./compoents/gallery/gallery";
const App = () => {
  return (
    <div className="App">
      <div className="main-content">
        <Navbar /> 
        <Hero />

        <div className="wrapper">
          <section id='About'  >
            <h1 >About</h1>
            <About />
          </section>
        </div>
        
        <div className="wrapper">
          <section id='Skills'>
            <h1>Skills</h1>
            <Skills />
          </section>
        </div>
        
         <div className="wrapper">
          <section id='gallery'>
            <h1>Gallery section</h1>
            <Gallery />
          </section>
         </div>

        <div className="wrapper">
          <section id='contact' >
            <h1 > Contact</h1>
            <Contact />
          </section>
        </div>
      
      </div>
    </div>
  );
};
{/*
   Each commpoent needs a export part to it without it even thought you have imported here you wont see anything that can even include the styles 
   Looking at the code in the browser by inspection can help solve the issue 
  */}
export default App;