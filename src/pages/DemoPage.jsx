import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import ImageOptimized from '../components/ui/ImageOptimized';

export default function DemoPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
        <div className="container-custom section-padding">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-12 text-center dark:border-dark-700 dark:bg-dark-900">
            <h1 className="text-3xl font-semibold mb-4">Demo not found</h1>
            <p className="text-slate-600 dark:text-slate-300 mb-6">Oops! That demo page does not exist yet. Try another project from the portfolio.</p>
            <Link to="/portfolio" className="btn-primary">Browse Portfolio</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
      <section className="relative overflow-hidden section-padding section-dark">
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.35),_transparent_30%)]" />
        <div className="container-custom relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-6 text-white">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/80">Live Demo</span>
              <h1 className="heading-1">{project.demo.headline}</h1>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-200">{project.demo.tagline}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {project.demo.stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-white/10 p-6 border border-white/10">
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <ImageOptimized src={project.demo.heroImage} alt={project.demo.headline} className="h-[460px] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-3">
            {project.demo.highlights.map((feature) => (
              <div key={feature} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-dark-700 dark:bg-dark-900">
                <h2 className="font-semibold text-xl text-slate-900 dark:text-white">{feature}</h2>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {project.demo.screens.map((screen) => (
              <div key={screen} className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl dark:bg-dark-900">
                <ImageOptimized src={screen} alt={`${project.title} screen`} className="h-96 w-full object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl dark:border-dark-700 dark:bg-dark-900">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary-600">What you’ll see</p>
                <h2 className="heading-3 mt-3">Interactive experience crafted for modern users.</h2>
              </div>
              <Link to={`/portfolio/${project.slug}`} className="btn-primary">
                View Case Study
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {project.demo.features.map((feature) => (
                <div key={feature} className="rounded-3xl bg-slate-100 p-6 dark:bg-dark-950">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
