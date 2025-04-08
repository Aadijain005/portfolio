import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2>Contact Me</h2>
            <p>
                Let's connect! Feel free to reach out for collaborations, projects, or inquiries. Here's how you can contact me:
            </p>
            <ul className="contact-details">
                <li><strong>Email:</strong> 2022pictcsaadi001@poornima.org</li>
                <li><strong>Phone:</strong> +91-8824462892</li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aadi-jain-91646b272/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
                <li><strong>Location:</strong> Jaipur, Rajasthan</li>
                <li><strong>Github :</strong>Aadijain005</li>
            </ul>
        </section>
    );
};

export default Contact;