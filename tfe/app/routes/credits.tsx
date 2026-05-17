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
        <div className="head--img__credit"></div>
        <div className="head--text head--text__credit">
          <h1>Credits</h1>
          <h2>Where did I get that ?</h2>
        </div>
      </header>

      <Reveal className="reveal--left">
        <section className="section--page gridcol">
          <p className="p--basic__number right">/01</p>
          <p className="section--title__app right"> Some 3D&nbsp;assets</p>
          <img className="img--right" src={`${import.meta.env.BASE_URL}/images/credit/renders.webp`} srcSet={`${import.meta.env.BASE_URL}/images/credit/@2x/renders@2x.webp 2x`} alt="Close-up of an open notebook, revealing a page labeled “TFE” (the French equivalent of a final project). A Bic pen is also visible. The whole scene is set on a wooden table."/>
          <div className="div--right">
            <p className="p--basic__modif">I used two 3D assets in my greenhouse scene: the blue plastic bins and the wheelbarrow.</p>
            <p className="p--basic">Both assets are free. I took the liberty of using them because they saved me time. I created the rest of the 3D scenes myself in&nbsp;Blender.</p>
            <p className="p--basic"><a href="https://free3d.com/fr/3d-model/dirty-wheelbarrow-low-poly-3d-model-410575.html?dd_referrer=" target="_blank" rel="noopener noreferrer">Link to the wheelbarrow asset</a></p>
            <p className="p--basic"><a href="https://free3d.com/fr/3d-model/plastic-fruit-crate-v1--190535.html" target="_blank" rel="noopener noreferrer">Link to the plastic bins asset</a></p>
          </div>
        </section>
      </Reveal>

      <Reveal className="reveal--left">
        <section className="section--page gridcol">
          <p className="p--basic__number right">/02</p>
          <p className="section--title__app right">With the help of&nbsp;YouTube</p>
          <img className="img--right" src={`${import.meta.env.BASE_URL}/images/credit/carousel.webp`} srcSet={`${import.meta.env.BASE_URL}/images/credit/@2x/carousel@2x.webp 2x`} alt="Close-up of an open notebook, revealing a page labeled “TFE” (the French equivalent of a final project). A Bic pen is also visible. The whole scene is set on a wooden table."/>
          <div className="div--right">
            <p className="p--basic__modif">I ran into a few issues with the carousel section on the “History”&nbsp;page.</p>
            <p className="p--basic">I followed this tutorial video, it helped me understand how to achieve the look I wanted. I then adjusted the various settings to match the project’s overall&nbsp;atmosphere.</p>
            <p className="p--basic"><a href="https://www.youtube.com/watch?v=KD1Yo8a_Qis" target="_blank" rel="noopener noreferrer">Link to watch the same video</a>.</p>
          </div>
        </section>
      </Reveal>

      <Reveal className="reveal--left">
        <section className="section--page gridcol">
          <p className="p--basic__number right">/03</p>
          <p className="section--title__app right">A few&nbsp;thanks</p>
          <img className="img--right" src={`${import.meta.env.BASE_URL}/images/credit/thanks.webp`} srcSet={`${import.meta.env.BASE_URL}/images/credit/@2x/thanks@2x.webp 2x`} alt="Close-up of an open notebook, revealing a page labeled “TFE” (the French equivalent of a final project). A Bic pen is also visible. The whole scene is set on a wooden table."/>
          <div className="div--right">
            <p className="p--basic__modif">I think it’s important to thank a few people without whom this project wouldn’t be what it is&nbsp;today.</p>
            <p className="p--basic">Thank you to the strawberry farmer who let me take photos of his greenhouses (La Fraiserie de Franière), to my internship supervisor for his regular feedback throughout the project, and to my teachers and friends for their&nbsp;help.</p>
            <p className="p--basic"><a href="https://www.facebook.com/p/La-Fraiseraie-de-Frani%C3%A8re-100057332063508/?locale=fr_FR">Link to the Facebook page of "La fraiserie de Franière"</a></p>
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