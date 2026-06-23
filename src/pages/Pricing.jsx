import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { pricingPlans } from '../data/testimonials';
import { usePageMetadata } from '../utils/useSeo';
import Button from '../components/ui/Button';

export default function Pricing() {
  usePageMetadata({
    title: 'Pricing Plans | Nexa',
    description: 'Choose the right freelance package for your project. Compare Starter, Professional, and Enterprise plans with clear features and CTAs.',
  });

  const comparisonFeatures = useMemo(() => {
    return Array.from(
      new Set(pricingPlans.flatMap((plan) => plan.features))
    );
  }, []);

  return (
    <main className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-600">Pricing</span>
            <h1 className="heading-2 mt-4">Simple, transparent pricing for every project.</h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Pick a package designed for startups, growing businesses, or enterprise-grade applications. Every plan includes high quality development and dedicated support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`rounded-[2rem] border p-8 shadow-xl transition ${plan.popular ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/20' : 'border-slate-200 dark:border-dark-700 bg-white dark:bg-dark-900'}`}>
                {plan.popular && <span className="inline-flex rounded-full bg-primary-500/10 px-3 py-1 text-sm font-semibold text-primary-600">Popular</span>}
                <h2 className="mt-6 text-3xl font-semibold text-slate-900 dark:text-white">{plan.name}</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{plan.description}</p>
                <p className="mt-8 text-5xl font-bold text-slate-900 dark:text-white">${plan.price}</p>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">per {plan.period}</p>
                <div className="mt-8 space-y-3 text-slate-700 dark:text-slate-300">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <FaCheck className="text-primary-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/hire-developer" className="mt-8 block">
                  <Button fullWidth>{plan.cta}</Button>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-dark-700 dark:bg-dark-900">
            <h2 className="heading-3">Feature Comparison</h2>
            <div className="mt-8 overflow-x-auto">
              <table className="min-w-full text-left text-sm text-slate-600 dark:text-slate-300">
                <thead>
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-4 text-slate-900 dark:text-white">Feature</th>
                    {pricingPlans.map((plan) => (
                      <th key={plan.id} className="border-b border-slate-200 px-4 py-4 text-slate-900 dark:text-white">{plan.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature) => (
                    <tr key={feature} className="border-b border-slate-200 dark:border-dark-700">
                      <td className="px-4 py-4 font-medium text-slate-900 dark:text-white">{feature}</td>
                      {pricingPlans.map((plan) => (
                        <td key={plan.id} className="px-4 py-4 text-center text-slate-600 dark:text-slate-300">
                          {plan.features.includes(feature) ? '✔' : '—'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
