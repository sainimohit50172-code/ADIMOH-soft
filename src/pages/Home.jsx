import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaLaptopCode, FaUsers, FaRocket, FaCheckCircle, FaStar } from 'react-icons/fa';
import { services, stats, processSteps } from '../data/services';
import { projects } from '../data/projects';
import { testimonials, faqs } from '../data/testimonials';
import Button from '../components/ui/Button';

const highlights = [
  { title: 'Premium Designs', description: 'Professional UI/UX with modern layouts, motion, and strong conversion patterns.' },
  { title: 'Fast Delivery', description: 'Iterative delivery with polished milestones and rapid feedback loops.' },
  { title: 'Dedicated Support', description: 'Responsive support and seamless handoff for launch-ready builds.' },
];

const trustedCompanies = ['Nike', 'Adobe', 'Google', 'Spotify', 'Salesforce', 'Amazon'];
const techStack = ['React', 'Tailwind CSS', 'Node.js', 'Next.js', 'Python', 'Django', 'Laravel', 'AWS'];
const testimonialItems = testimonials;
const counters = [
  { label: 'Projects launched', value: '500+' },
  { label: 'Clients served', value: '150+' },
  { label: 'Revenue growth', value: '120%+' },
  { label: 'Performance score', value: '99.9%' },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const featuredProjects = useMemo(() => projects.slice(0, 5), []);
  const activeProject = featuredProjects[activeIndex] || featuredProjects[0];

  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 6500);
    return () => clearInterval(carouselTimer);
  }, [featuredProjects.length]);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonialItems.length);
    }, 10000);
    return () => clearInterval(testimonialTimer);
  }, []);

  return (
    <main className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white overflow-hidden">
      <section
        className="relative overflow-hidden section-padding"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="container-custom section-inner relative z-10">
          <div className="section-grid lg:grid-cols-2 items-center">
            <div className="section-heading space-y-8">
              <span className="inline-flex items-center rounded-full bg-primary-500/15 px-4 py-2 text-sm font-semibold text-primary-600">
                Grow Your Brand with Premium Freelance Development
              </span>
              <h1 className="heading-1 text-white max-w-3xl">
                Build high-impact digital products with a premium freelance developer.
              </h1>
              <p className="max-w-xl text-lg text-slate-200 leading-relaxed">
                I create modern websites, mobile apps, and digital products that convert visitors into customers. Get a polished, fully responsive project with a premium look and seamless experience.
              </p>
              <div className="section-cta-row">
                <Link to="/contact" className="btn-primary">
                  Start Your Project
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  View Portfolio
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white/10 border border-white/10 p-5">
                  <p className="text-3xl font-semibold text-white">500+</p>
                  <p className="text-sm text-slate-300">Projects Delivered</p>
                </div>
                <div className="rounded-3xl bg-white/10 border border-white/10 p-5">
                  <p className="text-3xl font-semibold text-white">150+</p>
                  <p className="text-sm text-slate-300">Happy Clients</p>
                </div>
                <div className="rounded-3xl bg-white/10 border border-white/10 p-5">
                  <p className="text-3xl font-semibold text-white">10+</p>
                  <p className="text-sm text-slate-300">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="glass p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary-500/15 flex items-center justify-center text-primary-500">
                    <FaLaptopCode size={22} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-primary-200">Featured Service</p>
                    <h2 className="text-2xl font-semibold">React & Tailwind Websites</h2>
                  </div>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  A complete freelance website experience with stunning visuals, fast performance, and easy maintenance.
                </p>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-3xl bg-slate-950/80 p-5 border border-slate-800">
                    <p className="text-sm uppercase tracking-[0.20em] text-slate-400">Goal</p>
                    <p className="mt-2 font-semibold text-white">Transform visitors into leads using polished design.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-5 border border-slate-800">
                    <p className="text-sm uppercase tracking-[0.20em] text-slate-400">Why Choose Me</p>
                    <p className="mt-2 font-semibold text-white">Premium UI/UX, responsive layouts, strong technical execution.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200/10 bg-slate-950/80 p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Project Request</p>
                    <h2 className="text-2xl font-semibold text-white">Apply for Your Project</h2>
                  </div>
                  <span className="inline-flex rounded-full bg-primary-500/15 px-4 py-2 text-sm text-primary-200">Fast Response</span>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-slate-900 p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Name</p>
                      <p className="mt-2 text-white font-semibold">Enter your name to begin</p>
                    </div>
                    <div className="rounded-3xl bg-slate-900 p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Project Type</p>
                      <p className="mt-2 text-white font-semibold">Web, Mobile, UI/UX, AI</p>
                    </div>
                  </div>
                  <div className="rounded-3xl bg-slate-900 p-6 border border-slate-800">
                    <p className="text-sm text-slate-400">Share your project idea, budget, and timeline. I will follow up with a tailored proposal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-primary-100 text-primary-700 px-4 py-2 text-sm font-semibold">Services Built for Growth</span>
              <h2 className="heading-2">Complete freelance solutions from idea to launch.</h2>
              <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I help businesses and startups develop premium digital products with modern frontend, backend, and design systems. Every project is optimized for conversions, performance, and long-term growth.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-slate-200/70 dark:border-slate-700/70 bg-white dark:bg-dark-900 p-6">
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {services.slice(0, 4).map((service) => (
                <div key={service.id} className="glass p-6">
                  <p className="text-primary-600 font-semibold">{service.title}</p>
                  <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{service.description}</p>
                  <p className="mt-6 text-sm font-semibold text-slate-900 dark:text-white">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-900 text-white section-padding">
        <div className="container-custom">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary-300">Why Choose Me</span>
              <h2 className="heading-2 mt-3 text-white">Trusted by rapidly scaling brands for polished digital experiences.</h2>
            </div>
            <Button variant="secondary" className="text-white border-white/20 hover:border-primary-400">See Services</Button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass p-8">
                <p className="text-5xl font-bold text-white">{stat.value}</p>
                <p className="mt-4 text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary-600">The process</span>
              <h2 className="heading-2 mt-3">Your project journey, simplified.</h2>
            </div>
            <Link to="/contact" className="btn-outline">Schedule a Consultation</Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.slice(0, 3).map((step) => (
              <div key={step.step} className="rounded-[2rem] border border-slate-200/70 bg-white dark:bg-dark-900 p-8">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-3xl bg-primary-500/10 text-primary-600 font-semibold">{step.step}</span>
                <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">{step.description}</p>
                <p className="mt-4 text-sm font-semibold text-primary-600">{step.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-dark">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-[0.3em] text-primary-300">Featured Portfolio</span>
              <h2 className="heading-2 text-white">A curated carousel of high-impact work.</h2>
              <p className="max-w-2xl text-slate-300 leading-relaxed">
                Browse recent projects with premium design, performance-driven build, and polished case study storytelling.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {counters.map((counter) => (
                  <div key={counter.label} className="rounded-3xl border border-slate-700 bg-slate-950 p-6 text-center">
                    <p className="text-4xl font-semibold text-white">{counter.value}</p>
                    <p className="mt-3 text-sm text-slate-400">{counter.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950 p-6 shadow-2xl">
              <div className="relative overflow-hidden rounded-[2rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.slug}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <img src={activeProject.image} alt={activeProject.title} className="h-80 w-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent p-6">
                      <p className="text-sm uppercase tracking-[0.3em] text-primary-300">{activeProject.category}</p>
                      <h3 className="mt-3 text-3xl font-semibold text-white">{activeProject.title}</h3>
                      <p className="mt-3 text-sm text-slate-300">{activeProject.subtitle || activeProject.description}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-6 flex items-center justify-between px-6">
                  <button
                    type="button"
                    onClick={() => setActiveIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)}
                    className="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((prev) => (prev + 1) % featuredProjects.length)}
                    className="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                  >
                    ›
                  </button>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {featuredProjects.map((project, index) => (
                  <button
                    key={project.slug}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-3xl border px-4 py-4 text-left transition ${activeIndex === index ? 'border-primary-500 bg-primary-500/10' : 'border-slate-700 bg-slate-950 hover:border-primary-300'}`}
                  >
                    <p className="font-semibold text-white">{project.title}</p>
                    <p className="mt-2 text-sm text-slate-400">{project.category}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary-600">Trusted by brands</span>
              <h2 className="heading-2">Enterprise premium quality for every project.</h2>
              <p className="max-w-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
                I work with ambitious companies that need polished digital products, fast execution, and strong attention to brand detail.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {trustedCompanies.map((company) => (
                <div key={company} className="rounded-3xl border border-slate-200/70 bg-white dark:bg-dark-900 p-6 text-center">
                  <p className="text-base font-semibold text-slate-900 dark:text-white">{company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-900 text-white section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-[0.3em] text-primary-300">Technology stack</span>
              <h2 className="heading-2">Built with modern tools that scale.</h2>
              <p className="max-w-2xl text-slate-300 leading-relaxed">
                Every project is built with reliable, modern technology so your product remains fast, maintainable, and ready for growth.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {techStack.map((tech) => (
                  <div key={tech} className="rounded-3xl border border-slate-700 bg-slate-950 p-5">
                    <p className="font-semibold text-white">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950 p-8 shadow-2xl">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary-500 text-white">
                  <FaStar />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-primary-300">Client feedback</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Testimonials that reflect premium work.</h3>
                </div>
              </div>
              <div className="mt-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialItems[testimonialIndex].id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-[1.75rem] bg-slate-900 p-8"
                  >
                    <p className="text-lg leading-relaxed text-slate-300">“{testimonialItems[testimonialIndex].text}”</p>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-white">{testimonialItems[testimonialIndex].name}</p>
                        <p className="text-sm text-slate-400">{testimonialItems[testimonialIndex].position}</p>
                      </div>
                      <div className="flex gap-2">
                        {testimonialItems.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setTestimonialIndex(index)}
                            className={`h-2.5 w-2.5 rounded-full transition ${testimonialIndex === index ? 'bg-primary-500' : 'bg-slate-600'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary-600">FAQ</span>
              <h2 className="heading-2 mt-3">Common questions for freelance clients.</h2>
            </div>
            <Link to="/contact" className="btn-primary">Ask a Question</Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <div key={index} className="glass p-8">
                <p className="font-semibold text-slate-900 dark:text-white">{faq.question}</p>
                <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
