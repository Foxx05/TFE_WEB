import { Link } from "react-router";
import { useEffect, useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/foot";

export default function Home() {
  return (
    <main>
      <Nav />
      <header className="head">
        <div className="head--img__history"></div>

        <div className="head--text">
          <h1>A brief historical note</h1>
          <h2>A story that is just&nbsp;beginning...</h2>
        </div>
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