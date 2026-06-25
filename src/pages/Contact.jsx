import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiMessageCircle } from 'react-icons/fi';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { companyInfo } from '../data/projects';
import ImageOptimized from '../components/ui/ImageOptimized';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  deadline: '',
  message: '',
};

export default function Contact() {
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
      <section
        className="section-padding relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="container-custom section-inner relative z-10">
          <div className="section-grid lg:grid-cols-2 items-center">
            <div className="section-heading">
              <span className="text-sm uppercase tracking-[0.3em] text-primary-300">Contact</span>
              <h1 className="heading-1 mt-4 text-white">Let’s build your next project together.</h1>
              <p className="mt-6 text-lg text-slate-200 leading-relaxed max-w-2xl">
                Share your project details, timeline, and budget. I’ll respond quickly with a custom proposal designed to help you launch faster.
              </p>
            </div>
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <ImageOptimized
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                alt="Contact support"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary-600">Contact</span>
              <h1 className="heading-2 mt-4">Let’s build your next project together.</h1>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Share your project details, timeline, and budget. I’ll respond quickly with a custom proposal designed to help you launch faster.
              </p>

              <div className="mt-10 grid gap-6">
                <div className="glass p-6">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-600">
                      <FiMail size={20} />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Email</p>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-slate-600 dark:text-slate-300 hover:text-primary-600"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="glass p-6">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-600">
                      <FiPhone size={20} />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Phone</p>
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="text-slate-600 dark:text-slate-300 hover:text-primary-600"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="glass p-6">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-600">
                      <FiMessageCircle size={20} />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">WhatsApp</p>
                      <a
                        href={`https://wa.me/${companyInfo.phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-600 dark:text-slate-300 hover:text-primary-600"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="glass p-6">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-600">
                      <FiMapPin size={20} />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Location</p>
                      <p className="text-slate-600 dark:text-slate-300">Location 247667, Roorkee, Haridwar, Uttarakhand</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200/70 bg-white dark:bg-dark-900 p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitted && (
                  <div className="rounded-3xl bg-green-50 border border-green-200 p-4 text-sm text-green-700">
                    Thank you! Your message has been sent. I will contact you soon.
                  </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone" />
                  <Input label="Project Type" name="projectType" value={form.projectType} onChange={handleChange} placeholder="Web app, mobile app, etc." />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="Budget" name="budget" value={form.budget} onChange={handleChange} placeholder="Estimated budget" />
                  <Input label="Deadline" name="deadline" value={form.deadline} onChange={handleChange} placeholder="Project deadline" />
                </div>
                <Input label="Project Details" type="textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project" required />
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
