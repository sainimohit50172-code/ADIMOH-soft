import React from 'react';

const faqs = [
  {
    question: 'How can I start a new project?',
    answer: 'Use the Contact page or the Apply form on the homepage to share your requirements. I will follow up with a custom proposal.'
  },
  {
    question: 'What is the typical delivery timeframe?',
    answer: 'Most web and mobile projects are delivered within 3-8 weeks depending on scope, with faster turnaround available for smaller landing pages and MVP projects.'
  },
  {
    question: 'Do you offer design and development together?',
    answer: 'Yes. I handle both UI/UX design and development so your project is visually polished and technically robust from end to end.'
  },
  {
    question: 'Can I hire you for a single feature or bug fix?',
    answer: 'Absolutely. I work on full projects, updates, migrations, and feature enhancements based on your needs.'
  },
  {
    question: 'Is the website responsive on mobile devices?',
    answer: 'Yes, every page and project is built to be fully responsive and optimized for desktop, tablet, and mobile screens.'
  },
];

export default function Faq() {
  return (
    <main className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
      <section
        className="section-padding relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1505927110926-df2b0f0a12c1?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="container-custom section-inner relative z-10">
          <div className="section-heading">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-300">FAQ</span>
            <h1 className="heading-1 mt-4 text-white max-w-3xl">Frequently asked questions about freelance projects.</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-200 max-w-2xl">
              Find answers to common questions about project scope, timelines, services, and collaboration.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding section-light">
        <div className="container-custom grid gap-6 lg:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question} className="glass p-8 rounded-[2rem] shadow-xl">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{faq.question}</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
