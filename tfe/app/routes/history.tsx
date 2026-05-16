import { Link } from "react-router";
import { useEffect, useState } from "react";
import Nav from "../components/nav";
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
        <div className="head--img__history"></div>

        <div className="head--text head--text__app">
          <h1 className="title--page">A brief historical&nbsp;note</h1>
          <h2>A story that is just&nbsp;beginning...</h2>
        </div>
      </header>
      <Reveal className="reveal--left">
        <section className="section--page gridcol">
          <p className="p--basic__number right">/01</p>
          <p className="section--title__app right">A final year&nbsp;project</p>
          <img className="img--right" src={`${import.meta.env.BASE_URL}/images/history/sheet.webp`} srcSet={`${import.meta.env.BASE_URL}/images/history/@2x/sheet@2x.webp 2x`} alt="" />
          <div className="div--right">
            <p className="p--basic__modif">It all started with an idea for my final year&nbsp;project.</p>
            <p className="p--basic">I wanted to address a current issue. As an anecdote, there is a strawberry farmer near my home who does everything manually. It is a large-scale operation that requires a lot of time. So I started thinking about a solution that would free up some of the farmer's&nbsp;time.</p>
          </div>
        </section>
      </Reveal>

      <Reveal className="reveal--right">
        <section className="section--page gridcol">
          <p className="p--basic__number right2">/02</p>
          <p className="section--title__app right2">A solution to a&nbsp;problem</p>
          <img className="img--right2" src={`${import.meta.env.BASE_URL}/images/history/sheet2.webp`} srcSet={`${import.meta.env.BASE_URL}/images/history/@2x/sheet2@2x.webp 2x`} alt="" />
          <div className="div--right2">
            <p className="p--basic__modif">I wanted to find a solution to an existing problem. I think it’s a good way to start a final year&nbsp;project.</p>
            <p className="p--basic">The idea came during a brainstorming with my father and a friend of his. I always had interest in&nbsp;farming.</p>
          </div>
        </section>
      </Reveal>

      <Reveal className="reveal--left">
        <section className="section--page gridcol">
          <p className="p--basic__number right">/03</p>
          <p className="section--title__app right">Customer's needs</p>
          <img className="img--right" src={`${import.meta.env.BASE_URL}/images/history/visit1.webp`} srcSet={`${import.meta.env.BASE_URL}/images/history/@2x/visit1@2x.webp 2x`} alt="" />
          <div className="div--right">
            <p className="p--basic__modif">I visited a strawberry farm in order to better understand the real needs and expectations of potential users of the&nbsp;application.</p>
            <p className="p--basic">This visit allowed me to observe the farmers’ working environment and better understand the challenges of monitoring crop production and greenhouse conditions. By discussing directly with the growers, I gathered valuable feedback that helped me design an application better adapted to real agricultural needs, with a focus on usability and&nbsp;efficiency.</p>
          </div>
        </section>
      </Reveal>

      <Reveal className="reveal--right">
        <section className="section--page gridcol">
          <div className="img--right2">
            <p className="p--basic__number left">/04</p>
            <p className="section--title__app left">A first website design</p>
            <p className="p--basic__modif">The first thing I did in this project was thinking about the website’s&nbsp;design.</p>
            <p className="p--basic">I started by making some wireframes on Figma. I did a lot of variation between every&nbsp;test.</p>
          </div>
        </section>
      </Reveal>

      <Reveal className="reveal--left">
        <section className="section--page gridcol">
          <p className="p--basic__number right">/05</p>
          <p className="section--title__app right">The thinking behind the working&nbsp;model</p>
          <img className="img--right" src={`${import.meta.env.BASE_URL}/images/history/sheet3.webp`} srcSet={`${import.meta.env.BASE_URL}/images/history/@2x/sheet3@2x.webp 2x`} alt="" />
          <div className="div--right">
            <p className="p--basic__modif">For this project, I wanted to use an Arduino or a Raspberry Pi. I thought my project would be more valuable if something actually worked alongside&nbsp;it.</p>
            <p className="p--basic">In addition, the digital twin demonstrates that the proposed system is functional and adaptable to real-world conditions. This adds value to the project, which is no longer entirely&nbsp;fictional.</p>
          </div>
        </section>
      </Reveal>

      <Reveal className="reveal--right">
        <section className="section--page gridcol">
          <p className="p--basic__number right2">/06</p>
          <p className="section--title__app right2">Proof of&nbsp;concept</p>
          <img className="img--right2" src={`${import.meta.env.BASE_URL}/images/history/sheet3.webp`} srcSet={`${import.meta.env.BASE_URL}/images/history/@2x/sheet3@2x.webp 2x`} alt="" />
          <div className="div--right2">
            <p className="p--basic__modif">To validate the idea, I have designed a mock-up to provide data to our&nbsp;database.</p>
            <p className="p--basic">The mock-up is made of 3 digital strawberry plants with fruits represented by RBG LED. The LED's colours are changed to represent the strawberry from flower to full red ripped fruit. Som e sensors have also been added to simulate the weather's conditions (tempereture, humidity and athmosphere&nbsp;pressure)</p>
          </div>
        </section>
      </Reveal>

      <div className="carousel">
        <div className="group">
          <div className="card"><img src={`${import.meta.env.BASE_URL}/images/history/mockup.webp`} srcSet={`${import.meta.env.BASE_URL}/images/history/@2x/sheet3@2x.webp 2x`} alt=""/></div>
          <div className="card"><img src={`${import.meta.env.BASE_URL}/images/history/sheet3.webp`} srcSet={`${import.meta.env.BASE_URL}/images/history/@2x/sheet3@2x.webp 2x`} alt=""/></div>
          <div className="card"><img src={`${import.meta.env.BASE_URL}/images/history/sheet3.webp`} srcSet={`${import.meta.env.BASE_URL}/images/history/@2x/sheet3@2x.webp 2x`} alt=""/></div>
          <div className="card"><img src={`${import.meta.env.BASE_URL}/images/history/sheet3.webp`} srcSet={`${import.meta.env.BASE_URL}/images/history/@2x/sheet3@2x.webp 2x`} alt=""/></div>
        </div>

        <div aria-hidden className="group">
          <div className="card"><img src={`${import.meta.env.BASE_URL}/images/history/mockup.webp`} srcSet={`${import.meta.env.BASE_URL}/images/history/@2x/sheet3@2x.webp 2x`} alt=""/></div>
          <div className="card"><img src={`${import.meta.env.BASE_URL}/images/history/sheet3.webp`} srcSet={`${import.meta.env.BASE_URL}/images/history/@2x/sheet3@2x.webp 2x`} alt=""/></div>
          <div className="card"><img src={`${import.meta.env.BASE_URL}/images/history/sheet3.webp`} srcSet={`${import.meta.env.BASE_URL}/images/history/@2x/sheet3@2x.webp 2x`} alt=""/></div>
          <div className="card"><img src={`${import.meta.env.BASE_URL}/images/history/sheet3.webp`} srcSet={`${import.meta.env.BASE_URL}/images/history/@2x/sheet3@2x.webp 2x`} alt=""/></div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </main>
    </PageTransition>
  );
}