import "./Projects.css";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {

  const projects = [

    {
      id: 1,

      title: "AI Mock Interview Platform",

      description:
        "AI-powered platform for practicing technical interviews with AI-generated questions, video recording and instant feedback.",

      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Gemini API",
      ],

      github: "#",

      live: "https://gautam-ai-interview.vercel.app/",
    },

    {
      id: 2,

      title: "Personal Portfolio",

      description:
        "Modern responsive portfolio built using React with smooth animations, glassmorphism UI and premium user experience.",

      tech: [
        "React",
        "CSS",
        "Framer Motion",
      ],

      github: "#",

      live: "gautam-personal-portfolio-rose.vercel.app",
    },

    {
      id: 3,

      title: "New project Coming soon",

      description:
        "",

      tech: [
      
      ],

      github: "#",

      // live: "",
    },

  ];

  return (

    <section
      className="projects section"
      id="projects"
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

            MY PROJECTS

          </span>

          <h2>

            Featured Projects

          </h2>

        </motion.div>

        {/* Projects */}

        <div className="projects-container">

          {projects.map((project, index) => (

            <motion.div

              key={project.id}

              className="project-card"

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

              {/* Gradient Header */}

              <div className="project-header">

                <h3>

                  {project.title}

                </h3>

              </div>

              {/* Description */}

              <p className="project-description">

                {project.description}

              </p>

              {/* Tech Stack */}

              <div className="project-tech">

                {project.tech.map((item, i) => (

                  <span
                    key={i}
                    className="tech-badge"
                  >

                    {item}

                  </span>

                ))}

              </div>

              {/* Buttons */}

              <div className="project-buttons">

                <a

                  href={project.live}

                  target="_blank"

                  rel="noreferrer"

                  className="project-btn primary"

                >

                  <FaExternalLinkAlt />

                  View Project

                </a>

                <a

                  href={project.github}

                  target="_blank"

                  rel="noreferrer"

                  className="project-btn secondary"

                >

                  <FaGithub />

                  GitHub

                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Projects;