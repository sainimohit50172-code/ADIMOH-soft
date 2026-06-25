import React from 'react';

export default function ImageOptimized({ src, alt = '', className = '', sizes = '100vw', priority = false }) {
  // For remote images (Unsplash) we append WebP params for better format support.
  const isUnsplash = typeof src === 'string' && src.includes('images.unsplash.com');
  const webpSrc = isUnsplash ? `${src}${src.includes('?') ? '&' : '?'}auto=format&fm=webp` : src;
  const avifSrc = isUnsplash ? `${src}${src.includes('?') ? '&' : '?'}auto=format&fm=avif` : src;

  const srcSet = `${avifSrc} 1200w, ${webpSrc} 800w, ${src} 400w`;

  return (
    <img
      src={webpSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      className={className}
      decoding="async"
    />
  );
}
