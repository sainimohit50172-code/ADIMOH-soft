import React from 'react';
import { FiPhone, FiMail, FiMessageCircle } from 'react-icons/fi';
import { companyInfo } from '../data/projects';

export default function FloatingContactCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3 rounded-full bg-transparent p-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2">
      <a
        href={`tel:${companyInfo.phone}`}
        aria-label="Call"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary-500 hover:text-white dark:bg-slate-900 dark:text-white"
      >
        <FiPhone size={20} />
      </a>
      <a
        href={`mailto:${companyInfo.email}`}
        aria-label="Email"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white dark:bg-slate-900 dark:text-white"
      >
        <FiMail size={20} />
      </a>
      <a
        href={`https://wa.me/${companyInfo.phone.replace(/\D/g, '')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-white dark:bg-slate-900 dark:text-white"
      >
        <FiMessageCircle size={20} />
      </a>
    </div>
  );
}
