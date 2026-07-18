import "./Intro.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

function Intro({ onFinish }) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) {
      const timer = setTimeout(() => {
        onFinish();
      }, 1500);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onFinish]);

  return (
    <section className="intro">
      {/* Background Layer */}
      <div className="intro-bg"></div>

      {/* Confetti */}
      <Confetti
        recycle={false}
        numberOfPieces={180}
        gravity={0.18}
        width={window.innerWidth}
        height={window.innerHeight}
      />

      {/* Intro Content */}
      <motion.div
        className="intro-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          🎉 Happy Birthday 🎉
        </motion.h2>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
        >
          CHIMEZIRIM
          <br />
          MARVELOUS NWOSU
        </motion.h1>

        <motion.div
          key={count}
          className="countdown"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span>00</span>
          <span>:</span>
          <span>0{count}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Intro;