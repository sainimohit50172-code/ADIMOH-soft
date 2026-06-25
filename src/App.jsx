import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SeoManager from './components/SeoManager'
import { OrganizationSchema, LocalBusinessSchema } from './components/StructuredData'
import { companyInfo } from './data/projects'
import FloatingContactCTA from './components/FloatingContactCTA'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const CaseStudy = lazy(() => import('./pages/CaseStudy'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const DemoPage = lazy(() => import('./pages/DemoPage'))
const Demos = lazy(() => import('./pages/Demos'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))
const Faq = lazy(() => import('./pages/Faq'))
const Policy = lazy(() => import('./pages/Policy'))
const HireDeveloper = lazy(() => import('./pages/HireDeveloper'))
const SubmitProject = lazy(() => import('./pages/SubmitProject'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Careers = lazy(() => import('./pages/Careers'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogDetails = lazy(() => import('./pages/BlogDetails'))
const BlogCategory = lazy(() => import('./pages/BlogCategory'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
        <OrganizationSchema company={{
          name: companyInfo.name,
          url: companyInfo.website,
          logo: companyInfo.logo || `${companyInfo.website}/favicon.svg`,
          sameAs: Object.values(companyInfo.socialMedia || {}),
          phone: companyInfo.phone
        }} />

        <LocalBusinessSchema company={{
          name: companyInfo.name,
          url: companyInfo.website,
          phone: companyInfo.phone,
          logo: companyInfo.logo || `${companyInfo.website}/favicon.svg`,
          addressStreet: '',
          addressLocality: companyInfo.address,
          addressRegion: '',
          postalCode: '',
          addressCountry: 'IN'
        }} />

        <Navbar />
        <SeoManager />

        <Suspense fallback={
          <div className="min-h-screen grid place-items-center bg-white dark:bg-dark-950 text-slate-700 dark:text-slate-200">
            <p className="text-base">Loading page…</p>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<CaseStudy />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="/demo/:slug" element={<DemoPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hire-developer" element={<HireDeveloper />} />
            <Route path="/submit-project" element={<SubmitProject />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/blog/category/:category" element={<BlogCategory />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/privacy-policy" element={<Policy />} />
            <Route path="/terms-conditions" element={<Policy />} />
            <Route path="/refund-policy" element={<Policy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
        <FloatingContactCTA />
      </div>
    </BrowserRouter>
  )
}

export default App
