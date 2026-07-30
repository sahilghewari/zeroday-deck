import React from 'react';
import { motion } from 'framer-motion';

export default function GridSlide({ slide }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'center' }}>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1rem' }}
      >
        {slide.headline}
      </motion.h2>

      {slide.body && (
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ marginBottom: '3rem', fontSize: '1.25rem' }}
        >
          {slide.body}
        </motion.p>
      )}

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: slide.body ? '0' : '4rem'
        }}
      >
        {slide.items && slide.items.map((item, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            style={{
              background: 'var(--bg-secondary)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid var(--border-color)'
            }}
          >
            {item.label && (
              <div style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                {item.label}
              </div>
            )}
            <div style={{ fontSize: '1.2rem', lineHeight: 1.5, color: 'var(--text-primary)' }}>
              {item.text}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
