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

        <div className="head--text head--text__product">
          <h1>Berrycam</h1>
          <h2>The future of strawberry greenhouse&nbsp;culture</h2>
        </div>
      </header>

      <section className="section--gh gridcol">
        <p className="section--title">From basic greenhouse...</p>
        <p className="p--basic__modif gridcol--35">Everyone is familiar with the classic layout of a greenhouse. Generally, there are several rows of a certain type of&nbsp;fruit.</p>
        <img className="img" src={`${import.meta.env.BASE_URL}images/product/basicGH.webp`} srcSet={`${import.meta.env.BASE_URL}/images/product/@2x/basicGH@2x.webp 2x`} alt="Image showing a traditional greenhouse: a plastic roof with arches, rows of strawberry plants on the ground spaced one meter apart" />
        <p className="p--basic gridcol--35">The rows are separated by buffer zones, allowing the farmer to move around. The farmer often has to check on the condition of the plants, which takes&nbsp;time.</p>
      </section>

      <section className="section--gh2 gridcol">
        <p className="section--title">...to an automised one</p>
        <p className="p--basic__modif gridcol--35">Our system allows the farmer to monitor the progress of the crops without having to move&nbsp;around.</p>
        <img className="img" src={`${import.meta.env.BASE_URL}images/product/autoGH.webp`} srcSet={`${import.meta.env.BASE_URL}/images/product/@2x/autoGH@2x.webp 2x`} alt="Image showing a 3D view of the product. The strawberry plants are placed in stacked trays. The strawberries are filmed by cameras (positioned perpendicular to the strawberry beds)" />
        <p className="p--basic gridcol--35">Sensors transmit data directly to the farmer's phone. You receive all the information you need (temperature, humidity, etc.) in real time. This saves you time in terms of travel. You only need to leave your home if you are not satisfied with a particular&nbsp;parameter.</p>
      </section>

      <section className="section--video">
        <VideoScroll />
      </section>

      <section className="section--full section--app gridcol">
        <div className="app--title">
          <p className="app--title__start">An app&nbsp;in</p>
          <p className="app--title__finish">real&nbsp;time</p>
        </div>
        <img className="img--app" src={`${import.meta.env.BASE_URL}/images/product/phone.png`} alt="" />
        <div className="section--app__content">
          <p className="p--basic__modif">This app will provide every data’s you need to keep your culture growing in the best&nbsp;conditions.</p>
          <p className="p--basic">The sensors are connected and send their measurements in real time to the app. You can watch it anywhere, anytime.</p>
          <NavLink to="/app" className="btn--app">
            Discover the app
          </NavLink>
        </div>
      </section>

      <section className="section--full">
        <div className="text--hover text--right">
          <p className="p--basic__modif right">See the installation ? The cameras will take some picture of your culture. Those pictures will be later analyzed by a dedicated&nbsp;program.</p>
          <p className="p--basic right">The various sensors will be installed on those celling supports. The installation will be really easy and carried out by a super&nbsp;team.</p>
        </div>
        <div className="img--full1"></div>
      </section>

      <section className="section--full">
        <div className="text--hover text--left">
          <p className="p--basic left">See those beautiful strawberries ? It could be yours, if you install our product in your greenhouse. Every data will help you manage your&nbsp;culture.</p>
          <p className="p--basic__modif left">You will save a lot of time - say goodbye to the travel to your greenhouse - and as you know, in the industry, time is&nbsp;money.</p>
        </div>
        <div className="img--full2"></div>
      </section>

      <section className="section--full section--benefits">
        <div className="benefits--overlay">
          <h2 className="benefits--title">Some&nbsp;benefits</h2>

          <div className="benefits--grid">
            <div className="benefit">
              <img src={`${import.meta.env.BASE_URL}images/product/install.svg`} alt="Wrench icon (installation symbol)" />
              <p>Installation carried out by our&nbsp;team</p>
            </div>

            <div className="benefit">
              <img src={`${import.meta.env.BASE_URL}images/product/warranty.svg`} alt="Lotus icon (a symbol of serenity)" />
              <p>5 years&nbsp;warranty</p>
            </div>

            <div className="benefit">
              <img src={`${import.meta.env.BASE_URL}images/product/time.svg`} alt="Clock icon (symbol of time saved)" />
              <p>Time saver, forget the travel to your&nbsp;greenhouse</p>
            </div>

            <div className="benefit">
              <img src={`${import.meta.env.BASE_URL}images/product/help.svg`} alt="Question mark icon (symbol of a team that listens)" />
              <p>We’re here to help anywhere,&nbsp;anytime</p>
            </div>
          </div>
        </div>
        <div className="img--full3"></div>
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}