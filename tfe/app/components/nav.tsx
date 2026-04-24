import { NavLink } from "react-router";

export default function nav() {
  return (
    <header className="nav--wrapper">
      <nav className="nav">
        <NavLink to="/" className="nav--logo" aria-label="Home">
          <img src="/logo.svg" alt="Logo de l'entreprise Berrycam" />
        </NavLink>

        <div className="nav--links">
          <NavLink to="/product" className="nav-link">
            Our product
          </NavLink>
          <NavLink to="/app" className="nav-link">
            Our app
          </NavLink>
          <NavLink to="/history" className="nav-link">
            Our history
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact us
          </NavLink>
        </div>
      </nav>
    </header>
  );
}