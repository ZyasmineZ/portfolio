import React from 'react';
import { motion } from 'framer-motion';
import './ScrollingBackground.css';
import cloud1 from '../images/cloud1.png';
import cloud3 from '../images/cloud3.png';

const images = [cloud1, cloud3];

const ScrollingBackground = () => {
  return (
    <div className="scrolling-background">
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`scrolling-img-${index}`}
          initial={{ x: '500%' }}
          animate={{ x: '-100%' }}
          transition={{ repeat: Infinity, duration: 100, ease: 'linear' }}
          className="scrolling-image"
        />
      ))}
    </div>
  );
};

export default ScrollingBackground;
