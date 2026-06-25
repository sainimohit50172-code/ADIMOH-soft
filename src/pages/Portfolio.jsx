import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ImageOptimized from '../components/ui/ImageOptimized';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category))],
    []
  );

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
      <section className="relative overflow-hidden section-padding bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_40%)]" />
        <div className="container-custom section-inner relative z-10">
          <div className="section-grid lg:grid-cols-2 lg:items-center">
            <div className="section-heading">
              <span className="text-sm uppercase tracking-[0.3em] text-primary-300">Portfolio</span>
              <h1 className="heading-1 mt-4 text-white">Featured work built for modern businesses.</h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
                Explore recent projects across web, mobile, and product design that showcase premium visuals, seamless experiences, and technical excellence.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Enterprise projects</p>
                  <p className="mt-4 text-3xl font-semibold">{projects.length}</p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Industries</p>
                  <p className="mt-4 text-3xl font-semibold">{categories.length - 1}</p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Live demos</p>
                  <p className="mt-4 text-3xl font-semibold">{projects.filter((project) => project.live).length}</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <ImageOptimized
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                alt="Portfolio preview"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-600">Portfolio</span>
            <h1 className="heading-2 mt-4">Featured work built for modern businesses.</h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore recent projects across web, mobile, and product design that showcase premium visuals, seamless experiences, and technical excellence.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${selectedCategory === category ? 'bg-primary-500 text-white' : 'bg-slate-100 text-slate-700 dark:bg-dark-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-700'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 xl:grid-cols-2">
            {filteredProjects.map((project) => (
              <article key={project.id} className="glass p-6 rounded-[2rem] hover:-translate-y-1 transition-transform duration-300">
                <div className="overflow-hidden rounded-3xl bg-slate-900">
                  <ImageOptimized src={project.image} alt={project.title} className="h-64 w-full object-cover" />
                </div>
                <div className="mt-6">
                  <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700">{project.category}</span>
                  <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h2>
                  <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-3xl bg-slate-100 p-4 dark:bg-dark-900">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Client</p>
                      <p className="mt-2 font-semibold text-slate-900 dark:text-white">{project.client}</p>
                    </div>
                    <div className="rounded-3xl bg-slate-100 p-4 dark:bg-dark-900">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Timeline</p>
                      <p className="mt-2 font-semibold text-slate-900 dark:text-white">{project.timeline}</p>
                    </div>
                    <div className="rounded-3xl bg-slate-100 p-4 dark:bg-dark-900">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Status</p>
                      <p className="mt-2 font-semibold text-slate-900 dark:text-white">{project.status}</p>
                    </div>
                  </div>
                  {project.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700 dark:bg-dark-900 dark:text-slate-300">{tag}</span>
                      ))}
                    </div>
                  )}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-primary-50 px-3 py-2 text-sm text-primary-700">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link to={`/portfolio/${project.slug}`} className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white dark:bg-dark-900 dark:border-dark-700 dark:text-white dark:hover:border-primary-500">
                      View Case Study
                    </Link>
                    {project.live && (
                      <Link to={`/demo/${project.slug}`} className="inline-flex items-center rounded-xl border border-primary-500 px-6 py-3 text-sm font-semibold text-primary-600 transition-all duration-300 hover:bg-primary-500 hover:text-white">
                        Live Demo
                      </Link>
                    )}
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
