import React from 'react';
import { Link } from 'react-router-dom';
import { FaBullseye, FaLightbulb, FaHandshake, FaUserTie, FaRocket, FaChartLine, FaPalette } from 'react-icons/fa';
import { companyInfo } from '../data/projects';
import { technologies, stats } from '../data/services';

const values = [
  { icon: <FaBullseye />, title: 'Precision', description: 'Every project is crafted with exacting attention to detail and strategic thinking.' },
  { icon: <FaLightbulb />, title: 'Innovation', description: 'We use modern technologies and smart UX to create high-impact products.' },
  { icon: <FaHandshake />, title: 'Trust', description: 'Clear communication, transparent planning, and reliable delivery.' },
  { icon: <FaUserTie />, title: 'Quality', description: 'Premium visual polish paired with maintainable code and performance.' },
];

export default function About() {
  return (
    <main className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
      <section
        className="section-padding relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="container-custom section-inner relative z-10">
          <div className="section-grid lg:grid-cols-2 lg:items-center">
            <div className="section-heading">
              <p className="text-sm uppercase tracking-[0.3em] text-primary-300">About {companyInfo.name}</p>
              <h1 className="heading-1 mt-5 text-white">Crafting premium digital products for growing brands.</h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-200 max-w-2xl">
                {companyInfo.description} Since {companyInfo.founded}, I build modern web and mobile experiences that help clients launch faster and scale with confidence.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3 items-stretch">
                {[
                  { icon: <FaRocket />, title: 'Launch Fast', description: 'Quick project setup with polished design, fast iteration and smooth handoff.' },
                  { icon: <FaChartLine />, title: 'Growth Focus', description: 'Every interface is designed to convert, retain, and help your business grow.' },
                  { icon: <FaPalette />, title: 'Brand-led Design', description: 'Beautiful, memorable visuals that reflect your brand story and product goals.' },
                ].map((item) => (
                  <div key={item.title} className="h-full flex flex-col justify-between rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                    <div>
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500 text-xl">
                        {item.icon}
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-slate-200 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="section-cta-row">
                <Link to="/contact" className="btn-primary">Start Your Project</Link>
                <Link to="/services" className="btn-secondary">View Services</Link>
              </div>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Team working together"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-dark-950">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200/70 bg-white dark:bg-dark-900 p-8 text-center shadow-lg">
              <p className="text-sm uppercase tracking-[0.3em] text-primary-600">Since</p>
              <p className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">{companyInfo.founded}</p>
              <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">Delivering premium digital products with elegant design and reliable technology.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-200/70 bg-white dark:bg-dark-900 p-8 text-center shadow-lg">
              <p className="text-sm uppercase tracking-[0.3em] text-primary-600">Projects</p>
              <p className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">500+</p>
              <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">Completed across web, mobile, and custom software for ambitious brands.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-200/70 bg-white dark:bg-dark-900 p-8 text-center shadow-lg">
              <p className="text-sm uppercase tracking-[0.3em] text-primary-600">Clients</p>
              <p className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">150+</p>
              <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">Trusted by ambitious founders and fast-moving teams around the world.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="section-heading max-w-3xl mx-auto text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-600">Our difference</span>
            <h2 className="heading-2 mt-4">Bold product design, thoughtful strategy, and fast execution.</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              We focus on the details that matter: beautiful interfaces, responsive performance, and meaningful business results.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3 items-stretch">
            {[
              { title: 'Strategic thinking', text: 'Projects guided by user insights and business goals to create measurable impact.' },
              { title: 'Polished visuals', text: 'Clean, modern design systems that feel premium and easy to use.' },
              { title: 'Built to scale', text: 'Maintainable code and performance optimization for long-term growth.' },
            ].map((item) => (
              <div key={item.title} className="h-full flex flex-col justify-between rounded-[2rem] border border-slate-200/70 bg-white dark:bg-dark-900 p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-custom section-grid lg:grid-cols-2 items-center">
          <div>
            <span className="text-sm uppercase tracking-[0.28em] text-primary-600">Our philosophy</span>
            <h2 className="heading-2 mt-4">Design-led development built for growth.</h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Every project combines thoughtful strategy, refined visuals, and strong technical foundations to create memorable digital experiences.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 items-stretch">
              {values.map((value) => (
                <div key={value.title} className="h-full flex flex-col justify-between rounded-[2rem] border border-slate-200/70 bg-white dark:bg-dark-900 p-6">
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-600 text-xl">
                      {value.icon}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{value.title}</h3>
                    <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-10 border border-slate-200/20 shadow-2xl">
            <div className="grid gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Experience</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">10+ years working with clients around the globe on business-critical digital products.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Approach</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">A polished process that includes discovery, design, development, testing, and launch.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">What I deliver</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">Visually rich interfaces, responsive interactions, and code that is easy to maintain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-900 text-white">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary-300">Core strengths</span>
              <h2 className="heading-2 mt-4">The skills that power every project.</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              I combine frontend craftsmanship with backend knowledge and modern design standards to build complete products that look premium and perform reliably.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
            {technologies.slice(0, 9).map((tech) => (
              <div key={tech.name} className="glass p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500 text-xl">
                    {tech.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{tech.name}</h3>
                </div>
                <p className="mt-3 text-slate-300">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary-600">Milestones</span>
              <h2 className="heading-2 mt-3">Work that delivers measurable results.</h2>
            </div>
            <Link to="/contact" className="btn-primary">Share Your Vision</Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {stats.map((stat) => (
              <div key={stat.label} className="h-full flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white dark:bg-dark-900 p-8">
                <p className="text-4xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="mt-4 text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
