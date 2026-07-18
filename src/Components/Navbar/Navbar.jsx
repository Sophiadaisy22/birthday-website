import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <a href="#home" className="logo">
          CHIMERZIRIM<span>24</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#letters">Letter</a>
          </li>

          <li>
            <a href="#gallery">Gallery</a>
          </li>

          <li>
            <a href="#surprise">Surprise</a>
          </li>
        </ul>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              className="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
              }}
            >
              <button
                className="close-menu"
                onClick={closeMenu}
              >
                <FaTimes />
              </button>

              <a href="#home" onClick={closeMenu}>
                Home
              </a>

              <a href="#about" onClick={closeMenu}>
                About
              </a>

              <a href="#letters" onClick={closeMenu}>
                Letter
              </a>

              <a href="#gallery" onClick={closeMenu}>
                Gallery
              </a>

              <a href="#surprise" onClick={closeMenu}>
                Final Surprise
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;