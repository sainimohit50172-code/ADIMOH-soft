import React from 'react';
import { FaStar } from 'react-icons/fa';
import { testimonials } from '../data/testimonials';
import { usePageMetadata } from '../utils/useSeo';
import Button from '../components/ui/Button';
import ImageOptimized from '../components/ui/ImageOptimized';

export default function Testimonials() {
  usePageMetadata({
    title: 'Testimonials | AdiMo soft',
    description: 'Watch video testimonials and read client reviews from successful freelance projects and premium digital experiences.',
  });

  return (
    <main className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-[0.3em] text-primary-600">Testimonials</span>
              <h1 className="heading-2">Client stories, ratings, and video testimonials.</h1>
              <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Discover how premium freelance projects have helped businesses grow with strategic web and app development.
              </p>
              <Button>Hire Developer</Button>
            </div>
            <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl dark:border-dark-700 bg-black">
              <div className="relative pb-[56.25%]">
                <iframe
                  title="Client Video Testimonial"
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/ysz5S6PUM-U"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.id} className="glass p-8 rounded-[2rem]">
                <div className="flex items-center gap-4">
                  <ImageOptimized src={item.image} alt={item.name} className="h-16 w-16 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{item.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.position}</p>
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-1 text-primary-500">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed">{item.text}</p>
                <p className="mt-6 text-sm uppercase tracking-[0.3em] text-slate-400">Project: {item.project}</p>
              </div>
            ))}
          </div>

          <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl dark:border-dark-700 dark:bg-dark-900">
            <div className="grid gap-6 lg:grid-cols-3">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Success Story</p>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">How clients reached growth with smart digital products.</h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  The right freelance partner delivers more than code. It delivers business-ready experiences, faster time-to-market, and measurable results from the first launch.
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">See how modern design, polished development, and clear strategy create happy clients and high-performing digital products.</p>
              </div>
              <div className="flex items-center justify-end">
                <Button>Book a Discovery Call</Button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
