import { Link } from "react-router";
import { useEffect, useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/foot";

export default function Home() {
  return (
    <main>
      <Nav />
        <header className="head--text__contact">
          <h1>Contact us</h1>
          <h2>Get in touch with us for any enquiries and questions</h2>
        </header>

        <section className="section--contact gridcol">
            <div className="contact--infos">
            <div>
                <h2 className="benefits--title">General inquiries</h2>
                <p className="p--basic">berrycam.questions@gmail.com</p>
                <p className="p--basic">+32 492 50 37 14</p>
            </div>

            <div>
                <h2 className="benefits--title">Collaborations</h2>
                <p className="p--basic">berrycam.collab@gmail.com</p>
                <p className="p--basic">+32 492 52 84 43</p>
            </div>
            </div>

            <form className="contact--form">
                <label>
                    <p className="p--basic">Name</p>
                    <input type="text" name="name" />
                </label>

                <label>
                    <p className="p--basic">Surname</p>
                    <input type="text" name="surname" />
                </label>

                <label>
                    <p className="p--basic">eMail Adress</p>
                    <input type="email" name="email" />
                </label>

                <label>
                    <p className="p--basic">Message</p>
                    <textarea name="message"></textarea>
                </label>

                <div className="contact--checks">
                    <label>
                    <input type="checkbox" />
                    <p className="p--basic__contact">Send me a copy of my message</p>
                    </label>

                    <label>
                    <input type="checkbox" />
                    <p className="p--basic__contact">Subscribe to the newsletter</p>
                    </label>
                </div>

                <button className="btn--contact" type="submit">Send it</button>
            </form>

            {/* <img className="contact--img" src="{`${import.meta.env.BASE_URL}/images/contact/strawberries.png" alt="Strawberries"/> */}
        
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}