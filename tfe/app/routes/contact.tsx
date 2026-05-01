import { Link } from "react-router";
import { useEffect, useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/foot";

export default function Home() {
  return (
    <main>
      <Nav />
      <header className="head head--text__contact">
          <h1>Contact us</h1>
          <h2>Get in touch with us for any enquiries and questions</h2>
      </header>

      <div className="contact--infos">
          <div>
            <h2>General inquiries</h2>
            <p>berrycam.questions@gmail.com</p>
            <p>+32 492 50 37 14</p>
          </div>

          <div>
            <h2>Collaborations</h2>
            <p>berrycam.collab@gmail.com</p>
            <p>+32 492 52 84 43</p>
          </div>
        </div>

        <form className="contact--form">
          <label>
            Name
            <input type="text" name="name" />
          </label>

          <label>
            Surname
            <input type="text" name="surname" />
          </label>

          <label>
            eMail Adress
            <input type="email" name="email" />
          </label>

          <label>
            Message
            <textarea name="message"></textarea>
          </label>

          <div className="contact--checks">
            <label>
              <input type="checkbox" />
              Send me a copy of my message
            </label>

            <label>
              <input type="checkbox" />
              Subscribe to the newsletter
            </label>
          </div>

          <button className="btn--contact" type="submit">
            Send it →
          </button>
        </form>

        <img className="contact--img" src="/images/contact/strawberries.png" alt="Strawberries"/>
        
      <footer>
        <Footer />
      </footer>
    </main>
  );
}