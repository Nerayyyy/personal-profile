import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-3">
      <div className="container">
        {/* Brand */}
        <NavLink className="navbar-brand" to="/">MyProfile</NavLink>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            {['', 'about', 'education', 'projects', 'contact'].map(path => {
              const label = path === '' ? 'Home' : path[0].toUpperCase() + path.slice(1);
              const to = path === '' ? '/' : `/${path}`;
              return (
                <li className="nav-item" key={path}>
                  <NavLink
                    to={to}
                    end
                    className={({ isActive }) =>
                      'nav-link' + (isActive ? ' active' : '')
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
