import "./Skills.css";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  const skills = [
    {
      id: 1,
      title: "Frontend Development",
      items: [
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
      ],
    },

    {
      id: 2,
      title: "Backend Development",
      items: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: "🔗", name: "REST API" },
      ],
    },

    {
      id: 3,
      title: "Database",
      items: [
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMysql />, name: "MySQL" },
      ],
    },

    {
      id: 4,
      title: "Programming",
      items: [
        { icon: <FaJava />, name: "Java" },
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <FaPython />, name: "Python" },
      ],
    },

    {
      id: 5,
      title: "Tools",
      items: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <VscVscode />, name: "VS Code" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <FaNpm />, name: "NPM" },
      ],
    },
  ];

  return (
    <section
      className="skills section"
      id="skills"
    >
      <div className="container">

        {/* Section Heading */}

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span>MY SKILLS</span>

          <h2>Technologies I Work With</h2>

        </motion.div>

        {/* Skills Grid */}

        <div className="skills-container">

          {skills.map((category, index) => (

            <motion.div
              key={category.id}
              className="skill-card"

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: .6,
                delay: index * .15,
              }}

              viewport={{ once: true }}
            >

              <h3>

                {category.title}

              </h3>

              <div className="skill-list">

                {category.items.map((skill, i) => (

                  <div
                    key={i}
                    className="skill-item"
                  >

                    <span className="skill-icon">

                      {skill.icon}

                    </span>

                    <span className="skill-name">

                      {skill.name}

                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;