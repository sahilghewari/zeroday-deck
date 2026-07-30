import React from 'react';
import { motion } from 'framer-motion';

export default function CoverSlide({ slide }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
      
      {slide.prominentFooter && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          style={{ marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}
        >
          Presented by <strong style={{ color: 'var(--text-primary)' }}>NexaWorks</strong>
        </motion.div>
      )}

      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', letterSpacing: '-0.04em', lineHeight: 1 }}
      >
        {slide.headline}
      </motion.h1>
      
      {(slide.subHeadline || slide.body) && (
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: '1.5rem', marginTop: '2rem', maxWidth: '800px', color: 'var(--text-secondary)' }}
        >
          {slide.subHeadline || slide.body}
        </motion.p>
      )}

      {slide.prominentFooter && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          style={{ marginTop: '2rem', fontSize: '1rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          Security Partner: SAPvyra
        </motion.div>
      )}

      {slide.footer && !slide.prominentFooter && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{ position: 'absolute', bottom: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}
        >
          {slide.footer}
        </motion.div>
      )}
    </div>
  );
}
