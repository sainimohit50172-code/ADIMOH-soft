import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
}) {
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-sm shadow-primary-500/20 hover:shadow-lg hover:shadow-primary-500/30',
    secondary: 'bg-white dark:bg-dark-800 text-dark-900 dark:text-white border-2 border-dark-200 dark:border-dark-700 shadow-sm hover:bg-primary-500 hover:border-primary-500 hover:text-white dark:hover:text-white',
    outline: 'bg-transparent border-2 border-primary-500 text-primary-600 shadow-sm hover:bg-primary-500 hover:text-white',
    ghost: 'bg-transparent text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center font-semibold rounded-xl
        transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white
        dark:focus-visible:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]} ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {loading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
    </motion.button>
  );
}
