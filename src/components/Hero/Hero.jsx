import "./Hero.css";
import profileImage from "../../assets/profile.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

// Example:
// import profileImage from "../../assets/images/profile.png";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Background Glow */}

      <div className="hero-blur blur-one"></div>
      <div className="hero-blur blur-two"></div>

      <div className="container hero-container">

        {/* ===========================
            LEFT
        ============================ */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          {/* Availability */}

          <div className="availability">

            <span className="status-dot"></span>

            Available for Internship

          </div>

          {/* Greeting */}

          <p className="hero-greeting">

            Hello, I'm

          </p>

          {/* Name */}

          <h1 className="hero-title">

            Gautam Kumar

          </h1>

          {/* Typewriter */}

          <h2 className="hero-role">

            <Typewriter

              words={[

                "MERN Stack Developer",

                "Java Developer",

                "Problem Solver",

                "Backend Developer",

                "React Developer",

              ]}

              loop={0}

              cursor

              cursorStyle="|"

              typeSpeed={70}

              deleteSpeed={50}

              delaySpeed={1800}

            />

          </h2>

          {/* Description */}

          <p className="hero-description">

            Building scalable and modern web applications
            using React, Node.js, Express.js and MongoDB.

            Passionate about creating responsive,
            high-performance and user-friendly applications.

          </p>

          {/* Buttons */}

          <div className="hero-buttons">

            <a

              href="#projects"

              className="primary-btn"

            >

              View Projects

              <FaArrowRight />

            </a>

            <a

              href="https://drive.google.com/file/d/1OTGEoxzIzb5KChFaIlgjd99xfbCpVcBa/view?usp=sharing"

              className="secondary-btn"

            >

              <FaDownload />

              Download CV

              {/* Example

                  href="/resume/Gautam_Kumar_Resume.pdf"

              */}

            </a>

          </div>

          {/* Social */}

          <div className="hero-social">

            <a href="#">

              <FaGithub />

            </a>

            <a

              href="https://www.linkedin.com/in/gautamcu91/"

              target="_blank"

              rel="noreferrer"

            >

              <FaLinkedin />

            </a>

            <a href="#">

              <SiLeetcode />

            </a>

          </div>

        </motion.div>

        {/* ===========================
             RIGHT
        ============================ */}

        <motion.div

          className="hero-right"

          initial={{ opacity: 0, x: 80 }}

          animate={{ opacity: 1, x: 0 }}

          transition={{ duration: .8 }}

        >

          {/* Image Circle */}

          <div className="hero-image">

            {

            <img
              src={profileImage}
              alt="Gautam Kumar"
            />

            }

            <div className="image-placeholder">

              {/* Your Photo */}

            </div>

          </div>

          {/* Floating Icons */}

          <div className="floating-icon react">

            <SiReact />

          </div>

          <div className="floating-icon node">

            <SiNodedotjs />

          </div>

          <div className="floating-icon mongo">

            <SiMongodb />

          </div>

          <div className="floating-icon js">

            <SiJavascript />

          </div>

          <div className="floating-icon express">

            <SiExpress />

          </div>
                    {/* Floating Glass Cards */}

          <motion.div
            className="hero-card card-one"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3>250+</h3>
            <p>LeetCode Problems</p>
          </motion.div>

          <motion.div
            className="hero-card card-two"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3>10+</h3>
            <p>Projects</p>
          </motion.div>

          <motion.div
            className="hero-card card-three"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3>2+</h3>
            <p>Years Learning</p>
          </motion.div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <div className="scroll-indicator">

        <a href="#about">

          <div className="mouse">

            <span></span>

          </div>

        </a>

      </div>

    </section>
  );
}

export default Hero;