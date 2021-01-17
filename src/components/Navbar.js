import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="item">
          <h1>Aron Hayes Davidson</h1>
        </Link>
      </div>
      <div className="links">
        <Link to="/blogs" className="item">
          Blogs
        </Link>
        <Link to="/create" className="item">
          New blog
        </Link>
        <Link to="/contact" className="item">
          Contact
        </Link>
        <Link to="/about" className="item">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
