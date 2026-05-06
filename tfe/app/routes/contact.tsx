import { Link } from "react-router";
import { useEffect, useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/foot";

export default function Contact() {
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const surname = String(formData.get("surname") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!name || !surname || !email) {
      setError(true);
      setPopup(false);
      return;
    }

    setError(false);
    setPopup(true);
    form.reset();

    setTimeout(() => {
      setPopup(false);
    }, 3000);
  }

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

            <form className="contact--form" onSubmit={handleSubmit}>
                <label>
                    <p className="p--basic">Name <span>*</span></p>
                    <input type="text" name="name" />
                </label>

                <label>
                    <p className="p--basic">Surname <span>*</span></p>
                    <input type="text" name="surname" />
                </label>

                <label>
                    <p className="p--basic">eMail Adress <span>*</span></p>
                    <input type="email" name="email" />
                </label>

                <label>
                    <p className="p--basic">Message</p>
                    <textarea name="message"></textarea>
                </label>

                {error && (
                    <p className="form--error">
                    Please fill in name, surname and email.
                    </p>
                )}

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

            {popup && (
                <div className="popup--success">
                    <p>Your message has been sent successfully.</p>
                </div>
            )}

            <img className="contact--img" src={`${import.meta.env.BASE_URL}/images/contact/strawberries.webp`} srcSet={`${import.meta.env.BASE_URL}/images/contact/@2x/strawberries@2x.webp`} alt="Image showing some straweberries (ready to be sold)"/>
        
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}