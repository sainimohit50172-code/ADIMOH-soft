import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import ImageOptimized from '../components/ui/ImageOptimized';

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
        <div className="container-custom section-padding">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-12 text-center dark:border-dark-700 dark:bg-dark-900">
            <h1 className="text-3xl font-semibold mb-4">Project not found</h1>
            <p className="text-slate-600 dark:text-slate-300 mb-6">The case study you requested does not exist. Please explore our portfolio instead.</p>
            <Link to="/portfolio" className="btn-primary">Back to Portfolio</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-transparent to-cyan-500/10" />
        <div className="container-custom relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">Case Study</span>
              <h1 className="heading-1 max-w-3xl">{project.title}</h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">{project.caseStudy.excerpt}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-6 dark:bg-dark-900">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Client</p>
                  <p className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{project.client}</p>
                </div>
                <div className="rounded-3xl bg-slate-100 p-6 dark:bg-dark-900">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Category</p>
                  <p className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{project.category}</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl dark:border-dark-700">
              <ImageOptimized src={project.caseStudy.heroImage} alt={project.title} className="h-[420px] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-10">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl dark:border-dark-700 dark:bg-dark-900">
                <h2 className="heading-3">Challenge</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{project.caseStudy.challenge}</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl dark:border-dark-700 dark:bg-dark-900">
                <h2 className="heading-3">Solution</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{project.caseStudy.solution}</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl dark:border-dark-700 dark:bg-dark-900">
                <h2 className="heading-3">Outcome</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{project.caseStudy.outcome}</p>
              </div>
            </div>
            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-dark-700 dark:bg-dark-900">
                <h3 className="text-xl font-semibold mb-4">Impact metrics</h3>
                <div className="space-y-4">
                  {project.caseStudy.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-3xl bg-slate-100 p-5 dark:bg-dark-950">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{metric.label}</p>
                      <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-dark-700 dark:bg-dark-900">
                <p className="text-slate-500 uppercase tracking-[0.3em] text-xs">Quote</p>
                <p className="mt-4 text-lg italic text-slate-700 dark:text-slate-300">“{project.caseStudy.quote.text}”</p>
                <p className="mt-4 font-semibold text-slate-900 dark:text-white">{project.caseStudy.quote.author}</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-dark-700 dark:bg-dark-900">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Technologies</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">{tech}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-16 space-y-10">
            {project.caseStudy.sections.map((section) => (
              <div key={section.title} className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl dark:border-dark-700 dark:bg-dark-900">
                <h3 className="heading-3">{section.title}</h3>
                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="heading-3">Visual highlights</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {project.caseStudy.gallery.map((image) => (
                <div key={image} className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-lg dark:bg-dark-900">
                  <ImageOptimized src={image} alt={project.title} className="h-72 w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link to="/portfolio" className="btn-secondary">
              Back to Portfolio
            </Link>
            <Link to={`/demo/${project.slug}`} className="btn-primary">
              View Live Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
