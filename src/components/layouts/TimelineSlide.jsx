import React from 'react';
import { motion } from 'framer-motion';

export default function TimelineSlide({ slide }) {
  // Parse body into segments for the timeline
  const segments = slide.body.split('|').map(s => s.trim());

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="slide-content-wrapper">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '4rem', textAlign: 'center' }}
      >
        {slide.headline}
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '2rem',
          position: 'relative',
          padding: '2rem 0'
        }}
      >
        {segments.map((segment, idx) => {
          const isHighlight = segment.includes('Day 2') || segment.includes('ZeroDay') || segment.includes('Festival');
          return (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                minWidth: '200px',
                flex: '1 1 200px',
                marginBottom: '2rem'
              }}
            >
              {/* Node */}
              <div style={{ 
                width: '16px', 
                height: '16px', 
                borderRadius: '50%', 
                background: isHighlight ? 'var(--accent)' : 'var(--bg-primary)',
                border: `2px solid ${isHighlight ? 'var(--accent)' : 'var(--text-secondary)'}`,
                boxShadow: isHighlight ? '0 0 10px var(--accent)' : 'none'
              }} />
              
              {/* Label */}
              <div style={{ 
                fontSize: '1.2rem', 
                fontWeight: isHighlight ? 600 : 400,
                color: isHighlight ? 'var(--text-primary)' : 'var(--text-secondary)',
                textAlign: 'center',
                lineHeight: 1.5
              }}>
                {segment}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
