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
      <NavLink to="/" className="nav--logo" aria-label="Our product">
        <svg className="logo" width="35" height="48" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.3871 5.91429L0 0C2.7957 3.43175 6.45237 8.10476 5.59124 8.10476C2.6313 8.10476 0.559169 11.6373 0.645896 14.019C0.833333 19.1667 9.73718 38.3333 15.914 38.3333C18.7973 38.3333 21.5 36.5 23.5 33.5C23.5 33.5 14.414 31 15.914 20.5C17.414 10 28.5 9.5 31.5 11.5C31.5 8.5 29.8398 8.3407 28.172 8.10476L33.3333 0L24.086 5.91429V0L19.7849 5.91429L15.914 0L13.5484 5.91429L8.3871 0V5.91429Z" fill="#FAFAFA"/>
          <path d="M27.499 12.1667C28.911 12.1667 30.2558 12.4498 31.4805 12.9616C35.2119 14.5209 37.8329 18.2047 37.833 22.4997C37.833 28.2066 33.206 32.8337 27.499 32.8337C26.1556 32.8336 24.8733 32.5767 23.6973 32.111C19.8712 30.5959 17.166 26.8631 17.166 22.4997C17.1662 16.793 21.7923 12.1668 27.499 12.1667Z" stroke="#FAFAFA"/>
          <path d="M33.334 33.3333L40.0007 45.8333" stroke="#FAFAFA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </NavLink>
      <button className="menu__btn"></button>
      <div className="blur-overlay"></div>
      <ul className="menu__liste">
        <NavLink to="/projets/tfe_web/" className="menu--li">
          Our product
        </NavLink>
        <NavLink to="/projets/tfe_web/app" className="menu--li">
          Our app
        </NavLink>
        <NavLink to="/projets/tfe_web/history" className="menu--li">
          Our history
        </NavLink>
        <NavLink to="/projets/tfe_web/contact" className="menu--li">
          Contact us
        </NavLink>
      </ul>
    </nav>
  );
}