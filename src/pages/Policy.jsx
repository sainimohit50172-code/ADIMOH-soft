import React from 'react';
import { useLocation } from 'react-router-dom';

const content = {
  privacy: {
    title: 'Privacy Policy',
    description: 'Your privacy is important. This site does not collect sensitive data without permission.',
    sections: [
      { heading: 'Data Collection', text: 'We only collect information provided through contact forms or newsletter signups.' },
      { heading: 'Cookies', text: 'Standard analytics cookies may be used to improve site experience.' },
      { heading: 'Third Parties', text: 'We do not share your personal details with third parties without consent.' },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    description: 'These terms govern the use of this freelance website and the services offered.',
    sections: [
      { heading: 'Service Scope', text: 'Projects, proposals, and development work are delivered based on agreed requirements.' },
      { heading: 'Payment', text: 'Payment terms are discussed per project and may include deposit, milestone, or final payment.' },
      { heading: 'Warranty', text: 'A limited support period is provided after launch to address implementation issues.' },
    ],
  },
  refund: {
    title: 'Refund Policy',
    description: 'Refunds are handled on a case-by-case basis depending on project stage and deliverables.',
    sections: [
      { heading: 'Cancellation', text: 'If a project is canceled early, any unused deposit may be partially refunded.' },
      { heading: 'Delivery', text: 'If deliverables do not match agreed requirements, revisions will be provided before refunds are considered.' },
      { heading: 'Support', text: 'Ongoing support and maintenance are offered separately from refund requests.' },
    ],
  },
};

function getPageKey(pathname) {
  if (pathname.includes('terms-conditions')) return 'terms';
  if (pathname.includes('refund-policy')) return 'refund';
  return 'privacy';
}

export default function Policy() {
  const location = useLocation();
  const page = content[getPageKey(location.pathname)];

  return (
    <main className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
      <section className="section-padding section-light">
        <div className="container-custom section-inner max-w-4xl">
          <div className="section-heading">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-600">{page.title}</span>
          <h1 className="heading-2 mt-4">{page.title}</h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{page.description}</p>
        </div>
          <div className="mt-10 space-y-8">
            {page.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{section.heading}</h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
