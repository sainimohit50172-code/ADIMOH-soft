import React from 'react';
import { services, whyChooseUs } from '../data/services';
import Button from '../components/ui/Button';

export default function Services() {
  return (
    <main className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-600">Services</span>
            <h1 className="heading-2 mt-4">Premium freelance services designed for growth.</h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore the full range of services available for web, mobile, design, and product development. Every offering is built to scale and deliver a premium end-user experience.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="group glass p-6 rounded-[2rem] hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary-500/10 text-primary-600 text-2xl transition-all duration-300 group-hover:text-primary-700 group-hover:scale-105">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white min-w-0">{service.title}</h2>
                </div>
                <p className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed">{service.description}</p>
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
