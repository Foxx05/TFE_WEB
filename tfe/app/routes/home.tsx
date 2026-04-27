import { Link } from "react-router";
import { useEffect, useState } from "react";
import Nav from "../components/nav";
import VideoScroll from "../components/videoScroll";
import Footer from "../components/foot";
import { NavLink } from "react-router";

export default function Home() {
  return (
    <main>
      <Nav />
      <header className="head">
        <div className="head--img__product"></div>

        <div className="head--text">
          <h1>Berrycam</h1>
          <h2>The future of strawberry greenhouse&nbsp;culture</h2>
        </div>
      </header>

      <section className="gridcol">
        <p className="section--title">From basic greenhouse...</p>
        <p className="p--basic__modif">Everyone is familiar with the classic layout of a greenhouse. Generally, there are several rows of a certain type of&nbsp;fruit.</p>
        <img className="img" src="/images/product/basicGH.png" alt="" />
        <p className="p--basic">The rows are separated by buffer zones, allowing the farmer to move around. The farmer often has to check on the condition of the plants, which takes&nbsp;time.</p>
      </section>

      <section className="gridcol">
        <p className="section--title">...to an automised one</p>
        <p className="p--basic__modif">Our system allows the farmer to monitor the progress of the crops without having to move&nbsp;around.</p>
        <img className="img" src="/images/product/autoGH.png" alt="" />
        <p className="p--basic">Sensors transmit data directly to the farmer's phone. You receive all the information you need (temperature, humidity, etc.) in real time. This saves you time in terms of travel. You only need to leave your home if you are not satisfied with a particular&nbsp;parameter.</p>
      </section>

      <section className="section--video">
        <VideoScroll />
      </section>

      <section className="section--full gridcol">
        <div className="app--title">
          <p className="app--title__start">An app&nbsp;in</p>
          <p className="app--title__finish">real&nbsp;time</p>
        </div>
        <img className="img--app" src="/images/product/phone.png" alt="" />
        <div className="section--app__content">
          <p className="p--basic__modif">This app will provide every data’s you need to keep your culture growing in the best&nbsp;conditions.</p>
          <p className="p--basic">Sensors transmit data directly to the farmer's phone. You receive all the information you need (temperature, humidity, etc.) in real time. This saves you time in terms of travel. You only need to leave your home if you are not satisfied with a particular&nbsp;parameter.</p>
        </div>
        <NavLink to="/app" className="btn--app">
          Discover the app
        </NavLink>
      </section>

      <section className="section--full">
        <div className="text--hover gridcol">
          <p className="p--basic__modif">See the installation ? The cameras will take some picture of your culture. Those pictures will be later analyzed by a dedicated&nbsp;program.</p>
          <p className="p--basic">The various sensors will be installed on those celling supports. The installation will be really easy and carried out by a super&nbsp;team.</p>
        </div>
        <div className="img--full1"></div>
      </section>

      <section className="section--full">
        <div className="text--hover gridcol">
          <p className="p--basic">See those beautiful strawberries ? It could be yours, if you install our product in your greenhouse. Every data will help you manage your&nbsp;culture.</p>
          <p className="p--basic__modif">You will save a lot of time - say goodbye to the travel to your greenhouse - and as you know, in the industry, time is&nbsp;money.</p>
        </div>
        <div className="img--full2"></div>
      </section>

      <section className="section--full">
        <div className="img--full3"></div>
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}