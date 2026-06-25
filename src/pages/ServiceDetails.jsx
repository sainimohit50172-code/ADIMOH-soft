import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { usePageMetadata } from '../utils/useSeo';
import { ServiceSchema, FAQSchema } from '../components/StructuredData';
import { faqs } from '../data/testimonials';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  usePageMetadata({
    title: service ? `${service.title} — AdiMo soft` : 'Service — AdiMo soft',
    description: service ? service.description : 'Professional services for web and app development.',
    image: service?.image
  });

  if (!service) {
    return (
      <main className="section-padding section-light">
        <div className="container-custom text-center">
          <h1 className="heading-2">Service not found</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">The requested service does not exist.</p>
          <Link to="/services" className="btn-primary mt-6 inline-flex">Back to Services</Link>
        </div>
      </main>
    );
  }

  // prefer service-specific faqs, fallback to global
  const relatedFaqs = service.faqs || faqs.slice(0, 3);

  return (
    <main className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
      <ServiceSchema service={service} url={`${window.location.origin}/services/${service.slug}`} />
      <section className="section-padding section-light">
        <div className="container-custom max-w-4xl">
          <span className="text-sm uppercase tracking-[0.3em] text-primary-600">Service</span>
          <h1 className="heading-2 mt-4">{service.title}</h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{service.description}</p>

          <article className="mt-8 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
            {service.content ? (
              <div dangerouslySetInnerHTML={{ __html: service.content }} />
            ) : (
              <>
            <h2 className="text-xl font-semibold">What we deliver</h2>
            <p>
              We provide end-to-end {service.title.toLowerCase()} services including discovery, architecture,
              development, testing, deployment and post-launch support. Our team focuses on building scalable,
              secure, and maintainable solutions that align with your business goals and user needs.
            </p>

            <h2 className="text-xl font-semibold">Approach & Process</h2>
            <p>
              Every project starts with a discovery workshop to align on objectives, KPIs, and user journeys.
              We create wireframes and prototypes, then implement the UI with modern patterns and robust
              component design. Backend services are built with performance and security in mind, and we
              prioritize automated testing and continuous integration to speed up delivery while maintaining
              quality.
            </p>

            <h2 className="text-xl font-semibold">Deliverables</h2>
            <ul className="list-disc pl-6">
              {service.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold">Pricing & Timelines</h2>
            <p>
              Typical projects start from <strong>{service.price}</strong>. Timelines depend on scope and
              complexity: small implementations can launch in a few weeks while enterprise-grade systems
              may take multiple months. We provide milestone-based proposals with clear deliverables.
            </p>

              </>
            )}

            <h2 className="text-xl font-semibold">Why choose AdiMo soft for {service.title}?</h2>
            <p>
              Our team brings deep domain experience and a product-first mindset. We focus on measurable
              outcomes—faster load times, higher conversions, reduced technical debt, and maintainable
              codebases that your team can evolve confidently.
            </p>
          </article>

          <div className="mt-12">
            <h3 className="text-lg font-semibold">Frequently asked questions</h3>
            <FAQSchema faqs={relatedFaqs} />
            <div className="mt-4 space-y-3">
              {relatedFaqs.map((f) => (
                <details key={f.id} className="rounded-lg border p-4">
                  <summary className="font-semibold">{f.question}</summary>
                  <div className="mt-2 text-slate-600 dark:text-slate-300">{f.answer}</div>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Link to="/contact" className="btn-primary">Contact us about this service</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
