import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SlideContainer({ children, direction, slideKey }) {
  const variants = {
    enter: (direction) => {
      return {
        y: direction > 0 ? 50 : -50,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        y: direction < 0 ? 50 : -50,
        opacity: 0,
      };
    }
  };

  return (
    <AnimatePresence initial={false} custom={direction} mode="wait">
      <motion.div
        key={slideKey}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          y: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.3 }
        }}
        className="slide-container"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
