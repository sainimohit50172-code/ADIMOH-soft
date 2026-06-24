import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://adimoh-soft-ffct.vercel.app';

function ensureMeta(attribute, name, content) {
  let meta = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const url = `${BASE_URL}${location.pathname}`;
    setCanonical(url);
    ensureMeta('property', 'og:url', url);
    ensureMeta('name', 'twitter:url', url);
    ensureMeta('name', 'robots', 'index, follow');
  }, [location.pathname]);

  return null;
}
