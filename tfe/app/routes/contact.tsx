import { Link } from "react-router";
import { useEffect, useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/foot";

export default function Home() {
  return (
    <main>
      <Nav />
      <header className="head head--text__contact">
          <h1>Contact us</h1>
          <h2>Get in touch with us for any enquiries and questions</h2>
      </header>

      <section className="gridcol">
        
      </section>

      <section className="gridcol">
        
      </section>

      <section className="gridcol">
        
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}