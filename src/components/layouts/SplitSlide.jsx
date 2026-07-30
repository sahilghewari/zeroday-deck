import React from 'react';
import { motion } from 'framer-motion';

export default function SplitSlide({ slide }) {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center' }}>
      <div style={{ flex: 1, paddingRight: '4rem' }}>
        {slide.label && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '1.2rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.1em' }}
          >
            {slide.label}
          </motion.div>
        )}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
        >
          {slide.headline}
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: '2rem', fontSize: '1.25rem', lineHeight: 1.6 }}
        >
          {slide.body}
        </motion.p>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div style={{ width: '100%', height: '80%', background: 'var(--bg-secondary)', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
          {slide.image ? (
            <img 
              src={slide.image} 
              alt={slide.headline} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, filter: 'contrast(1.1)' }} 
            />
          ) : (
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)' }} />
          )}
        </div>
      </motion.div>
    </div>
  );
}
