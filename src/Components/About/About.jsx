import "./About.css";
import aboutVideo from "../../assets/videos/about.mp4";
import star from "../../assets/images/star.png"
import { motion } from "framer-motion";
import {
  FaHeart,
  FaStar,
  FaSmile,
  FaPrayingHands,
  FaGift,
  FaMagic,
} from "react-icons/fa";

function About() {
  const qualities = [
    {
      icon: <FaHeart />,
      title: "Kind Heart",
      text: "Always caring, loving, and thoughtful.",
    },
    {
      icon: <FaSmile />,
      title: "Joyful",
      text: "Your smile lights up every room.",
    },
    {
      icon: <FaStar />,
      title: "Inspiring",
      text: "You encourage everyone around you.",
    },
    {
      icon: <FaPrayingHands />,
      title: "Faith Filled",
      text: "I love the way you love God.",
    },
    {
      icon: <FaGift />,
      title: "A Blessing",
      text: "You make every moment more special.",
    },
    {
      icon: <FaMagic />,
      title: "One of a Kind",
      text: "There is truly no one else like you.",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span><img src={star}/>Meet Today's Star </span>

          <h2>Celebrating An Amazing Person</h2>

          <p>
            Today is all about celebrating someone whose kindness, laughter,
            strength, and beautiful spirit make the world brighter every single
            day.
          </p>
        </motion.div>

        <motion.div
          className="video-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <video className="about-video" autoPlay muted loop playsInline>
            <source src={aboutVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <div className="qualities">
          {qualities.map((item, index) => (
            <motion.div
              className="quality-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
