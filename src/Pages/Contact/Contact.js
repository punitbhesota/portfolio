import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { user_name, user_email, message } = formData;

    if (!user_name) {
      toast("Please fill in your name before submitting.");
      return;
    }
    if (!user_email) {
      toast("Please fill in your email before submitting.");
      return;
    }
    if (!message) {
      toast("Please fill in your message before submitting.");
      return;
    }
    
    emailjs
      .sendForm(
        "service_sau0561",
        "contact_form",
        e.target,
        "e8I733limudoOOW92"
      )
      .then(
        (result) => {
          toast("Thanks for reaching out! We'll be in touch shortly.");
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
      <form onSubmit={sendEmail} className={styles.form}>
        <input
          type="text"
          placeholder="Enter name"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
        />
        <input
          type="tel"
          placeholder="Enter your phone number"
          name="user_phone"
          value={formData.user_phone}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter mail"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
        />
        <textarea
          placeholder="Your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
        <div className={styles.text_div}>
          Would love to hear from you,
          <br />
          Get in touch 👋
        </div>
      </div>
      <ToastContainer />

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
        <div>Mail : <a href="mailto:punnitbhesota@gmail.com">punnitbhesota@gmail.com</a></div>
      </footer>
    </div>
  );
};

export default Contact;
