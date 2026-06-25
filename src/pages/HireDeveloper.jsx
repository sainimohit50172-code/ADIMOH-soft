import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { usePageMetadata } from '../utils/useSeo';

const experienceOptions = [
  { value: 'Entry', label: 'Entry Level' },
  { value: 'Mid', label: 'Mid Level' },
  { value: 'Senior', label: 'Senior Level' },
  { value: 'Lead', label: 'Lead / Architect' },
];

const durationOptions = [
  { value: '1-3 months', label: '1-3 Months' },
  { value: '3-6 months', label: '3-6 Months' },
  { value: '6+ months', label: '6+ Months' },
  { value: 'Ongoing', label: 'Ongoing Support' },
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  skills: '',
  experience: '',
  duration: '',
  budget: '',
  message: '',
};

export default function HireDeveloper() {
  usePageMetadata({
    title: 'Hire a Developer | AdiMo soft',
    description: 'Hire an experienced freelance developer for web, mobile, and product work. Share your requirements and get a custom proposal.',
  });

  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
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
              <span className="text-sm uppercase tracking-[0.3em] text-primary-600">Hire Developer</span>
              <h1 className="heading-2">Hire a dedicated developer for your next big project.</h1>
              <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Work with a freelance developer who delivers premium, conversion-focused websites and apps with enterprise polish.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-dark-700 dark:bg-dark-900">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Fast Response</p>
                  <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">24 hour proposal turnaround</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-dark-700 dark:bg-dark-900">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Trusted</p>
                  <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">Premium freelance agency experience</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/submit-project" className="btn-primary">Submit a Project</Link>
                <Link to="/pricing" className="btn-secondary">View Pricing</Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl dark:border-dark-700 dark:bg-dark-900">
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitted && (
                  <div className="rounded-3xl bg-green-50 border border-green-200 p-4 text-sm text-green-700">
                    Thank you! Your request has been received. I will contact you shortly.
                  </div>
                )}
                <Input label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" required />
                <Input label="Company" name="company" value={form.company} onChange={handleChange} placeholder="Your company name" />
                <Input label="Required Skills" name="skills" value={form.skills} onChange={handleChange} placeholder="React, Node.js, UI/UX" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    label="Experience Level"
                    type="select"
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    options={experienceOptions}
                    placeholder="Select experience"
                    required
                  />
                  <Input
                    label="Project Duration"
                    type="select"
                    name="duration"
                    value={form.duration}
                    onChange={handleChange}
                    options={durationOptions}
                    placeholder="Select duration"
                    required
                  />
                </div>
                <Input label="Budget" name="budget" value={form.budget} onChange={handleChange} placeholder="$5,000 - $20,000" />
                <Input label="Message" type="textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your goals and timeline" required />
                <Button type="submit">Request a Developer</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
