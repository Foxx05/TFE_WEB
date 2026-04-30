import { Link } from "react-router";
import { useEffect, useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/foot";

export default function Home() {
  return (
    <main>
      <Nav />
      <header className="head">
        <div className="head--img__app"></div>

        <div className="head--text head--text__app">
          <h1 className="title--page">What does the app tell&nbsp;you ?</h1>
          <h2>Here is the answer... A lot of&nbsp;things !</h2>
        </div>
      </header>

      <section className="gridcol">
        <img className="img--phone" src="/images/product/phone.png" alt="" />
        <p className="p--intro">The app will provide you with accurate data on various parameters. These include, for example: <span>temperature</span>, <span>humidity</span> and <span>sunlight levels</span>. In addition to these parameters, <span>the app will notify you when the strawberries are close to being ready for harvest</span>. You can learn more about these technologies by scrolling down the page.</p>
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