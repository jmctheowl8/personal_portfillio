import './Navbar.css'; // Assuming you have styles for your Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><a href="#About">About</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#gallery">Gallrey</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
 
