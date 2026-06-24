import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaAward, FaBriefcase, FaHeart, FaLaptopCode, FaRocket, FaUsers, FaCheckCircle, FaStar } from 'react-icons/fa';
import { services, stats, processSteps } from '../data/services';
import { projects } from '../data/projects';
import { faqs } from '../data/testimonials';
import Button from '../components/ui/Button';

const highlights = [
  { title: 'Premium Designs', description: 'Professional UI/UX with modern layouts, motion, and strong conversion patterns.' },
  { title: 'Fast Delivery', description: 'Iterative delivery with polished milestones and rapid feedback loops.' },
  { title: 'Dedicated Support', description: 'Responsive support and seamless handoff for launch-ready builds.' },
];

const trustedCompanies = ['Nike', 'Adobe', 'Google', 'Spotify', 'Salesforce', 'Amazon'];
const techStack = ['React', 'Tailwind CSS', 'Node.js', 'Next.js', 'Python', 'Django', 'Laravel', 'AWS'];
const counters = [
  { label: 'Projects launched', value: '500+' },
  { label: 'Clients served', value: '150+' },
  { label: 'Revenue growth', value: '120%+' },
  { label: 'Performance score', value: '99.9%' },
];

const testimonials = [
  {
    id: 'restaurant-hub',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80',
    text: 'Our restaurant ordering app has been a game-changer. The team was professional, responsive, and delivered beyond our expectations.',
    name: 'Robert Martinez',
    position: 'Owner, RestaurantHub',
    rating: 5,
  },
  {
    id: 'lms-growth',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80',
    text: 'The LMS/CRM solution transformed how we train our staff and engage students. The product feels polished, reliable, and easy to use.',
    name: 'Maya Patel',
    position: 'Director of Learning, EduFlow',
    rating: 5,
  },
  {
    id: 'react-boost',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80',
    text: 'The React application launch exceeded our goals. Performance is sharp, interactions feel premium, and the team delivered fast.',
    name: 'Jason Lee',
    position: 'CTO, BrightPath',
    rating: 5,
  },
  {
    id: 'business-web',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80',
    text: 'Our new business website looks amazing and converts better than our old site. Every detail was handled with care.',
    name: 'Elena Ruiz',
    position: 'Founder, Arcadia Consulting',
    rating: 5,
  },
  {
    id: 'ecommerce-scale',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80',
    text: 'The e-commerce platform is beautiful, fast, and easy for customers to navigate. Sales are already up and the brand feels premium.',
    name: 'Daniel Kim',
    position: 'Head of Growth, MarketLane',
    rating: 5,
  },
  {
    id: 'ai-automation',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80',
    text: 'The AI automation project saved us hours every week and gave us confidence in our workflow. The product is intuitive and beautifully designed.',
    name: 'Nina Brown',
    position: 'Operations Lead, Velocity AI',
    rating: 5,
  },
];

const whyChooseStats = [
  {
    value: '500+',
    label: 'Projects Completed',
    description: 'Successfully delivered websites, dashboards, LMS and business applications across multiple industries.',
    icon: <FaBriefcase size={24} className="text-primary-600" />,
  },
  {
    value: '150+',
    label: 'Happy Clients',
    description: 'Trusted by startups, educational institutions and growing businesses worldwide.',
    icon: <FaHeart size={24} className="text-primary-600" />,
  },
  {
    value: '50+',
    label: 'Team Members',
    description: 'Dedicated developers, designers and project specialists working together.',
    icon: <FaUsers size={24} className="text-primary-600" />,
  },
  {
    value: '10+',
    label: 'Years Experience',
    description: 'Delivering scalable digital solutions with modern technologies.',
    icon: <FaAward size={24} className="text-primary-600" />,
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialPaused, setTestimonialPaused] = useState(false);
  const featuredProjects = useMemo(() => projects.slice(0, 4), []);
  const activeProject = featuredProjects[activeIndex] || featuredProjects[0];

  const testimonialSlides = testimonials;
  const activeTestimonial = testimonialSlides[testimonialIndex];

  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 6500);
    return () => clearInterval(carouselTimer);
  }, [featuredProjects.length]);

  useEffect(() => {
    if (testimonialPaused) return undefined;

    const testimonialTimer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonialSlides.length);
    }, 4500);
    return () => clearInterval(testimonialTimer);
  }, [testimonialSlides.length, testimonialPaused]);

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
            <Button variant="secondary" className="border-slate-200/70 hover:border-primary-500 hover:bg-primary-500 hover:text-white">See Services</Button>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-[24px] border border-slate-200 bg-white p-5 text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary-500/15 text-primary-600 shadow-sm">
                    {stat.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Why choose</span>
                </div>
                <div className="mt-5 space-y-3">
                  <p className="text-4xl font-bold tracking-tight text-slate-950">{stat.value}</p>
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{stat.label}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{stat.description}</p>
                  </div>
                </div>
              </motion.div>
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
              <div
                className="mt-8 relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl"
                onMouseEnter={() => setTestimonialPaused(true)}
                onMouseLeave={() => setTestimonialPaused(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial.id}
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -24, scale: 0.98 }}
                    transition={{ duration: 0.75, ease: 'easeOut' }}
                    className="relative overflow-hidden rounded-[2rem]"
                  >
                    <motion.img
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      className="h-96 w-full object-cover object-center"
                      initial={{ scale: 1.02 }}
                      animate={{ scale: 1.08 }}
                      exit={{ scale: 1.02 }}
                      transition={{ duration: 9, ease: 'easeOut' }}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent px-6 py-8 sm:px-10 sm:py-10">
                      <div className="inline-flex gap-1 text-sm text-amber-300 mb-4">
                        {Array.from({ length: activeTestimonial.rating }).map((_, starIndex) => (
                          <span key={starIndex}>★</span>
                        ))}
                      </div>
                      <p className="text-lg leading-relaxed text-white sm:text-xl">“{activeTestimonial.text}”</p>
                      <div className="mt-6">
                        <p className="text-base font-semibold text-white">{activeTestimonial.name}</p>
                        <p className="mt-1 text-sm text-slate-300">{activeTestimonial.position}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4 sm:px-6">
                  <button
                    type="button"
                    onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonialSlides.length) % testimonialSlides.length)}
                    className="rounded-full bg-slate-900/70 px-3 py-2 text-white shadow-lg transition hover:bg-slate-900"
                  >
                    ‹
                  </button>
                  <div className="flex items-center gap-2">
                    {testimonialSlides.map((slide, index) => (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => setTestimonialIndex(index)}
                        className={`h-2.5 w-2.5 rounded-full transition ${testimonialIndex === index ? 'bg-primary-500' : 'bg-slate-600'}`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonialSlides.length)}
                    className="rounded-full bg-slate-900/70 px-3 py-2 text-white shadow-lg transition hover:bg-slate-900"
                  >
                    ›
                  </button>
                </div>
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
