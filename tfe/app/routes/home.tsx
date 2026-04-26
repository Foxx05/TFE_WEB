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
      </main>
    </main>
  );
}