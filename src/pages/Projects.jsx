import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <main className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
      <section
        className="relative overflow-hidden section-padding"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="container-custom section-inner relative z-10">
          <div className="section-heading">
            <span className="inline-flex rounded-full bg-primary-500/15 px-4 py-2 text-sm font-semibold text-primary-200">
              Projects Showcase
            </span>
            <h1 className="heading-1 mt-6 text-white max-w-3xl">
              Real project outcomes for ambitious brands.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              Discover a curated selection of premium work across web development, mobile apps, SaaS, and product design.
            </p>
          </div>
          <div className="section-cta-row">
            <Link to="/contact" className="btn-primary">
              Start a Project
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-primary-400 hover:bg-white/10"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="grid gap-8 xl:grid-cols-2">
            {projects.map((project) => (
              <article key={project.id} className="rounded-[2rem] border border-slate-200/70 bg-white dark:bg-dark-900 p-6 shadow-xl transition hover:-translate-y-1">
                <div className="overflow-hidden rounded-3xl bg-slate-950">
                  <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
                </div>
                <div className="mt-6">
                  <span className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700">{project.category}</span>
                  <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h2>
                  <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-slate-100 p-4 dark:bg-dark-950">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Client</p>
                      <p className="mt-2 font-semibold text-slate-900 dark:text-white">{project.client}</p>
                    </div>
                    <div className="rounded-3xl bg-slate-100 p-4 dark:bg-dark-950">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Budget</p>
                      <p className="mt-2 font-semibold text-slate-900 dark:text-white">{project.budget}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700 dark:bg-dark-950 dark:text-slate-300">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white dark:bg-dark-950 dark:border-dark-700 dark:text-white"
                    >
                      Case Study
                    </Link>
                    <Link
                      to={`/demo/${project.slug}`}
                      className="inline-flex items-center justify-center rounded-xl border border-primary-500 px-6 py-3 text-sm font-semibold text-primary-600 transition-all duration-300 hover:bg-primary-500 hover:text-white"
                    >
                      Demo Page
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
