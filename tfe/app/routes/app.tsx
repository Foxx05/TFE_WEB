import { Link } from "react-router";
import { useEffect, useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/foot";

export default function Home() {
  return (
    <main>
      <Nav />
      <header className="head">
        <div className="head--img"></div>

        <div className="head--text">
          <h1>What does the app tell&nbsp;you ?</h1>
          <h2>Here is the answer... A lot of&nbsp;things !</h2>
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