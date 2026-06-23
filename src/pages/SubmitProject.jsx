import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { usePageMetadata } from '../utils/useSeo';

const initialForm = {
  title: '',
  description: '',
  budget: '',
  timeline: '',
  name: '',
  email: '',
  phone: '',
  attachments: [],
};

export default function SubmitProject() {
  usePageMetadata({
    title: 'Submit a Project | Nexa',
    description: 'Submit your project details and receive a custom proposal. Share scope, timeline, budget, and attachments.',
  });

  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'attachments') {
      setForm((prev) => ({ ...prev, attachments: files ? Array.from(files) : [] }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <main className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-[0.3em] text-primary-600">Submit Project</span>
              <h1 className="heading-2">Share your project brief and get a tailored proposal.</h1>
              <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Submit the essential details, budget, timeline, and reference files so I can provide the right solution and estimate.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/hire-developer" className="btn-primary">Hire Developer</Link>
                <Link to="/pricing" className="btn-secondary">Explore Packages</Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl dark:border-dark-700 dark:bg-dark-900">
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitted && (
                  <div className="rounded-3xl bg-green-50 border border-green-200 p-4 text-sm text-green-700">
                    Your project details are submitted. I will review them and follow up soon.
                  </div>
                )}
                <Input label="Project Title" name="title" value={form.title} onChange={handleChange} placeholder="Project title" required />
                <Input label="Project Description" type="textarea" name="description" value={form.description} onChange={handleChange} placeholder="Describe your project" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="Budget" name="budget" value={form.budget} onChange={handleChange} placeholder="$10,000 - $30,000" />
                  <Input label="Timeline" name="timeline" value={form.timeline} onChange={handleChange} placeholder="8 weeks, 3 months, etc." />
                </div>
                <Input label="Attachments" type="file" name="attachments" onChange={handleChange} className="" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" required />
                </div>
                <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone number" />
                <Button type="submit">Submit Project</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
