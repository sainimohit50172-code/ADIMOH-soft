import React from 'react';
import { services, whyChooseUs } from '../data/services';
import Button from '../components/ui/Button';

export default function Services() {
  return (
    <main className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
      <section
        className="section-padding relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="container-custom section-inner relative z-10">
          <div className="section-heading max-w-3xl">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-300">Services</span>
            <h1 className="heading-1 mt-4 text-white">Premium freelance services designed for growth.</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-200">
              Explore the full range of services available for web, mobile, design, and product development. Every offering is built to scale and deliver a premium end-user experience.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding section-light">
        <div className="container-custom">

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="glass p-6 rounded-[2rem] hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary-500/10 text-primary-600 text-2xl">
                  {service.icon}
                </div>
                <h2 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{service.description}</p>
                <ul className="mt-6 space-y-2 text-slate-500 dark:text-slate-400 text-sm">
                  {service.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold text-primary-600">{service.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] bg-gradient-to-r from-slate-950 to-slate-900 px-8 py-12 text-white shadow-2xl">
            <div className="grid gap-8 lg:grid-cols-3">
              {whyChooseUs.map((item) => (
                <div key={item.title}>
                  <p className="text-sm uppercase tracking-[0.3em] text-primary-300">{item.title}</p>
                  <p className="mt-4 text-lg leading-relaxed text-slate-200">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-slate-300">Ready to work with a focused freelancer who delivers premium results?</p>
              <Button className="mt-6">Contact Me</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
