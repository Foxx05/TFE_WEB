import { useEffect } from "react";
import { NavLink } from "react-router";

export default function nav() {
    useEffect(() => {
    const body = document.body;
    const menuBtn = document.querySelector(".menu__btn");
    const links = document.querySelectorAll(".menu__link");
    const menuElements = document.querySelectorAll(".menu--li");

    function toggleMenu() {
      body.classList.toggle("menu--open");

      if (window.innerWidth < 980) {
        body.classList.toggle("no-scroll");
      }
    }

    menuBtn?.addEventListener("click", toggleMenu);
    menuElements.forEach(el => el.addEventListener("click", toggleMenu));
    links.forEach(link => link.addEventListener("click", toggleMenu));

    return () => {
      menuBtn?.removeEventListener("click", toggleMenu);
      menuElements.forEach(el => el.removeEventListener("click", toggleMenu));
      links.forEach(link => link.removeEventListener("click", toggleMenu));
    };

  }, []);
  return (
    <nav className="menu">
      <NavLink to="/home" className="nav--logo" aria-label="Home">
        <img src="/logo.svg" alt="Logo de l'entreprise Berrycam" />
      </NavLink>
      <button className="menu__btn"></button>
      <div className="blur-overlay"></div>
      <ul className="menu__liste">
        <NavLink to="/product" className="menu--li">
          Our product
        </NavLink>
        <NavLink to="/app" className="menu--li">
          Our app
        </NavLink>
        <NavLink to="/history" className="menu--li">
          Our history
        </NavLink>
        <NavLink to="/contact" className="menu--li">
          Contact us
        </NavLink>
      </ul>
    </nav>
  );
}