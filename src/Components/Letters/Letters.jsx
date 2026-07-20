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
            There are some words that deserve more than a text message... so I
            wrote you a letter instead.
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

            <button onClick={() => setOpen(true)}>💙 Open My Letter</button>
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
                Hey <span>Baby Boo,</span>
              </p>

              <p className="placeholder">
                Happy 24th birthday birthday my darling! 🎉🎂 My baby boo😋,
                Nwoke oma'm😚, my Precious husband😌, My Oyibo'm😁, Obi'm🥳🥳,
                my Support, Odogwu'm, the one that can go all out for me over
                and over again without feeling bad about it, the one that
                gladdens my heart, My man, chaii, how much i loove youuuu my
                baby. I have thought and thought of how best to make this day
                special for you my love, and i Knew building this website and
                all it has in it was the perfect way to go all out on this day.
              </p>

              <p className="placeholder">
                I could write a whole full book explaining how much you mean to
                me baby, how you being in my life has brought about a lot of
                transformation and lot of joy. You have been more than a man and
                a boyfriend but you have become someone i would never want to
                live my life without. A support system through and through, baby
                you are just the best. I know that this season life has been
                really testing us in several ways and it feels like we have a
                whole lot to deal with concerning ourselves and family, but i'm
                happy to do it with you baby with God as our rock and
                foundation. I can't wait to see the future or to be in it with
                you cause it will be so so different from now. It will be so so
                beautiful with you baby.😘😘❤️
              </p>

              <p className="placeholder">
                Apart from this being your baby, it's been 2 years and 7 months
                with you and i cannot forget the very first day we met, lol, how
                i was so shy, now i no shy anything😂😂😂😂😂😂😂, sometimes i
                still am tho. How rain beat me wetin no nice, and you had to
                give me your outfit instead cause mine was so drenched, and just
                everything bbby and how you wre trying to make sure i was
                comfortable and calm. I love you baby for just who you are
                really, you are such a good man. Is it how you pray for me and
                look out for me? Chaii......... My bbay is the best 😍😍😍😍
              </p>

              <p className="placeholder">
                On this day, i just pray for you my baby that lines are falling
                in pleasant places for you, that your steps are always ordered
                by the Lord. This is just a phase and a season that i know both
                of us will come out victorious from. I pray that God is always
                proud of you baby. I feel like as a person i am learning a lot
                in this season on how better to love you as your wife to be
                soon. My baby, you are blessed beyond measure, you are a city
                planted on a hill that can never be hidden, you are a source of
                hope and joy to all around you.
              </p>

              <p className="placeholder">
                And with all that i have said, i hope i am able to convince you
                and not to confuse you that i will always do anything i can to
                make your day feel special because you deserve it and more baby.
                I love you so much baby, from the depth of my heart, i really
                really really love you, always, now and forever. I am so happy
                to be your wife to be, and i cannot wait to be your wife for
                real. I love you baby, and i will always love you. Happy
                birthday my baby boo, my husband, my support, my everything. I
                love you so much baby.🥳🥳🥳🥳🥳🥳🥳❤️❤️❤️❤️❤️❤️❤️
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
