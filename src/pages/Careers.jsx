import React, { useState } from 'react';
import { usePageMetadata } from '../utils/useSeo';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const openPositions = [
  {
    id: 1,
    title: 'React Frontend Developer',
    type: 'Full-time',
    location: 'Remote',
    description: 'Build polished React interfaces for high-impact web applications with modern design systems.',
  },
  {
    id: 2,
    title: 'Full-stack Developer',
    type: 'Contract',
    location: 'Remote',
    description: 'Deliver full-stack solutions using React, Node.js, and cloud services for digital product engagements.',
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    type: 'Part-time',
    location: 'Remote',
    description: 'Design premium interfaces, user journeys, and visual systems for startups and enterprise clients.',
  },
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  position: '',
  resume: null,
  message: '',
};

export default function Careers() {
  usePageMetadata({
    title: 'Careers | Nexa',
    description: 'Join the Nexa team. Explore open roles, benefits, and submit your application for freelance and remote positions.',
  });

  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'resume') {
      setForm((prev) => ({ ...prev, resume: files?.[0] || null }));
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
              <span className="text-sm uppercase tracking-[0.3em] text-primary-600">Careers</span>
              <h1 className="heading-2">Open positions at Nexa.</h1>
              <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Join a remote-first freelance agency team focused on building premium digital experiences for ambitious clients.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl dark:border-dark-700 dark:bg-dark-900">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Benefits</h2>
              <ul className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
                <li>• Remote work with flexible schedules</li>
                <li>• Competitive freelance compensation</li>
                <li>• Professional development and mentoring</li>
                <li>• Supportive project-driven culture</li>
                <li>• Exposure to enterprise clients and premium brands</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {openPositions.map((position) => (
              <div key={position.id} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-dark-700 dark:bg-dark-900">
                <p className="text-sm uppercase tracking-[0.3em] text-primary-600">{position.type}</p>
                <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{position.title}</h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">{position.description}</p>
                <p className="mt-4 text-sm text-slate-500">{position.location}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-dark-700 dark:bg-dark-900">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Apply Now</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Submit your application and resume for consideration. If we have a role that matches your skills, we’ll be in touch.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {submitted && (
                <div className="rounded-3xl bg-green-50 border border-green-200 p-4 text-sm text-green-700">
                  Application submitted successfully. I will review your submission and contact you soon.
                </div>
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone" />
                <Input label="Position" name="position" value={form.position} onChange={handleChange} placeholder="Desired role" />
              </div>
              <Input label="Resume" type="file" name="resume" onChange={handleChange} />
              <Input label="Cover Message" type="textarea" name="message" value={form.message} onChange={handleChange} placeholder="Why are you a great fit?" required />
              <Button type="submit">Submit Application</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
