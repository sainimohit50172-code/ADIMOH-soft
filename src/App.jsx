import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SeoManager from './components/SeoManager'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import CaseStudy from './pages/CaseStudy'
import DemoPage from './pages/DemoPage'
import Demos from './pages/Demos'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Policy from './pages/Policy'
import HireDeveloper from './pages/HireDeveloper'
import SubmitProject from './pages/SubmitProject'
import Pricing from './pages/Pricing'
import Testimonials from './pages/Testimonials'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import FloatingContactCTA from './components/FloatingContactCTA'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
        <Navbar />
        <SeoManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<CaseStudy />} />
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy-policy" element={<Policy />} />
          <Route path="/terms-conditions" element={<Policy />} />
          <Route path="/refund-policy" element={<Policy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FloatingContactCTA />
      </div>
    </BrowserRouter>
  )
}

export default App
