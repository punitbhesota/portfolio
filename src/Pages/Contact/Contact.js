import React from "react";
import { useRef } from "react";
import { Link } from "react-scroll";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_sau0561",
        "contact_form",
        form.current,
        "e8I733limudoOOW92"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.heading}>Want to Contact ?</div>
      <div className={styles.contact_content}>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input type="text" placeholder="Enter name" name="user_name" />
          <input
            type="tel"
            placeholder="Enter your phone number"
            name="user_phone"
          />
          <input type="email" placeholder="Enter mail" name="user_email" />
          <textarea placeholder="Your message" name="message" />
          <button type="submit">Send</button>
        </form>
        <div className={styles.text_div}>
          Would love to hear from you,
          <br />
          Get in touch 👋
        </div>
      </div>

      <Link to="hero" smooth>
        <img className={styles.top} src="./stickers/top.png" alt="" />
      </Link>
      <div className={styles.prefooter}>
        <a href="https://github.com/punitbhesota">Github</a>
        <a href="https://linkedin.com/in/punitbhesota">Linkedin</a>
        <a href="https://twitter.com/punitbhesota">Twitter</a>
        <a href="https://instagram.com/punitbhesota/">Instagram</a>
      </div>
      <footer className={styles.footer}>
        <div>@punitbhesota 2022 , Built by me 🧡</div>
        <div>Mail : punnitbhesota@gmail.com</div>
      </footer>
    </div>
  );
};

export default Contact;
