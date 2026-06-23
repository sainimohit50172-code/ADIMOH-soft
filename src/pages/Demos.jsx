import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

const sortOptions = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'live', label: 'Live Demos' },
]

const industries = ['All', ...new Set(projects.map((project) => project.category))]
const technologies = [
  'React',
  'Node.js',
  'PostgreSQL',
  'Stripe',
  'MongoDB',
  'Laravel',
  'Vue.js',
  'Python',
  'TensorFlow',
  'Django',
  'Next.js',
  'Firebase',
  'Twilio',
]

export default function Demos() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [selectedTech, setSelectedTech] = useState('All')
  const [sortBy, setSortBy] = useState('recent')

  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
        if (selectedIndustry !== 'All' && project.category !== selectedIndustry) {
          return false
        }

        if (selectedTech !== 'All' && !project.technologies.includes(selectedTech)) {
          return false
        }

        return (
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.client.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })
      .sort((a, b) => {
        if (sortBy === 'live') {
          return Number(b.live) - Number(a.live)
        }
        if (sortBy === 'popular') {
          return b.id - a.id
        }
        return b.id - a.id
      })
  }, [searchQuery, selectedIndustry, selectedTech, sortBy])

  return (
    <main className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
      <section className="section-padding section-dark">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-end">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary-300">Demo Library</span>
              <h1 className="heading-2 mt-4 text-white">Explore high-impact demos and live experiences.</h1>
              <p className="mt-4 text-slate-300 max-w-2xl leading-relaxed">
                Filter by industry, technology, or live demo status to find the experience that matches your business goals.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-8 border border-white/10 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-primary-200">Demo Summary</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-slate-900/80 p-5 text-center">
                  <p className="text-3xl font-semibold text-white">{filteredProjects.length}</p>
                  <p className="mt-2 text-sm text-slate-400">Results</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-5 text-center">
                  <p className="text-3xl font-semibold text-white">{projects.filter((project) => project.live).length}</p>
                  <p className="mt-2 text-sm text-slate-400">Live Demos</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-5 text-center">
                  <p className="text-3xl font-semibold text-white">{new Set(projects.flatMap((project) => project.technologies)).size}</p>
                  <p className="mt-2 text-sm text-slate-400">Technologies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl dark:border-dark-700 dark:bg-dark-900">
                <div className="grid gap-4 lg:grid-cols-3">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Search</span>
                    <input
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Search demos, clients, or features"
                      className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-primary-500 focus:outline-none dark:border-dark-700 dark:bg-dark-950 dark:text-white"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Industry</span>
                    <select
                      value={selectedIndustry}
                      onChange={(event) => setSelectedIndustry(event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-primary-500 focus:outline-none dark:border-dark-700 dark:bg-dark-950 dark:text-white"
                    >
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Technology</span>
                    <select
                      value={selectedTech}
                      onChange={(event) => setSelectedTech(event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-primary-500 focus:outline-none dark:border-dark-700 dark:bg-dark-950 dark:text-white"
                    >
                      <option value="All">All</option>
                      {technologies.map((tech) => (
                        <option key={tech} value={tech}>{tech}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Sort by</span>
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setSortBy(option.value)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${sortBy === option.value ? 'bg-primary-500 text-white' : 'bg-slate-100 text-slate-700 dark:bg-dark-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-700'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 xl:grid-cols-2">
                {filteredProjects.map((project) => (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl hover:-translate-y-1 transition-transform duration-300 dark:border-dark-700 dark:bg-dark-900"
                  >
                    <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950">
                      <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
                      <span className="absolute left-4 top-4 rounded-full bg-primary-500/90 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                        {project.status}
                      </span>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm uppercase tracking-[0.28em] text-primary-600">{project.category}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                      <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700 dark:bg-dark-950 dark:text-slate-300">{tech}</span>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link to={`/portfolio/${project.slug}`} className="inline-flex items-center rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-600">
                          Case Study
                        </Link>
                        <Link to={`/demo/${project.slug}`} className="inline-flex items-center rounded-full border border-primary-500 px-5 py-3 text-sm font-semibold text-primary-600 transition hover:bg-primary-500 hover:text-white">
                          Live Demo
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-dark-700 dark:bg-dark-900">
                <h2 className="heading-3">Why explore demos?</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  Demos show the polished experience, design direction, and performance of our work before you commit. They’re the fastest way to see our capabilities in action.
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-xl dark:border-dark-700 dark:bg-dark-950">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-white">Industry coverage</h3>
                <div className="mt-5 grid gap-3">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      type="button"
                      onClick={() => setSelectedIndustry(industry)}
                      className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${selectedIndustry === industry ? 'bg-primary-500 text-white' : 'bg-white text-slate-700 dark:bg-dark-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-800'}`}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-dark-700 dark:bg-dark-900">
                <h3 className="font-semibold text-xl text-slate-900 dark:text-white">Popular technology</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {technologies.slice(0, 8).map((tech) => (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => setSelectedTech(tech)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${selectedTech === tech ? 'bg-primary-500 text-white' : 'bg-slate-100 text-slate-700 dark:bg-dark-900 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-800'}`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
