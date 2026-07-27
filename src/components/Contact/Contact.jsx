import "./Contact.css";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "gautamkumar910702@gmail.com",
      link: "mailto:gautamkumar910702@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+91 9102237011",
      link: "tel:+919102237011",
    },
    {
      icon: <FaLocationDot />,
      title: "Location",
      value: "Mohali, Punjab, India",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      link: "https://github.com/",
      // Replace with your GitHub profile
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/gautamcu91/",
    },
  ];

  console.log({
  service: import.meta.env.VITE_EMAIL_SERVICE_ID,
  template: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
});
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
  import.meta.env.VITE_EMAIL_SERVICE_ID,
  import.meta.env.VITE_EMAIL_TEMPLATE_ID,
  form.current,
  {
    publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
  }
);

      toast.success("Message sent successfully.");
      form.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        {/* Section Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span>CONTACT</span>

          <h2>Let's Work Together</h2>

          <p className="contact-subtitle">
            Have an idea, project or internship opportunity?
            <br />
            Let's connect and build something amazing.
          </p>
        </motion.div>

        <div className="contact-container">
          {/* Left Side */}
          <div className="contact-left">
            <h3>Get In Touch</h3>

            <p>
              I'm always interested in internships, freelance work and exciting
              software development opportunities.
            </p>

            <div className="contact-cards">
              {contactInfo.map((item, index) => (
                <div className="contact-card" key={index}>
                  <div className="contact-icon">{item.icon}</div>

                  <div>
                    <h4>{item.title}</h4>

                    <a href={item.link}>{item.value}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
             <form
              ref={form}
              className="contact-form"
              onSubmit={sendEmail}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="send-btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form> 
            

            
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;