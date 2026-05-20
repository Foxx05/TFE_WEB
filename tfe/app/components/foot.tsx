import { useEffect } from "react";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="gridcol">
      <div className="foot--list">
        <NavLink to="/projets/tfe_web/" end className="foot--li">
          Our product
        </NavLink>
        <NavLink to="/projets/tfe_web/app" className="foot--li">
          Our app
        </NavLink>
        <NavLink to="/projets/tfe_web/history" className="foot--li">
          Our history
        </NavLink>
        <NavLink to="/projets/tfe_web/contact" className="foot--li">
          Contact us
        </NavLink>
        <NavLink to="/projets/tfe_web/credits" className="foot--li">
          Credits
        </NavLink>
      </div>
      <p className="p--copy">©BerryCam - 2026</p>
      <p className="p--foot">BerryCam</p>
    </footer>
  );
}