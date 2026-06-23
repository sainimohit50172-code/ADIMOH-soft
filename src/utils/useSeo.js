import { useEffect } from 'react';

export function usePageMetadata({ title, description, structuredData }) {
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
  }, [title, description, structuredData]);
}
