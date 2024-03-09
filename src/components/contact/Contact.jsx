import React, { useState } from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hukk6ms',
        'template_jg4wurs',
        form.current,
        'kVp_OU_f3un9w-66j'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact" className="banner02">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <h3 className="contact_title">Talk to me</h3>
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>falakgala09@gmail.com</h5>
            <a
              href="mailto:falakgala09@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email link">
              Email Me
            </a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Falak Gala</h5>
            <a
              href="https://www.linkedin.com/in/falak-gala/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile link">
              Connect with Me
            </a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <h3 className="contact_title">Write me your Project</h3>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Talk about any Project or just say Hello"
            required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {done && 'Thank You...'}
        </form>
      </div>
    </section>
  );
};

export default Contact;
