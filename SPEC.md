# AdiMo soft - Premium Freelance Agency Website

## Project Overview
- **Project Name**: AdiMo soft - Elite Freelance Agency
- **Type**: Multi-page professional services website
- **Core Functionality**: A world-class freelance agency where clients can submit project requirements and hire developers/designers for custom projects
- **Target Users**: Business owners, startups, enterprises seeking premium development and design services

## Tech Stack
- HTML5 (Semantic markup)
- CSS3 (Custom properties, animations, glassmorphism)
- JavaScript ES6+ (Interactive features)
- Bootstrap 5 (Grid system, components)
- Tailwind CSS (Utility classes)
- Fully Responsive Design
- SEO Friendly Structure
- Fast Loading Performance

## UI/UX Specification

### Design System

#### Color Palette
- **Primary**: #6366f1 (Indigo)
- **Primary Dark**: #4f46e5
- **Secondary**: #0ea5e9 (Sky Blue)
- **Accent**: #f59e0b (Amber)
- **Success**: #10b981 (Emerald)
- **Error**: #ef4444 (Red)
- **Dark Background**: #0f172a (Slate 900)
- **Dark Secondary**: #1e293b (Slate 800)
- **Dark Tertiary**: #334155 (Slate 700)
- **Light Background**: #f8fafc (Slate 50)
- **Light Secondary**: #f1f5f9 (Slate 100)
- **Text Primary**: #f8fafc (on dark)
- **Text Secondary**: #94a3b8 (Slate 400)
- **Glass Effect**: rgba(255, 255, 255, 0.05)

#### Typography
- **Primary Font**: 'Outfit', sans-serif (Headings)
- **Secondary Font**: 'DM Sans', sans-serif (Body)
- **Hero Title**: 4.5rem / 72px
- **Section Title**: 3rem / 48px
- **Card Title**: 1.5rem / 24px
- **Body Text**: 1rem / 16px
- **Small Text**: 0.875rem / 14px

#### Spacing System
- **Section Padding**: 100px 0
- **Container Max Width**: 1280px
- **Card Padding**: 32px
- **Gap Large**: 48px
- **Gap Medium**: 24px
- **Gap Small**: 16px
- **Border Radius**: 16px (cards), 8px (buttons), 24px (large elements)

#### Visual Effects
- **Glassmorphism**: backdrop-filter: blur(20px), background: rgba(255,255,255,0.05)
- **Gradient Hero**: linear-gradient(135deg, #6366f1 0%, #0ea5e9 50%, #10b981 100%)
- **Card Shadow**: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
- **Hover Scale**: transform: scale(1.02)
- **Transitions**: all 0.3s ease

### Layout Structure

#### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

#### Navigation
- Sticky navbar with glass effect
- Logo (left)
- Nav links (center)
- CTA Button + Dark Mode Toggle (right)
- Mobile hamburger menu

#### Footer
- 4 columns: Company Info, Quick Links, Services, Newsletter
- Social media icons
- Copyright notice
- Legal links

### Pages & Sections

#### 1. Home Page (index.html)
- **Navbar**: Logo, Home, About, Services, Portfolio, Projects, Pricing, Blog, Contact, Hire Developer Button
- **Hero Section**: Animated gradient background, headline, subheadline, dual CTA buttons, floating tech icons
- **Statistics Section**: Animated counters (Projects Completed, Happy Clients, Years Experience, Awards Won)
- **Services Overview**: 12 service cards with icons, hover effects
- **Why Choose Us**: 6 reason cards with icons
- **Featured Projects**: 6 project cards with images
- **Client Testimonials**: Carousel with client reviews
- **Technologies**: Logo grid of tech stack
- **Process Timeline**: 5-step process
- **FAQ Preview**: 4 accordion items
- **Contact CTA**: Gradient background, contact form
- **Footer**: Full footer with all sections

#### 2. About Us (about.html)
- Company story section
- Mission & Vision
- Team section (4 team members)
- Achievements stats
- Company values
- Why clients trust us

#### 3. Services (services.html)
- All 12 services with detailed descriptions
- Service cards with pricing tiers

#### 4. Portfolio (portfolio.html)
- Project filtering tabs
- Project grid with categories
- Project cards with demo buttons

#### 5. Projects (projects.html)
- Client project listings
- Budget ranges
- Apply buttons

#### 6. Hire Developer (hire-developer.html)
- Developer request form
- Skill selection checkboxes
- Experience dropdown
- Budget selection
- Timeline selection
- Submit button

#### 7. Submit Project (submit-project.html)
- Project submission form
- All required fields
- File upload
- Form validation

#### 8. Pricing (pricing.html)
- 3 pricing tiers
- Feature comparison table

#### 9. Testimonials (testimonials.html)
- Full client reviews
- Ratings display
- Success stories

#### 10. FAQ (faq.html)
- Searchable FAQ
- Accordion layout
- Category filters

#### 11. Blog (blog.html)
- Blog listing
- Featured articles
- Sidebar

#### 12. Careers (careers.html)
- Open positions list
- Application form

#### 13. Contact (contact.html)
- Contact form
- Google Map embed
- Office information
- Social media links

#### 14. Privacy Policy (privacy-policy.html)
- Full privacy policy content

#### 15. Terms & Conditions (terms.html)
- Full terms content

#### 16. Refund Policy (refund.html)
- Full refund policy content

#### 17. 404 Error Page (404.html)
- Custom 404 page
- Back to home button

### Features

#### Interactive Elements
- Smooth scroll navigation
- Mobile menu toggle
- Dark/Light mode toggle
- FAQ accordion
- Testimonial slider
- Form validation with error messages
- Toast notifications
- Scroll animations (fade in, slide up)
- Counter animations
- Parallax effects
- Mouse cursor effects

#### Animations
- Hero background animation
- Floating elements
- Card hover effects
- Button hover states
- Page load animations
- Scroll-triggered animations
- Loader animation

#### SEO & Performance
- Semantic HTML5
- Meta tags
- Optimized heading hierarchy
- Fast loading structure
- Lazy loading ready

## Acceptance Criteria

### Visual Checkpoints
- [ ] Glassmorphism effects visible on dark backgrounds
- [ ] Smooth gradient animations in hero section
- [ ] All hover effects working on cards and buttons
- [ ] Responsive layout working on all breakpoints
- [ ] Navigation sticky and functional
- [ ] Mobile menu toggle working
- [ ] Dark mode toggle functional

### Functional Checkpoints
- [ ] All page links working
- [ ] Forms validating input
- [ ] Toast notifications appearing
- [ ] FAQ accordion expanding/collapsing
- [ ] Scroll animations triggering
- [ ] Statistics counters animating

### Performance Checkpoints
- [ ] Page loads without errors
- [ ] All CSS animations smooth
- [ ] No console errors
- [ ] Images loading properly
