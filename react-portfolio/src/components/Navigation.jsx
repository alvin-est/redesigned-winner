// import { NavLink } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';


function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    /* Simpler implementation
    <nav>
      <NavLink exact to="/" activeClassName="contrast">About Me</NavLink>
      <NavLink to="/portfolio" activeClassName="contrast">Portfolio</NavLink>
      <NavLink to="/contact" activeClassName="contrast">Contact</NavLink>
      <NavLink to="/resume" activeClassName="contrast">Resume</NavLink>
    </nav>
    */
    <ul>
      <li>
        <Link to="/" className={currentPage === '/' ? 'active' : ''}>Home</Link>
      </li>
      <li>
        <Link to="/about" className={currentPage === '/about' ? 'active' : ''}>About</Link>
      </li>
      <li>
        <Link to="/contact" className={currentPage === '/contact' ? 'active' : ''}>Contact</Link>
      </li>
      <li>
        <Link to="/portfolio" className={currentPage === '/portfolio' ? 'active' : ''}>Portfolio</Link>
      </li>
      <li>
        <Link to="/resume" className={currentPage === '/resume' ? 'active' : ''}>Resume</Link>
      </li>
    </ul>
  );
}

export default Navigation;