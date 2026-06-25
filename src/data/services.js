import { FiGlobe, FiSmartphone, FiPenTool, FiDatabase, FiBookOpen, FiLink, FiCpu, FiShoppingCart } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiPython, SiLaravel } from 'react-icons/si';

export const services = [
  {
    id: 1,
    title: 'Web Development',
    slug: 'web-development',
    description: 'Custom websites and web applications built with modern technologies.',
    icon: FiGlobe,
    features: ['Custom Web Apps', 'E-commerce Solutions', 'CMS Development', 'API Integration'],
    price: 'From $2,500',
    content: `Web Development at AdiMo soft is focused on creating scalable, maintainable and high-performing web applications tailored to your users and business goals. We combine strategic design, engineering best practices, and measurable performance objectives into every project. Our web development services encompass the full product lifecycle — from discovery and user research to architecture, implementation, and post-launch support.

Our approach begins with a discovery phase where we seek to understand the business context, target users, success metrics and technical constraints. We map user journeys and identify the primary flows that drive value (lead capture, ecommerce checkout, content consumption). This ensures that the engineering effort is aligned with the outcomes that matter.

Architecturally, we prefer a modular approach: component-driven UIs, well-structured APIs, and a separation of concerns that makes the system easy to maintain and scale. We use server-side rendering or static generation where SEO and first-contentful paint matter, and client-side rendering for interactive, authenticated experiences. For complex projects we design single-page app shells with progressive enhancement and an app-shell pattern to guarantee fast first paint and responsive navigation.

Performance is an explicit objective on every web project. We optimize images and media, implement responsive loading strategies, inline critical CSS for landing pages, and adopt code-splitting to reduce bundle sizes. Automated performance budgets and Lighthouse checks are integrated into the CI pipeline so regressions are caught early.

Security and reliability are baked into our workflows. We provide secure authentication flows, input validation, parameterized database queries to prevent injection, and layered defenses like rate limiting and monitoring. For data-heavy systems we design caching strategies and choose databases optimized for the workload (relational for transactional systems, document stores for flexible schemas, or search engines for full-text retrieval).

Our deliverables include detailed technical specifications, a component library for UI consistency, deployed staging and production environments, automated test suites, and documentation to help your team operate the product after launch. We provide transparent milestone-based pricing and clear roadmaps so you always know timeline and costs.

Whether you need a marketing website, a content platform, or a robust web application, AdiMo soft focuses on outcomes: increased conversions, faster load times, and a lower total cost of ownership. Contact us to begin a discovery workshop and receive a tailored proposal that maps to your objectives.`,
    faqs: [
      { id: 'w1', question: 'What tech stack do you use for web development?', answer: 'We typically use React, Next.js, Node.js, PostgreSQL/MongoDB, and Tailwind CSS for front-end, but we select the stack based on project needs.' },
      { id: 'w2', question: 'How long does a typical web project take?', answer: 'Small marketing sites can take 2–6 weeks. Complex web applications take 2–6 months depending on scope and integrations.' },
      { id: 'w3', question: 'Do you handle hosting and DevOps?', answer: 'Yes — we can provision, configure and manage hosting, CI/CD pipelines, and monitoring as part of the engagement.' }
    ]
  },
  {
    id: 2,
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: FiSmartphone,
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'],
    price: 'From $5,000',
    content: `Mobile App Development at AdiMo soft is tailored to deliver native-like experiences that maximize performance, reliability and user engagement. We design and build cross-platform solutions using React Native or Flutter when a shared codebase increases speed-to-market, and native technologies when platform-specific performance or OS integrations are required.

We start with user research and prototyping — focusing on the core flows that must be fluid and low-friction. This informs both UI design and the native capabilities required (push notifications, offline sync, local storage, hardware integration). Our teams craft a prioritized MVP that validates product-market fit and creates a clear roadmap for future enhancements.

Key engineering considerations include offline-first data synchronization, secure storage of user credentials, background tasks management, and power-efficient media handling. We leverage proven patterns for state management, code architecture, and native module boundaries to keep the app maintainable as features grow.

Quality assurance includes device matrix testing on a representative set of devices, automated UI tests where applicable, and beta distribution for early feedback. We also integrate crash reporting and analytics to observe real-world behavior and iterate.

Finally, our mobile engagements include app-store readiness support — preparing metadata, screenshots, and privacy disclosures — and guidance on app-launch marketing to ensure initial traction.`,
    faqs: [
      { id: 'm1', question: 'Do you build native or cross-platform apps?', answer: 'We build both. We recommend cross-platform (React Native/Flutter) for faster delivery and native for performance-critical apps.' },
      { id: 'm2', question: 'Can you publish apps to the App Store/Google Play?', answer: 'Yes — we handle app submission, store configuration, and review support as part of delivery.' },
      { id: 'm3', question: 'How do you handle app updates?', answer: 'We use phased rollouts and, where safe, over-the-air updates for JS bundles while preserving native runtime stability.' }
    ]
  },
  {
    id: 3,
    title: 'React Development',
    slug: 'react-development',
    description: 'Specialized React.js development for scalable frontend solutions.',
    icon: SiReact,
    features: ['React.js/Next.js', 'State Management', 'Component Libraries', 'Performance Optimization'],
    price: 'From $3,000',
    content: `Our React development service focuses on building resilient, testable and high-performance frontends. We apply component-driven design, atomic principles, and strong typing (TypeScript) to reduce runtime errors and increase developer velocity.

We architect applications with separation of concerns: presentational components, stateful containers, hooks for shared logic, and a centralized design system. For public-facing pages, we prefer Next.js for server-side rendering and static generation to maximize SEO and initial load performance.

Performance tuning for React apps includes tree-shaking, route-based code splitting, memoization, and optimizing rendering patterns to avoid unnecessary reflows. We also ensure accessibility and keyboard navigation are integral to component design, not afterthoughts.

Testing and quality assurance include unit tests for logic, integration tests for components, and e2e tests for critical user flows. CI pipelines run tests and linting on every pull request, and we maintain a living component library (Storybook) for documentation and visual regression testing.

For teams looking to scale, we advise on monorepo patterns, package boundaries, and conventions that keep collaboration predictable and low-friction.`,
    faqs: [
      { id: 'r1', question: 'Do you use TypeScript with React?', answer: 'Yes — TypeScript is our recommended default for larger projects to improve reliability and maintainability.' },
      { id: 'r2', question: 'How do you handle SEO for React apps?', answer: 'We use SSR/SSG with Next.js or pre-rendering for content-heavy pages, and structured data for rich results.' },
      { id: 'r3', question: 'What performance practices do you apply?', answer: 'Code-splitting, image optimization, memoization, and lazy-loading non-critical resources are standard practices.' }
    ]
  },
  {
    id: 4,
    title: 'Node.js Development',
    slug: 'nodejs-development',
    description: 'Backend development with Node.js for scalable server applications.',
    icon: SiNodedotjs,
    features: ['REST APIs', 'GraphQL', 'Microservices', 'Real-time Apps'],
    price: 'From $3,500',
    content: `Node.js powers modern backend architectures that demand high concurrency and fast I/O. At AdiMo soft we design Node.js services with observability, fault tolerance and scalable deployment in mind.

We begin by designing API contracts and data models with clarity, focusing on predictable behaviors and robust error handling. For public APIs we provide OpenAPI/Swagger documentation and enforce input validation and rate limits.

For scalable deployments we recommend containerization (Docker), orchestration with Kubernetes for larger teams, and autoscaling policies driven by meaningful metrics. We implement health checks and readiness probes to ensure rolling updates are safe.

Security practices include authentication and authorization (OAuth2/JWT), input sanitization, and secure secret management. We integrate logging, distributed tracing, and metrics to provide actionable observability.

For real-time apps, we use event-driven patterns and message brokers where needed. Database choices are made per use-case: relational for transactional consistency, NoSQL for flexibility, and search indexes for fast retrieval.`,
    faqs: [
      { id: 'n1', question: 'Which databases do you recommend with Node.js?', answer: 'We choose PostgreSQL for relational needs and MongoDB for flexible document models, with Redis for caching.' },
      { id: 'n2', question: 'Do you provide monitoring and logging?', answer: 'Yes — we implement centralized logging, metrics, and tracing as part of production readiness.' },
      { id: 'n3', question: 'Can you build GraphQL and REST APIs?', answer: 'Yes — we implement GraphQL for complex client-driven queries and REST for straightforward resource models.' }
    ]
  },
  {
    id: 5,
    title: 'Python Development',
    slug: 'python-development',
    description: 'Python solutions for data science, AI, and web applications.',
    icon: SiPython,
    features: ['Django/Flask', 'Data Analysis', 'Machine Learning', 'Automation'],
    price: 'From $3,000',
    content: `Python remains the language of choice for data science, ML, and flexible web backends. Our Python services deliver robust APIs, data pipelines, and model deployments with production-grade reliability.

We build web services using Django or Flask depending on project needs. Django provides batteries-included features for rapid development and a mature ORM, while Flask offers minimalism and flexibility for microservices. For data-heavy workflows we create ETL pipelines and batch jobs that integrate cleanly with cloud storage and message brokers.

Machine learning work includes model prototyping, evaluation, and deployment. We apply MLOps practices: versioned datasets, reproducible training pipelines, model validation, and safe serving infrastructure. For inference we use optimized runtimes, serverless functions or containerized model servers depending on latency and throughput demands.

For automation and scripting, Python allows rapid construction of integrations, scrapers, and task automation. Security, data privacy and proper schema design are essential when handling sensitive datasets.

We provide production-ready deployment options and monitoring for Python services, ensuring observability and easy rollback paths.`
    ,
    faqs: [
      { id: 'p1', question: 'Do you deploy ML models to production?', answer: 'Yes — we provide inference endpoints with scaling, monitoring and model versioning.' },
      { id: 'p2', question: 'Which frameworks do you use?', answer: 'We commonly use Django, Flask, FastAPI for APIs and scikit-learn, TensorFlow, or PyTorch for ML depending on requirements.' },
      { id: 'p3', question: 'How do you keep data secure?', answer: 'We follow best practices: encryption at rest/in transit, access controls, and data minimization strategies.' }
    ]
  },
  {
    id: 6,
    title: 'Laravel Development',
    slug: 'laravel-development',
    description: 'Enterprise PHP development with Laravel framework.',
    icon: SiLaravel,
    features: ['Laravel Apps', 'REST APIs', 'Authentication', 'Database Design'],
    price: 'From $2,500',
    content: `Laravel remains a powerful framework for rapid, maintainable PHP development. Our Laravel services focus on architecting applications with clear domain models, robust testing, and pragmatic performance optimizations.

We design modular codebases with service layers, repository patterns, and well-defined migrations for database evolution. Authentication leverages Laravel's guards with support for OAuth2 and token-based APIs where needed.

For enterprise requirements we implement background job processing with queues, scheduled tasks for maintenance, and strong validation rules to keep data consistent. We also integrate third-party services like payment processors, CRMs, and analytics platforms to create a cohesive product.

Testing includes unit tests, feature tests, and CI pipelines to ensure deployments are safe. We advise on database indexing strategies and caching layers to keep response times low under load.

Our Laravel engagements include developer handover documentation and optional managed hosting configurations to simplify operations.`,
    faqs: [
      { id: 'l1', question: 'Do you modernize existing Laravel apps?', answer: 'Yes — we audit codebases, identify technical debt, and plan incrementally safe refactors.' },
      { id: 'l2', question: 'What queue systems do you use?', answer: 'We integrate Redis queues, Amazon SQS, or database-backed queues depending on scale and reliability needs.' },
      { id: 'l3', question: 'Do you support multi-tenant applications?', answer: 'Yes — we design tenancy models and data partitioning strategies for multi-tenant SaaS.' }
    ]
  },
  {
    id: 7,
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'User-centered design that delivers exceptional digital experiences.',
    icon: FiPenTool,
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    price: 'From $1,500',
    content: `Our UI/UX Design service focuses on creating human-centered interfaces that convert and delight. We run discovery and user interviews to identify real user needs, then craft wireframes and prototypes to validate flows quickly.

We prioritize clarity and consistency: design tokens, accessible color systems, and responsive components form the backbone of our approach. Usability testing is performed early and often to remove friction from core user journeys.

Deliverables typically include research notes, interactive prototypes, a component library, and design specs ready for engineering handoff. We also perform accessibility reviews and ensure components meet WCAG contrast and interaction requirements.`,
    faqs: [
      { id: 'd1', question: 'Do you provide design handoff assets?', answer: 'Yes — we provide Figma files, redlines, and a component spec for engineers to implement.' },
      { id: 'd2', question: 'Do you run usability tests?', answer: 'We conduct moderated and unmoderated usability tests depending on the project scope.' },
      { id: 'd3', question: 'Can you create a design system?', answer: 'Yes — we build pragmatic design systems with tokens and a living component library.' }
    ]
  },
  {
    id: 8,
    title: 'E-commerce Development',
    slug: 'ecommerce-development',
    description: 'Online stores that drive sales and provide seamless shopping experiences.',
    icon: FiShoppingCart,
    features: ['Shopify', 'WooCommerce', 'Custom Stores', 'Payment Integration'],
    price: 'From $4,000',
    content: `E-commerce projects demand a balance of performance, trust signals, and conversion-focused UX. We design product pages, checkout flows, and marketing pages optimized for speed and discoverability.

We implement SEO-friendly product schemas, structured data, and fast-loading images to improve search visibility. Payment integration, fraud prevention, and reliable order management systems are core to our implementations.

We also build headless e-commerce architectures when speed and customization are required, integrating with platforms like Shopify or custom backends and providing APIs for rich shopping experiences.`,
    faqs: [
      { id: 'e1', question: 'Do you integrate payment gateways?', answer: 'Yes — we integrate Stripe, PayPal, Razorpay and others based on region and needs.' },
      { id: 'e2', question: 'Can you migrate stores?', answer: 'We provide migration services from common platforms with data mapping for products, customers, and orders.' },
      { id: 'e3', question: 'Do you optimize product pages for SEO?', answer: 'Yes — we provide unique product descriptions, structured data, and image optimizations.' }
    ]
  },
  {
    id: 9,
    title: 'CRM Development',
    slug: 'crm-development',
    description: 'Custom CRM solutions to streamline your business processes.',
    icon: FiDatabase,
    features: ['Custom CRMs', 'Workflow Automation', 'Lead Management', 'Analytics'],
    price: 'From $5,000',
    content: `Custom CRM systems help businesses automate sales processes and centralize customer data. We design CRMs that reflect real workflows and integrate with marketing, billing, and support systems.

Key considerations include data model design, permissioning, and audit trails. We implement flexible workflow engines for lead routing and automation, and dashboards for sales and performance metrics.

Integrations with email, telephony, and third-party CRMs are supported via secure APIs and webhook-driven architectures.`,
    faqs: [
      { id: 'c1', question: 'Can you integrate my existing tools?', answer: 'Yes — we build connectors to common CRMs, email providers, and analytics platforms.' },
      { id: 'c2', question: 'Do you provide training?', answer: 'We offer training sessions and documentation to help your team adopt the CRM effectively.' },
      { id: 'c3', question: 'How do you handle data migration?', answer: 'We provide data migration plans including mapping, validation and staged imports to ensure data integrity.' }
    ]
  },
  {
    id: 10,
    title: 'LMS Development',
    slug: 'lms-development',
    description: 'Learning management systems for online education platforms.',
    icon: FiBookOpen,
    features: ['Course Management', 'Progress Tracking', 'Video Hosting', 'Certifications'],
    price: 'From $4,500',
    content: `We build Learning Management Systems that provide immersive learning experiences for students and manageable tools for instructors. Core features include course creation, assessments, progress tracking, and certification generation.

We design learning pathways and analytics dashboards to help educators understand engagement and performance. For media-heavy content we recommend using CDNs and optimized streaming to keep bandwidth costs manageable while providing smooth playback.

Security and role-based access (students, instructors, admins) are fundamental to LMS platforms, as is compliance with accessibility standards and data privacy regulations.`,
    faqs: [
      { id: 'lms1', question: 'Can students upload assignments?', answer: 'Yes — we provide secure storage and submission workflows with plagiarism checks if required.' },
      { id: 'lms2', question: 'Do you support SCORM/xAPI?', answer: 'We provide integration options for SCORM and xAPI where full LMS interoperability is needed.' },
      { id: 'lms3', question: 'How do you handle video hosting?', answer: 'We integrate with platforms like Vimeo, AWS IVS, or self-hosted solutions depending on privacy and cost.' }
    ]
  },
  {
    id: 11,
    title: 'API Development',
    slug: 'api-development',
    description: 'Secure and scalable APIs for seamless integrations.',
    icon: FiLink,
    features: ['REST APIs', 'GraphQL', 'Documentation', 'Security'],
    price: 'From $2,000',
    content: `Our API Development service delivers well-documented, secure and maintainable APIs. We design contracts with OpenAPI/Swagger, implement robust authentication, and provide clear versioning strategies.

We emphasize test coverage, contract tests and comprehensive documentation to make integrations simple and reliable. Observability is included via structured logs and metrics to help debug production issues quickly.

Security measures include scoped tokens, rate limiting, input validation and regular security reviews.`,
    faqs: [
      { id: 'api1', question: 'Do you provide API documentation?', answer: 'Yes — we publish OpenAPI specs and interactive documentation for consumer developers.' },
      { id: 'api2', question: 'How do you version APIs?', answer: 'We recommend semantic versioning with backward-compatible changes in minor releases and clear deprecation policies.' },
      { id: 'api3', question: 'Do you provide SDKs?', answer: 'We can generate and maintain SDKs for common languages to simplify integration.' }
    ]
  },
  {
    id: 12,
    title: 'AI Solutions',
    slug: 'ai-automation',
    description: 'Artificial intelligence solutions to automate and enhance your business.',
    icon: FiCpu,
    features: ['Machine Learning', 'NLP', 'Computer Vision', 'Chatbots'],
    price: 'From $6,000',
    content: `AI and automation can streamline workflows and unlock new business value. Our AI Solutions cover data preparation, model prototyping, and production deployment with monitoring and retraining capabilities.

We design ML workflows that start small, validate on real data, and scale with proper MLOps practices. For conversational experiences we combine retrieval-augmented approaches with curated knowledge bases to improve accuracy.

Ethical considerations, data governance and clear performance metrics guide our implementations. We focus on reliability and measurable ROI rather than chasing experimental accuracy gains.`,
    faqs: [
      { id: 'ai1', question: 'Do you build custom ML models?', answer: 'Yes — we prototype models and deploy production-ready inference endpoints.' },
      { id: 'ai2', question: 'How do you ensure model accuracy?', answer: 'We maintain validation datasets, monitor drift, and implement retraining schedules.' },
      { id: 'ai3', question: 'Can you integrate AI with existing systems?', answer: 'Yes — we expose model endpoints and integrate them into workflows with secure APIs.' }
    ]
  },
];

