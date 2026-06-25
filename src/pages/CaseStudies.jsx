import React from 'react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import ImageOptimized from '../components/ui/ImageOptimized';

export default function CaseStudies() {
  return (
    <main className="section-padding section-light">
      <div className="container-custom">
        <h1 className="heading-2">Case Studies</h1>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article key={p.id} className="p-6 border rounded-2xl">
              <ImageOptimized src={p.image} alt={p.title} className="h-48 w-full object-cover rounded-lg" />
              <h3 className="mt-4 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.caseStudy?.excerpt || p.description}</p>
              <Link to={`/portfolio/${p.slug}`} className="mt-4 inline-block text-primary-600">Read Case Study →</Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
