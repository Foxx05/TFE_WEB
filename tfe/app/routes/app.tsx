import { Link } from "react-router";
import { useEffect, useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/foot";
import { NavLink } from "react-router";

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

      <section className="section--intro">
        <img className="img--phone" src="/images/product/phone.png" alt="" />
        <p className="p--intro">The app will provide you with accurate data on various parameters. These include, for example: <span>temperature</span>, <span>humidity</span> and <span>sunlight levels</span>. In addition to these parameters, <span>the app will notify you when the strawberries are close to being ready for harvest</span>. You can learn more about these technologies by scrolling down the&nbsp;page.</p>
      </section>

      <section className="section--page gridcol">
        <p className="p--basic__number right">/01</p>
        <img className="img--right" src="/" alt="" />
        <div className="div--right">
          <p className="section--title__app">Live sensor&nbsp;data</p>
          <p className="p--basic__modif">Here you can see every measurements made by the sensors. You don’t need to travel to your greenhouse, everything useful is shown&nbsp;here.</p>
          <p className="p--basic">To guarantee the best efficiency, it is recommended to stay in the green&nbsp;zone.</p>
        </div>
      </section>

      <section className="section--page gridcol">
        <p className="p--basic__number left">/02</p>
        <img className="img--left" src="/" alt="" />
        <div className="div--left">
          <p className="section--title__app">Monthly production</p>
          <p className="p--basic__modif">This graphics shows you how many strawberries were collected, per&nbsp;month.</p>
          <p className="p--basic">By using these data’s, you can see which month was more productive than another and clearly understand&nbsp;why.</p>
        </div>
      </section>

      <section className="section--page gridcol">
        <p className="p--basic__number right2">/03</p>
        <img className="img--right2" src="/" alt="" />
        <div className="div--right2">
          <p className="section--title__app">Greenhouse overview</p>
          <p className="p--basic__modif">Here you see the dimensions of your greenhouse and its orientation. It will help you to understand its&nbsp;efficiency.</p>
          <p className="p--basic">You have more than one greenhouse ? that is not a problem, you can add a new one in the app at any&nbsp;time.</p>
        </div>
      </section>

      <div className="div--gradient">
        <p className="p--basic__modif">Any question or request  ?</p>
        <p>Feel free to reach out, we are here to help you, anywhere, anytime.</p>
        <NavLink to="/Contact" className="btn--contact">
          Contact us
        </NavLink>
      </div>

      <div className="img--full4"></div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}