export const whyChooseUs = [
  {
    title: 'Expert Team',
    description: 'Our developers and designers have 5+ years of industry experience.',
    icon: 'GiTeam',
  },
  {
    title: 'On-Time Delivery',
    description: 'We deliver projects on schedule without compromising quality.',
    icon: 'GiClockwise',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support to address any concerns or issues.',
    icon: 'GiHealthBoost',
  },
  {
    title: 'Competitive Pricing',
    description: 'Premium quality services at transparent, competitive rates.',
    icon: 'GiMoneyStack',
  },
];

export const technologies = [
  { name: 'React', icon: 'SiReact', category: 'Frontend' },
  { name: 'Next.js', icon: 'SiNextdotjs', category: 'Frontend' },
  { name: 'Vue.js', icon: 'SiVuedotjs', category: 'Frontend' },
  { name: 'Angular', icon: 'SiAngular', category: 'Frontend' },
  { name: 'Node.js', icon: 'SiNodedotjs', category: 'Backend' },
  { name: 'Python', icon: 'SiPython', category: 'Backend' },
  { name: 'Laravel', icon: 'SiLaravel', category: 'Backend' },
  { name: 'Django', icon: 'SiDjango', category: 'Backend' },
  { name: 'PostgreSQL', icon: 'SiPostgresql', category: 'Database' },
  { name: 'MongoDB', icon: 'SiMongodb', category: 'Database' },
  { name: 'Docker', icon: 'SiDocker', category: 'DevOps' },
  { name: 'AWS', icon: 'SiAmazon', category: 'Cloud' },
  { name: 'Figma', icon: 'SiFigma', category: 'Design' },
  { name: 'Tailwind', icon: 'SiTailwindcss', category: 'Frontend' },
  { name: 'TypeScript', icon: 'SiTypescript', category: 'Frontend' },
  { name: 'GraphQL', icon: 'SiGraphql', category: 'Backend' },
];

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We analyze your requirements and create a detailed project specification.',
    duration: '1-2 days',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Our designers create wireframes and visual designs for your approval.',
    duration: '3-5 days',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Our developers build your project using agile methodologies.',
    duration: '2-8 weeks',
  },
  {
    step: '04',
    title: 'Testing',
    description: 'Comprehensive testing to ensure quality and bug-free delivery.',
    duration: '3-5 days',
  },
  {
    step: '05',
    title: 'Deployment',
    description: 'We deploy your project to production and configure servers.',
    duration: '1-2 days',
  },
  {
    step: '06',
    title: 'Support',
    description: 'Ongoing maintenance and support to keep your project running smoothly.',
    duration: 'Ongoing',
  },
];

export const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '150+', label: 'Happy Clients' },
  { value: '50+', label: 'Team Members' },
  { value: '10+', label: 'Years Experience' },
];
