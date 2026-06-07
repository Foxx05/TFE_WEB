import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import VideoScroll from "../components/VideoScroll";
import Footer from "../components/Foot";
import { NavLink } from "react-router";
import Reveal from "../components/Reveal";
import PageTransition from "../components/PageTransition";

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
          <p className="section--title__app right">Some 3D&nbsp;assets</p>
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
          <p className="section--title__app right">About the images</p>
          <img className="img--right" src={`${import.meta.env.BASE_URL}/images/credit/images.webp`} srcSet={`${import.meta.env.BASE_URL}/images/credit/@2x/images@2x.webp 2x`} alt="Close-up of an open notebook, revealing a page labeled “TFE” (the French equivalent of a final project). A Bic pen is also visible. The whole scene is set on a wooden table."/>
          <div className="div--right">
            <p className="p--basic__modif">Magnific (formerly Freepik) or me</p>
            <p className="p--basic">All images on this site are either from “Magnific” (a free online image bank) or were taken by me. I designed the logo and&nbsp;illustrations.</p>
            <p className="p--basic"><a href="https://www.magnific.com/" target="_blank" rel="noopener noreferrer">Link to Magnific</a></p>
          </div>
        </section>
      </Reveal>

      <Reveal className="reveal--left">
        <section className="section--page gridcol">
          <p className="p--basic__number right">/03</p>
          <p className="section--title__app right">About the carousel&nbsp;animation</p>
          <img className="img--right" src={`${import.meta.env.BASE_URL}/images/credit/carousel.webp`} srcSet={`${import.meta.env.BASE_URL}/images/credit/@2x/carousel@2x.webp 2x`} alt="View on two screens. The first (smaller) screen shows the carousel section. The second screen shows the code that displays that section."/>
          <div className="div--right">
            <p className="p--basic__modif">I ran into a few issues with the carousel section on the “History”&nbsp;page.</p>
            <p className="p--basic">I followed this tutorial video, it helped me understand how to achieve the look I wanted. I then adjusted the various settings to match the project’s overall&nbsp;atmosphere.</p>
            <p className="p--basic"><a href="https://www.youtube.com/watch?v=KD1Yo8a_Qis" target="_blank" rel="noopener noreferrer">Link to watch the same video</a></p>
          </div>
        </section>
      </Reveal>

      <Reveal className="reveal--left">
        <section className="section--page gridcol">
          <p className="p--basic__number right">/04</p>
          <p className="section--title__app right">About the digital&nbsp;twin</p>
          <img className="img--right" src={`${import.meta.env.BASE_URL}/images/credit/twin.webp`} srcSet={`${import.meta.env.BASE_URL}/images/credit/@2x/twin@2x.webp 2x`} alt="View showing the model. In the foreground, you can see the Raspberry Pi."/>
          <div className="div--right">
            <p className="p--basic__modif">I read the documentation and watched a video on YouTube to&nbsp;learn</p>
            <p className="p--basic">Regarding the Scikit-learn documentation, I decided to use the KNN method. I watched a video on YouTube to better understand the logic behind this&nbsp;method.</p>
            <p className="p--basic"><a href="https://scikit-learn.org/stable/index.html" target="_blank" rel="noopener noreferrer">Link to Scikit-learn</a></p>
            <p className="p--basic"><a href="https://www.youtube.com/watch?v=Xh-J_m-bZcE" target="_blank" rel="noopener noreferrer">Link to watch the same video</a></p>
          </div>
        </section>
      </Reveal>

      <Reveal className="reveal--left">
        <section className="section--page gridcol">
          <p className="p--basic__number right">/05</p>
          <p className="section--title__app right">About the&nbsp;electronic</p>
          <img className="img--right" src={`${import.meta.env.BASE_URL}/images/credit/elec.webp`} srcSet={`${import.meta.env.BASE_URL}/images/credit/@2x/elec@2x.webp 2x`} alt="A close-up of the LCD screen displaying various data."/>
          <div className="div--right">
            <p className="p--basic__modif">I'm really not an electronical engineer...</p>
            <p className="p--basic">I had to learn quite a bit about the electronics side of things during this project. I mainly relied on the documentation for the various electronic&nbsp;components.</p>
            <p className="p--basic"><a href="https://learn.adafruit.com/16-channel-pwm-servo-driver/python-circuitpython" target="_blank" rel="noopener noreferrer">Link to the PCA9685 documentation</a></p>
            <p className="p--basic"><a href="https://learn.adafruit.com/monochrome-oled-breakouts/wiring-128x64-oleds" target="_blank" rel="noopener noreferrer">Link to the Monochrome OLED documentation</a></p>
            <p className="p--basic"><a href="https://learn.adafruit.com/adafruit-aht20" target="_blank" rel="noopener noreferrer">Link to the AHT20 documentation</a></p>
            <p className="p--basic"><a href="https://learn.adafruit.com/adafruit-bh1750-ambient-light-sensor" target="_blank" rel="noopener noreferrer">Link to the BH1750 documentation</a></p>
          </div>
        </section>
      </Reveal>

      <Reveal className="reveal--left">
        <section className="section--page gridcol">
          <p className="p--basic__number right">/06</p>
          <p className="section--title__app right">A video&nbsp;section</p>
          <img className="img--right" src={`${import.meta.env.BASE_URL}/images/credit/videoSection.webp`} srcSet={`${import.meta.env.BASE_URL}/images/credit/@2x/videoSection@2x.webp 2x`} alt="Screenshot of the 3D greenhouse model that appears in the animated section."/>
          <div className="div--right">
            <p className="p--basic__modif">To save time, I looked at what had been done elsewhere for inspiration. That’s how I found this animation, which was quite&nbsp;helpful.</p>
            <p className="p--basic">Since I couldn’t adapt it to the React project, I asked ChatGPT for some ideas. I also used AI to make the loading process as smooth as possible (there were a lot of frames to&nbsp;load).</p>
            <p className="p--basic"><a href="https://codepen.io/shshaw/pen/vYKBPbv/9e810322d70c306de2d18237d0cb2d78" target="_blank" rel="noopener noreferrer">Link to the main&nbsp;inspiration</a></p>
          </div>
        </section>
      </Reveal>

      <Reveal className="reveal--left">
        <section className="section--page gridcol">
          <p className="p--basic__number right">/07</p>
          <p className="section--title__app right">About the&nbsp;app</p>
          <img className="img--right" src={`${import.meta.env.BASE_URL}/images/product/phone.webp`} srcSet={`${import.meta.env.BASE_URL}/images/product/@2x/phone@2x.webp 2x`} alt="Screenshot of the 3D greenhouse model that appears in the animated section."/>
          <div className="div--right">
            <p className="p--basic__modif">As for the app itself, I didn't rely on any external resources. I just browsed Dribbble looking for&nbsp;inspiration.</p>
            <p className="p--basic">However, when it came to account management, that’s where things got complicated. In fact, I had never done that before. So I had to rely on YouTube and AI (ChatGPT) to achieve the current&nbsp;result.</p>
            <p className="p--basic"><a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">Link to Dribbble</a></p>
            <p className="p--basic"><a href="https://www.youtube.com/watch?v=JAgd_L3GhI0" target="_blank" rel="noopener noreferrer">Link to watch the same video</a></p>
          </div>
        </section>
      </Reveal>

      <Reveal className="reveal--left">
        <section className="section--page gridcol">
          <p className="p--basic__number right">/08</p>
          <p className="section--title__app right">A few&nbsp;thanks</p>
          <img className="img--right" src={`${import.meta.env.BASE_URL}/images/credit/thanks.webp`} srcSet={`${import.meta.env.BASE_URL}/images/credit/@2x/thanks@2x.webp 2x`} alt="Close-up of strawberries (ripening). The photo was taken at “La Fraiserie de Franière”."/>
          <div className="div--right">
            <p className="p--basic__modif">I think it’s important to thank a few people without whom this project wouldn’t be what it is&nbsp;today.</p>
            <p className="p--basic">Thank you to the strawberry farmer who let me take photos of his greenhouses (La Fraiserie de Franière), to my internship supervisor for his regular feedback throughout the project, and to my teachers and friends for their&nbsp;help.</p>
            <p className="p--basic"><a href="https://www.facebook.com/p/La-Fraiseraie-de-Frani%C3%A8re-100057332063508/?locale=fr_FR" target="_blank" rel="noopener noreferrer">Link to the Facebook page of "La Fraiserie de&nbsp;Franière"</a></p>
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