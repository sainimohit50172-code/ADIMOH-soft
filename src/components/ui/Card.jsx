import React from 'react';
import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hover = false,
  padding = 'md',
  onClick,
}) {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      onClick={onClick}
      className={`
        bg-white dark:bg-dark-800 rounded-2xl shadow-lg
        ${paddings[padding]}
        ${hover ? 'hover:shadow-xl transition-all duration-300 cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
