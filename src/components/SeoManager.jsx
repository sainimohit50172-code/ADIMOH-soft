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
    const path = location.pathname;
    const url = `${BASE_URL}${path}`;

    // Basic tags
    setCanonical(url);
    ensureMeta('property', 'og:url', url);
    ensureMeta('name', 'twitter:url', url);
    ensureMeta('name', 'robots', 'index, follow');

    // Per-path metadata map (defaults used when not matched)
    const metadataMap = {
      '/': {
        title: 'AdiMo soft — Freelance React, Node.js & Python Developer',
        description:
          'Premium freelance web and app development services: React, Node.js, Python, LMS, CRM and e-commerce solutions. Delivering performance-first digital products.',
        keywords: 'freelance developer, react developer, node.js, python, lms, crm, e-commerce'
      },
      '/about': {
        title: 'About AdiMo soft — Experienced Freelance Developer',
        description: 'Learn about AdiMo soft, our mission, team, and track record building high-quality web and mobile products.'
      },
      '/services': {
        title: 'Services — React, Node.js, Python, LMS, CRM & More',
        description: 'Explore our professional services: custom web apps, e-commerce, LMS, CRM, AI automation and more. Scalable solutions backed by experience.'
      },
      '/portfolio': {
        title: 'Portfolio — Case Studies & Live Demos',
        description: 'Browse featured case studies and live demos showcasing web, mobile, and enterprise projects.'
      },
      '/projects': { title: 'Projects — Client Work', description: 'Client project listings, budgets, and outcomes.' },
      '/hire-developer': { title: 'Hire Developer — Dedicated React & Node.js Engineers', description: 'Hire experienced developers on contract or full-time to accelerate your product development.' },
      '/submit-project': { title: 'Submit Project — Get a Quote', description: 'Submit your project brief to receive a clear estimate and timeline.' },
      '/pricing': { title: 'Pricing — Transparent Packages & Custom Quotes', description: 'Explore pricing plans for small sites, professional apps, and enterprise projects.' },
      '/testimonials': { title: 'Testimonials — Client Success Stories', description: 'Read client reviews and success stories from our delivered projects.' },
      '/careers': { title: 'Careers — Join AdiMo soft', description: 'Open positions and how to apply for roles at AdiMo soft.' },
      '/blog': { title: 'Blog — Insights on Web & App Development', description: 'Articles on React, Node.js, Python, FastAPI, LMS, CRM, e-commerce, and business strategy.' },
      '/contact': { title: 'Contact — Get In Touch', description: 'Contact AdiMo soft for project inquiries, hiring, or consultations.' },
      '/faq': { title: 'FAQ — Common Questions', description: 'Frequently asked questions about timelines, pricing, technologies and support.' },
      '/privacy-policy': { title: 'Privacy Policy', description: 'Privacy policy for AdiMo soft.' },
      '/terms-conditions': { title: 'Terms & Conditions', description: 'Terms of service for AdiMo soft.' },
      '/refund-policy': { title: 'Refund Policy', description: 'Refund policy details.' }
    };

    // Find best match: exact or startsWith for dynamic routes
    let meta = metadataMap[path];
    if (!meta) {
      // dynamic matches
      if (path.startsWith('/blog/')) {
        meta = { title: 'Blog Article — AdiMo soft', description: 'Read our in-depth article.' };
      } else if (path.startsWith('/portfolio/') || path.startsWith('/demo/') || path.startsWith('/portfolio')) {
        meta = { title: 'Case Study — AdiMo soft', description: 'Detailed case study and project overview.' };
      } else {
        meta = metadataMap['/'];
      }
    }

    if (meta.title) document.title = meta.title;
    if (meta.description) {
      ensureMeta('name', 'description', meta.description);
      ensureMeta('property', 'og:description', meta.description);
      ensureMeta('name', 'twitter:description', meta.description);
    }
    if (meta.keywords) ensureMeta('name', 'keywords', meta.keywords);

    // Breadcrumb schema
    try {
      const segments = path === '/' ? [''] : path.split('/').filter(Boolean);
      const itemList = segments.map((seg, idx) => {
        const name = seg === '' ? 'Home' : seg.replace(/[-]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
        const href = `${BASE_URL}/${segments.slice(0, idx + 1).join('/')}`;
        return { '@type': 'ListItem', position: idx + 1, name, item: href };
      });
      // always include home
      const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }].concat(itemList)
      };

      let existing = document.getElementById('breadcrumb-schema');
      if (!existing) {
        const s = document.createElement('script');
        s.type = 'application/ld+json';
        s.id = 'breadcrumb-schema';
        s.text = JSON.stringify(breadcrumb);
        document.head.appendChild(s);
      } else {
        existing.text = JSON.stringify(breadcrumb);
      }
    } catch (e) {
      // ignore
    }
  }, [location.pathname]);

  return null;
}
