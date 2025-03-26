import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open image viewer
  const openImageViewer = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  // Close image viewer
  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  // Navigate images (useCallback to avoid re-creating the function)
  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
  }, [currentIndex, images]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  }, [currentIndex, images]);

  // Handle keyboard navigation (left/right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === "ArrowLeft") {
          prevImage();
        } else if (e.key === "ArrowRight") {
          nextImage();
        } else if (e.key === "Escape") {
          closeImageViewer();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, prevImage, nextImage]); // ✅ Now includes dependencies

  return (
    <>
      {/* Enlarged Grid Display - Positioned at the top */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Property ${index + 1}`}
            className="w-full h-48 md:h-56 object-cover rounded-lg cursor-pointer hover:opacity-75 transition"
            onClick={() => openImageViewer(index)}
          />
        ))}
      </div>

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-4/5 max-w-5xl">
              {/* Close Button */}
              <button
                onClick={closeImageViewer}
                className="absolute top-4 right-4 text-white text-2xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
              >
                <X size={30} />
              </button>

              {/* Left Arrow (Button + Keyboard) */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition"
              >
                <ChevronLeft size={30} />
              </button>

              {/* Image Display */}
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full max-h-[85vh] object-contain rounded-lg"
              />

              {/* Right Arrow (Button + Keyboard) */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition"
              >
                <ChevronRight size={30} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGrid;
