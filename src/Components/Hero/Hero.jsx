import "./Hero.css";
import heroImage from "../../assets/images/hero.JPG";

import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Chemezirim Marvelous Nwosu"
        className="hero-image"
      />

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Hero Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>🎉😁 Happy Birthday 😁🎉</h3>

        <h1>Chimezirim Marvelous Nwosu</h1>

        <p>
          Today is all about celebrating the incredible man you are. Thank you
          for being a blessing to everyone around you. May this new year bring
          you closer to every promise God has for you.
        </p>

        <a href="#letter" className="hero-btn">
          Read My Letter ❤️
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll"
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <FaChevronDown />
      </motion.div>
    </section>
  );
}

export default Hero;