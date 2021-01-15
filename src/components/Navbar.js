import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="item">
        <h1>Aron Hayes Davidson</h1>
      </Link>
      <div className="links">
        <Link to="/about" className="item">
          About
        </Link>
        <Link to="/contact" className="item">
          Contact
        </Link>
        <Link to="/create" className="item">
          New blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
