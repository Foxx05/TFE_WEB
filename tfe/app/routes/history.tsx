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
        <div className="head--img__history"></div>

        <div className="head--text head--text__app">
          <h1 className="title--page">A brief historical&nbsp;note</h1>
          <h2>A story that is just&nbsp;beginning...</h2>
        </div>
      </header>

      <section className="section--page gridcol">
        <p className="p--basic__number right">/01</p>
        <img className="img--right" src="/images/app/app1.png" alt="" />
        <div className="div--right">
          <p className="section--title__app">Live sensor&nbsp;data</p>
          <p className="p--basic__modif">It all started with an idea for my final year&nbsp;project.</p>
          <p className="p--basic">I wanted to address a current issue. As an anecdote, there is a strawberry farmer near my home who does everything manually. It is a large-scale operation that requires a lot of time. So I started thinking about a solution that would free up some of the farmer's&nbsp;time.</p>
        </div>
      </section>

      <section className="section--page gridcol">
        <p className="p--basic__number right2">/02</p>
        <img className="img--right2" src="/images/app/app3.png" alt="" />
        <div className="div--right2">
          <p className="section--title__app">Greenhouse overview</p>
          <p className="p--basic__modif">I wanted to find a solution to an existing problem. I think it’s a good way to start a final year&nbsp;project.</p>
          <p className="p--basic">The idea came during a brainstorming with my father and a friend of his. I always had interest in&nbsp;farming.</p>
        </div>
      </section>

      <section className="section--page gridcol">
        <p className="p--basic__number left">/03</p>
        <div className="div--left">
          <p className="section--title__app">A first website design</p>
          <p className="p--basic__modif">The first thing I did in this project was thinking about the website’s&nbsp;design.</p>
          <p className="p--basic">I started by making some wireframes on Figma. I did a lot of variation between every&nbsp;test.</p>
        </div>
      </section>

      <section className="section--page gridcol">
        <p className="p--basic__number right">/04</p>
        <img className="img--right" src="/images/app/app1.png" alt="" />
        <div className="div--right">
          <p className="section--title__app">The thinking behind the working&nbsp;model</p>
          <p className="p--basic__modif">For this project, I wanted to use an Arduino or a Raspberry Pi. I thought my project would be more valuable if something actually worked alongside&nbsp;it.</p>
          <p className="p--basic">I'm clearly not an electronics expert, but I want to learn more than what we saw in&nbsp;school.</p>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}