import "./MemoryGallery.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import photo1 from "../../assets/gallery/image1.jpg";
import photo2 from "../../assets/gallery/image2.jpg";
import photo3 from "../../assets/gallery/image3.PNG";
import photo4 from "../../assets/gallery/image4.PNG";
import photo5 from "../../assets/gallery/image5.PNG";
import photo6 from "../../assets/gallery/image6.jpeg";
import photo7 from "../../assets/gallery/image7.jpeg";
import photo8 from "../../assets/gallery/image9.jpeg";

function Gallery() {
  const images = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">

        <motion.div
          className="gallery-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span>OUR MEMORIES</span>

          <h2>Moments with you </h2>

          <p>
            Every picture tells a story. Every smile reminds me how blessed I
            am to have you. Here's to the memories we've made and the countless
            ones still waiting for us.
          </p>
        </motion.div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              onClick={() => openImage(index)}
            >
              <img
                src={image}
                alt={`Memory ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                className="close-btn"
                onClick={closeImage}
              >
                <FaTimes />
              </button>

              <button
                className="prev-btn"
                onClick={previousImage}
              >
                <FaChevronLeft />
              </button>

              <motion.img
                key={selectedImage}
                src={images[selectedImage]}
                alt="Memory"
                className="lightbox-image"
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              <button
                className="next-btn"
                onClick={nextImage}
              >
                <FaChevronRight />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

export default Gallery;