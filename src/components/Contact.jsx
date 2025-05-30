import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    await fetch(
      'https://docs.google.com/forms/d/e/1FAIpQLScR0hPNvcTY5bUv0XgDzJx2PwXHiilNcuJnYTDS_fN1nMJkig/formResponse',
      {
        method: 'POST',
        mode: 'no-cors',
        body: data,
      }
    );
    setSubmitted(true);
    form.reset();
  };

  return (
    <section className="contact-section">
      <h1>Contact Me</h1>
      <p>
        My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you!
        Feel free to mail me about any relevant job updates.
      </p>
      {submitted ? (
        <div className="thank-you">Thank you for your message!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="entry.481705659"
            placeholder="Your email address"
            required
          />
          <textarea
            name="entry.1750904755"
            placeholder="Your message"
            required
            rows={6}
          />
          <button type="submit">Send Message</button>
        </form>
      )}
    </section>
  );
};

export default Contact;