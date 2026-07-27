import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiArrowDownTray } from "react-icons/hi2";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation Links
  const navLinks = [
    { id: 1, title: "Home", to: "home" },
    { id: 2, title: "About", to: "about" },
    { id: 3, title: "Skills", to: "skills" },
    { id: 4, title: "Projects", to: "projects" },
    { id: 5, title: "Experience", to: "experience" },
    { id: 6, title: "Contact", to: "contact" },
  ];

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close Mobile Menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="nav-overlay"
          onClick={closeMenu}
        ></div>
      )}

      {/* Navbar */}
      <header className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>
        <div className="container navbar-container">

          {/* Logo */}
          <Link
            to="home"
            smooth
            spy
            duration={600}
            offset={-80}
            className="logo"
            onClick={closeMenu}
            aria-label="Go to Home"
          >
            <div className="logo-icon">
              GK
            </div>

            <span className="logo-text">
              Gautam Kumar
            </span>
          </Link>

          {/* Navigation */}
          <nav>
            <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>

              {navLinks.map((link) => (
                <li key={link.id} className="nav-item">

                  <Link
                    to={link.to}
                    smooth
                    spy
                    duration={600}
                    offset={-80}
                    activeClass="active-link"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    {link.title}
                  </Link>

                </li>
              ))}

              {/* Download CV */}

              <li className="nav-item">

                <a
                  href="https://drive.google.com/file/d/1OTGEoxzIzb5KChFaIlgjd99xfbCpVcBa/view?usp=sharing"

                  className="resume-btn"

                  onClick={closeMenu}

                  aria-label="Download CV"
                >
                  <HiArrowDownTray />

                  <span>Download CV</span>

                  {/* Resume Link */}

                  {/* Example:
                      href="/resume/Gautam_Kumar_Resume.pdf"
                  */}

                </a>

              </li>

            </ul>
          </nav>

          {/* Mobile Menu Button */}

          <button
            className="menu-icon"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            {menuOpen ? <IoClose /> : <FaBars />}
          </button>

        </div>
      </header>
    </>
  );
}

export default Navbar;