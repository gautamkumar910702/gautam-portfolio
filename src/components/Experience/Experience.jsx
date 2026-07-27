import "./Experience.css";

import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Experience() {

  const experiences = [

    {
      id: 1,

      company: "WiptoTalentNext",

      role: "Software Development Intern",

      duration: "1 August 2026 - 15 September 2026",

      points: [

        "Completed industry-oriented software development training.",

        "Worked with Java, Full Stack Development and problem-solving concepts.",

        "Improved coding and debugging skills through practical assignments.",

      ],

      tech: [

        "Java",

        "HTML",

        "CSS",

        "JavaScript",

        "Git",

        "GitHub",

      ],

    },

    {

      id: 2,

      company: "InternVision",

      role: "Software Development Intern",

      duration: "1 June 2026 - 30 July 2026",

      points: [

        "Built modern web applications using the MERN Stack.",

        "Worked on REST API integration and backend development.",

        "Enhanced debugging, teamwork and software engineering practices.",

      ],

      tech: [

        "React",

        "Node.js",

        "Express.js",

        "MongoDB",

        "REST API",

        "Git",

        "GitHub",

      ],

    },

  ];

  return (

    <section
      className="experience section"
      id="experience"
    >

      <div className="container">

        {/* Heading */}

        <motion.div

          className="section-heading"

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: .7 }}

          viewport={{ once: true }}

        >

          <span>

            EXPERIENCE

          </span>

          <h2>

            Internship Experience

          </h2>

        </motion.div>

        {/* Cards */}

        <div className="experience-container">

          {

            experiences.map((item, index) => (

              <motion.div

                key={item.id}

                className="experience-card"

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: .6,
                  delay: index * .2,
                }}

                viewport={{ once: true }}

              >

                {/* Company */}

                <div className="experience-top">

                  <div className="company-icon">

                    <FaBriefcase />

                  </div>

                  <div>

                    <h3>

                      {item.role}

                    </h3>

                    <h4>

                      {item.company}

                    </h4>

                  </div>

                </div>

                {/* Duration */}

                <div className="experience-duration">

                  <FaCalendarAlt />

                  <span>

                    {item.duration}

                  </span>

                </div>

                {/* Points */}

                <div className="experience-points">

                  {

                    item.points.map((point, i) => (

                      <div
                        key={i}
                        className="point"
                      >

                        <FaCheckCircle />

                        <p>

                          {point}

                        </p>

                      </div>

                    ))

                  }

                </div>

                {/* Tech */}

                <div className="experience-tech">

                  {

                    item.tech.map((tech, i) => (

                      <span
                        key={i}
                        className="tech-badge"
                      >

                        {tech}

                      </span>

                    ))

                  }

                </div>

                {/* Certificate */}

                <div className="experience-buttons">

                  <a
                    href="#"

                    className="certificate-btn"

                  >

                    View Certificate

                  </a>

                  {/* Example

                  href="https://drive.google.com/..."

                  */}

                </div>

              </motion.div>

            ))

          }

        </div>

      </div>

    </section>

  );

}

export default Experience; 