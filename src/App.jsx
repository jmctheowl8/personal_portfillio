import Navbar from "./compoents/Navbar/Navbar";
import Hero from "./compoents/Hero/hero";
import About from "./compoents/About/about"
const App = () => {
  return (
    <div className="App">
      
      <div className="main-content">
      
        <Navbar /> 
        <Hero />
      <div className="wrapper">
        <section id="About" >
          <About />
        </section>
      </div>
      
      <div className="wrapper">
        <section id="Skills">
          <h1>Skills Section</h1>
          <p>Learn more about us here.</p>
        </section>
      </div>
      
      <section id="gallery">
        <h1>Gallrey  Section</h1>
        <p>These are our services.</p>
      </section>
      <section id="contact">
        <h1>Contact Section</h1>
        <p>Contact us for more information.</p>
      </section>
      </div>
    </div>
  );
};
{/*
   Each commpoent needs a export part to it without it even thought you have imported here you wont see anything that can even include the styles 
   Looking at the code in the browser by inspection can help solve the issue 
  */}
export default App;