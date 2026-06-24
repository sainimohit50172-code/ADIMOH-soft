import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { companyInfo } from '../data/projects';

export default function FloatingContactCTA() {
  const phoneNumber = companyInfo.phone.replace(/\D/g, '');

  return (
    <div className="fixed right-5 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-3 p-0">
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_22px_55px_rgba(15,23,42,0.28)]"
      >
        <FiPhone size={22} />
      </a>
      <a
        href={`mailto:${companyInfo.email}`}
        aria-label="Email"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_22px_55px_rgba(15,23,42,0.28)]"
      >
        <FiMail size={22} />
      </a>
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_22px_55px_rgba(15,23,42,0.28)]"
      >
        <FaWhatsapp size={22} />
      </a>
    </div>
  );
}
