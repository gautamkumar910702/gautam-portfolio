import "./About.css";

import { motion } from "framer-motion";

import {
  FaUserGraduate,
  FaLaptopCode,
  FaLocationDot,
} from "react-icons/fa6";

import {
  HiOutlineAcademicCap,
} from "react-icons/hi2";

function About() {
  return (
    <section
      className="about section"
      id="about"
    >
      <div className="container">

        {/* ================= Section Title ================= */}

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span>
            ABOUT ME
          </span>

          <h2>
            Know Me Better
          </h2>

        </motion.div>

        {/* ================= About Container ================= */}

        <div className="about-container">

          {/* LEFT */}

          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <h3>

              Passionate Full Stack Developer

            </h3>

            <p>

              Hello! I'm <strong>Gautam Kumar</strong>, a
              Computer Science Engineering student at
              Chandigarh University.

            </p>

            <p>

              I enjoy building modern, responsive and
              scalable web applications using the MERN
              Stack. I also solve DSA problems regularly
              and continuously improve my development
              skills.

            </p>

            <p>

              My goal is to become a highly skilled
              Software Engineer capable of building
              products that solve real-world problems.

            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            {/* Card 1 */}

            <div className="about-card">

              <FaUserGraduate className="about-icon"/>

              <div>

                <h4>

                  Education

                </h4>

                <p>

                  B.Tech Computer Science Engineering

                  <br/>

                  Chandigarh University

                </p>

              </div>

            </div>

            {/* Card 2 */}

            <div className="about-card">

              <FaLaptopCode className="about-icon"/>

              <div>

                <h4>

                  Specialization

                </h4>

                <p>

                  MERN Stack Development

                  <br/>

                  Java & DSA

                </p>

              </div>

            </div>

            {/* Card 3 */}

            <div className="about-card">

              <FaLocationDot className="about-icon"/>

              <div>

                <h4>

                  Location

                </h4>

                <p>

                  Mohali, Punjab

                </p>

              </div>

            </div>

            {/* Card 4 */}

            <div className="about-card">

              <HiOutlineAcademicCap className="about-icon"/>

              <div>

                <h4>

                  Career Goal

                </h4>

                <p>

                  Full Stack Software Engineer

                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;