import "./hero.css"
const Hero = () => {
  return (
    <div className="hero">
      <img src="/Images/openart-image_3yLFJKar_1731359493913_raw.jpg" alt="Hero" className="hero-img" />
      <div className="hero-text">
        <h2 className="hero-text">Software Engineering</h2>
        <h3 id="hero-qoute">&quot;Software Engineering Is not just about writing code.<br /> It&apos;s about solving problems and making lives better.&quot;</h3>
      </div>
    </div>
  );
};
export default Hero;