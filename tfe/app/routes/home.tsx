import { Link } from "react-router";
import { useEffect, useState } from "react";
import Nav from "../components/nav";
import VideoScroll from "~/components/videoScroll";

export default function Home() {
  return (
    <main>
      <Nav />
      <header className="head">
        <div className="head--img"></div>

        <div className="head--text">
          <h1>Berrycam</h1>
          <h2>The future of strawberry greenhouse culture</h2>
        </div>
      </header>
      <main>
        <section className="gridcol">
          <p className="section--title">From basic greenhouse...</p>
          <p className="p--basic__modif">Everyone is familiar with the classic layout of a greenhouse. Generally, there are several rows of a certain type of fruit.</p>
          <img className="img" src="/images/basicGH.png" alt="" />
          <p className="p--basic">The rows are separated by buffer zones, allowing the farmer to move around. The farmer often has to check on the condition of the plants, which takes time.</p>
        </section>

        <section className="gridcol">
          <p className="section--title">...to an automised one</p>
          <p className="p--basic__modif">Our system allows the farmer to monitor the progress of the crops without having to move around.</p>
          <img className="img" src="/images/autoGH.png" alt="" />
          <p className="p--basic">Sensors transmit data directly to the farmer's phone. You receive all the information you need (temperature, humidity, etc.) in real time. This saves you time in terms of travel. You only need to leave your home if you are not satisfied with a particular parameter.</p>
        </section>

        <section className="section--video">
          <VideoScroll />
        </section>

        <section className="section--app gridcol">
          <div className="app--title">
            <p className="app--title__start">An app in</p>
            <p className="app--title__finish">real time</p>
          </div>
          <img className="img--app" src="/images/phone.png" alt="" />
          <div className="section--app__content">
            <p className="p--basic__modif">This app will provide every data’s you need to keep your culture growing in the best conditions.</p>
            <p className="p--basic">Sensors transmit data directly to the farmer's phone. You receive all the information you need (temperature, humidity, etc.) in real time. This saves you time in terms of travel. You only need to leave your home if you are not satisfied with a particular parameter.</p>
          </div>
        </section>

        <section className="section--full">
          <div className="text--hover gridcol">
            <p className="p--basic__modif">See the installation ? The cameras will take some picture of your culture. Those pictures will be later analyzed by a dedicated program.</p>
            <p className="p--basic">The various sensors will be installed on those celling supports. The installation will be really easy and carried out by a super team.</p>
          </div>
          <div className="img--full1"></div>
        </section>

        <section className="section--full">
          <div className="text--hover gridcol">
            <p className="p--basic">See those beautiful strawberries ? It could be yours, if you install our product in your greenhouse. Every data will help you manage your culture.</p>
            <p className="p--basic__modif">You will save a lot of time - say goodbye to the travel to your greenhouse - and as you know, in the industry, time is money.</p>
          </div>
          <div className="img--full2"></div>
        </section>

        <section className="section--full">
          <div className="img--full3"></div>
        </section>
      </main>
    </main>
  );
}