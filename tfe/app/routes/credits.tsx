import { useEffect, useState } from "react";
import Nav from "../components/nav";
import VideoScroll from "../components/videoScroll";
import Footer from "../components/foot";
import { NavLink } from "react-router";
import Reveal from "../components/reveal";
import PageTransition from "../components/pageTransition";

export default function Home() {
  return (
    <PageTransition>
    <main className="main--history">
      <Nav />
      <header className="head">

        <div className="head--text head--text__app">
          <h1 className="title--page">Credits</h1>
          <h2>Where did I get that ?</h2>
        </div>
      </header>


      <footer>
        <Footer />
      </footer>
    </main>
    </PageTransition>
  );
}