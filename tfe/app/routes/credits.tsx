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
        <div className="head--img__app"></div>
        <div className="head--text head--text__app">
          <h1 className="title--page">Behind&nbsp;BerryCam</h1>
          <h2>Where did I get that ?</h2>
        </div>
      </header>

      <Reveal className="reveal--left">
        <section className="section--page gridcol">
          <p className="p--basic__number right">/01</p>
          <p className="section--title__app right">3D&nbsp;assets</p>
          <img className="img--right" src={`${import.meta.env.BASE_URL}/images/credit/renders.webp`} srcSet={`${import.meta.env.BASE_URL}/images/credit/@2x/renders@2x.webp 2x`} alt="Close-up of an open notebook, revealing a page labeled “TFE” (the French equivalent of a final project). A Bic pen is also visible. The whole scene is set on a wooden table."/>
          <div className="div--right">
            <p className="p--basic__modif">I used two 3D assets in my greenhouse scene: the blue plastic bins and the wheelbarrow.</p>
            <p className="p--basic"><a href="https://free3d.com/fr/3d-model/dirty-wheelbarrow-low-poly-3d-model-410575.html?dd_referrer=" target="_blank" rel="noopener noreferrer">Link to the wheelbarrow asset</a></p>
            <p className="p--basic"><a href="https://free3d.com/fr/3d-model/plastic-fruit-crate-v1--190535.html" target="_blank" rel="noopener noreferrer">Link to the plastic bins</a></p>
          </div>
        </section>
      </Reveal>

      <Reveal className="reveal--left">
        <section className="section--page gridcol">
          <p className="p--basic__number right">/02</p>
          <p className="section--title__app right">Some&nbsp;acknowledgments</p>
          <img className="img--right" src={`${import.meta.env.BASE_URL}/images/history/sheet.webp`} srcSet={`${import.meta.env.BASE_URL}/images/history/@2x/sheet@2x.webp 2x`} alt="Close-up of an open notebook, revealing a page labeled “TFE” (the French equivalent of a final project). A Bic pen is also visible. The whole scene is set on a wooden table."/>
          <div className="div--right">
            <p className="p--basic__modif">I think it’s important to thank a few people without whom this project wouldn’t be what it is&nbsp;today.</p>
            <p className="p--basic">Thank you to the strawberry farmer who let me take photos of his greenhouses, to my internship supervisor for his regular feedback throughout the project, and to my teachers and friends for their&nbsp;help.</p>
          </div>
        </section>
      </Reveal>

      <Reveal className="reveal--left">
        <section className="section--page gridcol">
          <p className="p--basic__number right">/02</p>
          <p className="section--title__app right">Some&nbsp;acknowledgments</p>
          <img className="img--right" src={`${import.meta.env.BASE_URL}/images/history/sheet.webp`} srcSet={`${import.meta.env.BASE_URL}/images/history/@2x/sheet@2x.webp 2x`} alt="Close-up of an open notebook, revealing a page labeled “TFE” (the French equivalent of a final project). A Bic pen is also visible. The whole scene is set on a wooden table."/>
          <div className="div--right">
            <p className="p--basic__modif">I think it’s important to thank a few people without whom this project wouldn’t be what it is&nbsp;today.</p>
            <p className="p--basic">Thank you to the strawberry farmer who let me take photos of his greenhouses, to my internship supervisor for his regular feedback throughout the project, and to my teachers and friends for their&nbsp;help.</p>
          </div>
        </section>
      </Reveal>

      <footer>
        <Footer />
      </footer>
    </main>
    </PageTransition>
  );
}