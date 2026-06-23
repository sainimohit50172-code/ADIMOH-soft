import React from 'react';
import { FiPhone, FiMail, FiMessageCircle } from 'react-icons/fi';
import { companyInfo } from '../data/projects';

export default function FloatingContactCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-xl dark:border-dark-700 dark:bg-dark-900/95">
      <a
        href={`tel:${companyInfo.phone}`}
        className="flex items-center gap-3 rounded-2xl bg-primary-500 px-4 py-3 text-white shadow-lg transition hover:bg-primary-600"
      >
        <FiPhone size={18} />
        <span>Call</span>
      </a>
      <a
        href={`mailto:${companyInfo.email}`}
        className="flex items-center gap-3 rounded-2xl bg-slate-900 px-4 py-3 text-white shadow-lg transition hover:bg-slate-800"
      >
        <FiMail size={18} />
        <span>Email</span>
      </a>
      <a
        href={`https://wa.me/${companyInfo.phone.replace(/\D/g, '')}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 rounded-2xl bg-emerald-500 px-4 py-3 text-white shadow-lg transition hover:bg-emerald-600"
      >
        <FiMessageCircle size={18} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
