import "./FinalSurprise.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

import giftClosed from "../../assets/images/gift-closed.png";
import giftOpen from "../../assets/images/gift-open.png";
// import finalVideo from "../../assets/videos/final-surprise.mp4";

function FinalSurprise() {
  const [opened, setOpened] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const openGift = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      setShowTitle(true);
    }, 800);

    setTimeout(() => {
      setShowVideo(true);
    }, 2500);
  };

  return (
    <section className="final-surprise" id="surprise">
      {opened && (
        <Confetti
          recycle={false}
          numberOfPieces={300}
        />
      )}

      {/* ==========================
          GIFT SECTION
      ========================== */}

      {!showVideo && (
        <motion.div
          className="gift-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="subtitle">
            One Last Surprise...
          </span>

          <h2>I've Saved The Best For Last</h2>

          <p>
            You've smiled.
            <br />
            You've laughed.
            <br />
            You've looked through our memories.
            <br />
            But I still have one final gift waiting for you.
          </p>

          <motion.img
            src={opened ? giftOpen : giftClosed}
            alt="Birthday Gift"
            className={`gift-image ${
              opened ? "opened" : ""
            }`}
            whileHover={
              !opened
                ? {
                    scale: 1.08,
                    rotate: -3,
                  }
                : {}
            }
            whileTap={
              !opened
                ? {
                    scale: 0.95,
                  }
                : {}
            }
            onClick={openGift}
          />

          {!opened && (
            <button
              className="open-btn"
              onClick={openGift}
            >
              Open Your Surprise ❤️
            </button>
          )}

          <AnimatePresence>
            {showTitle && (
              <motion.div
                className="birthday-title"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
              >
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0 }}
                >
                  Happy
                </motion.h1>

                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  24th Birthday
                </motion.h1>

                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  My Man ❤️
                </motion.h1>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* ==========================
          VIDEO SECTION
      ========================== */}

      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="surprise-content"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.video
              className="surprise-video"
              autoPlay
              controls
              playsInline
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              onEnded={() => setShowMessage(true)}
            >
              {/* <source
                src={finalVideo}
                type="video/mp4"
              /> */}
              Your browser does not support the video tag.
            </motion.video>

            <AnimatePresence>
              {showMessage && (
                <motion.div
                  className="ending-message"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                >
                  <h2>
                    I hope today reminded you
                    <br />
                    just how loved you are.
                  </h2>

                  <p>
                    May God continue to bless you,
                    strengthen you,
                    guide your steps,
                    and make this new year
                    your best one yet.
                  </p>

                  <h3>
                    Happy 24th Birthday,
                    <br />
                    My Man ❤️
                  </h3>

                  <span>
                    With all my love,
                    <br />
                    Sophia ❤️
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default FinalSurprise;