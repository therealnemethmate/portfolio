import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <h4>Email</h4>
                        <h5>nmate91@gmail.com</h5>
                        <a href="mailto:nmate91@gmail.com" target="_blank" rel="noreferrer">
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <h4>Phone</h4>
                        <h5>+36305306722</h5>
                        <a href="tel:+36305306722" target="_blank" rel="noreferrer">
                            Call me maybe
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Contact;