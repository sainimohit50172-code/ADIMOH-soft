import React from 'react';

export function OrganizationSchema({ company }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: company.url,
    logo: company.logo,
    sameAs: company.sameAs,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: company.phone,
        contactType: 'customer support',
      },
    ],
  };

  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}

export function LocalBusinessSchema({ company }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    url: company.url,
    telephone: company.phone,
    image: company.logo,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.addressStreet || '',
      addressLocality: company.addressLocality || '',
      addressRegion: company.addressRegion || '',
      postalCode: company.postalCode || '',
      addressCountry: company.addressCountry || 'IN',
    },
  };

  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}

export function ServiceSchema({ service, url }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: service.title,
    description: service.description,
    url: url,
    serviceType: service.title,
  };

  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}

export function FAQSchema({ faqs }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}

export function CreativeWorkSchema({ project }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description || project.excerpt || '',
    url: project.demo ? project.demo : '',
    image: project.image,
    author: project.client || '',
  };

  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}

export default function StructuredData() {
  return null;
}
