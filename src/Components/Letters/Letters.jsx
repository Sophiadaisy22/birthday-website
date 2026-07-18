import "./Letters.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaHeart } from "react-icons/fa";

function Letter() {
  const [open, setOpen] = useState(false);

  return (
    <section className="letter" id="letter">
      <div className="letter-container">

        <motion.div
          className="letter-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span>📝A Special Message</span>
          <h2>Just For You</h2>
          <p>
            There are some words that deserve more than a text message...
            so I wrote you a letter instead.
          </p>
        </motion.div>

        {/* Envelope */}

        {!open && (
          <motion.div
            className="envelope"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FaEnvelope className="envelope-icon" />

            <h3>A Letter From My Heart</h3>

            <button onClick={() => setOpen(true)}>
              💙 Open My Letter
            </button>
          </motion.div>
        )}

        {/* Letter */}

        <AnimatePresence>

          {open && (

            <motion.div
              className="letter-card"
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >

              <p className="greeting">
                Dear <span>My Love,</span>
              </p>

              <p className="placeholder">
                ✍️ Write your opening here...
              </p>

              <p className="placeholder">
                ✍️ Tell him how much he means to you.
              </p>

              <p className="placeholder">
                ✍️ Share your favourite memories together.
              </p>

              <p className="placeholder">
                ✍️ Write your birthday prayers and blessings.
              </p>

              <p className="placeholder">
                ✍️ Finish with something personal that only the two of you understand.
              </p>

              <div className="signature">

                <FaHeart />

                <h3>Forever Yours,</h3>

                <h2>Sophia ❤️</h2>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </section>
  );
}

export default Letter;