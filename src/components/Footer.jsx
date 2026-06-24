import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiGithub, FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { companyInfo } from '../data/projects';
import { services } from '../data/services';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
  ];

  const footerServices = services.slice(0, 6);

  return (
    <footer className="bg-dark-900 text-white">
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <Link to="/" className="flex flex-col leading-tight mb-6">
                <span className="text-2xl font-display font-bold text-white">ADIMOH</span>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-300">soft</span>
              </Link>
              <p className="text-dark-400 mb-6">
                Building Digital Excellence. We transform ideas into powerful digital solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href={companyInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all"
                >
                  <FiFacebook size={18} />
                </a>
                <a
                  href={companyInfo.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all"
                >
                  <FiTwitter size={18} />
                </a>
                <a
                  href={companyInfo.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all"
                >
                  <FiLinkedin size={18} />
                </a>
                <a
                  href={companyInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all"
                >
                  <FiInstagram size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-dark-400 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {footerServices.map((service) => (
                  <li key={service.id}>
                    <Link
                      to="/services"
                      className="text-dark-400 hover:text-primary-400 transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <FiMapPin className="text-primary-500 mt-1 flex-shrink-0" />
                  <span className="text-dark-400">{companyInfo.address}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FiPhone className="text-primary-500 flex-shrink-0" />
                  <a href={`tel:${companyInfo.phone}`} className="text-dark-400 hover:text-primary-400">
                    {companyInfo.phone}
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <FiMail className="text-primary-500 flex-shrink-0" />
                  <a href={`mailto:${companyInfo.email}`} className="text-dark-400 hover:text-primary-400">
                    {companyInfo.email}
                  </a>
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-dark-800 border border-dark-700 rounded-l-lg focus:outline-none focus:border-primary-500 text-white"
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 bg-primary-500 hover:bg-primary-600 rounded-r-lg transition-colors"
                  >
                    <FiSend size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-dark-400 text-sm">
              © {currentYear} AdiMo soft. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-dark-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-dark-400 hover:text-primary-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/refund-policy" className="text-dark-400 hover:text-primary-400 transition-colors">
                Refund Policy
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-dark-400 text-sm">Powered by</span>
              <FiGithub className="text-dark-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
