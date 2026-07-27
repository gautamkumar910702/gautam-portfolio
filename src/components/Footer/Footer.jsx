import "./Footer.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>Gautam Kumar</h2>

          <p>
            Passionate Full Stack Developer focused on building responsive,
            scalable and user-friendly web applications using the MERN Stack.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#experience">Experience</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h3>Connect</h3>

          <div className="social-icons">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/gautamcu91/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:gautamkumar910702@gmail.com">
              <FaEnvelope />
            </a>
          </div>

          <p>📍 Mohali, Punjab, India</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Gautam Kumar. All Rights Reserved.
        </p>

        <button
          className="top-btn"
          onClick={scrollToTop}
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      </div>
    </motion.footer>
  );
}

export default Footer;