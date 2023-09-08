import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="Navbars">
      <h1>My Website</h1>
      <div className="link">
        <ul>
            <Link to="/">Home</Link>
            <Link to="/Create">Create</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
