import { useEffect } from 'react';

export function usePageMetadata({ title, description, image, structuredData }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;

      ensureMeta('property', 'og:description', description);
      ensureMeta('name', 'twitter:description', description);
    }

    if (title) {
      ensureMeta('property', 'og:title', title);
      ensureMeta('name', 'twitter:title', title);
    }

    if (image) {
      ensureMeta('property', 'og:image', image);
      ensureMeta('name', 'twitter:image', image);
    }

    let script;
    if (structuredData) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'structured-data';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      if (script) {
        script.remove();
      }
    };
  }, [title, description, image, structuredData]);
}

function ensureMeta(attribute, name, content) {
  let meta = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  meta.content = content;
}
