import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/testimonials';
import ImageOptimized from '../components/ui/ImageOptimized';
import { usePageMetadata } from '../utils/useSeo';

export default function Blog() {
  usePageMetadata({
    title: 'Blog | AdiMo soft',
    description: 'Explore articles on modern web development, freelancing, and digital product strategy.',
  });

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...new Set(blogPosts.map((post) => post.category))],
    []
  );

  const filteredPosts = useMemo(
    () =>
      blogPosts.filter((post) => {
        const matchesCategory = category === 'All' || post.category === category;
        const matchesSearch = [post.title, post.excerpt, post.author]
          .join(' ')
          .toLowerCase()
          .includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [category, search]
  );

  return (
    <main className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-600">Insights</span>
            <h1 className="heading-2 mt-4">Latest articles on digital product growth.</h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Read strategy, technology, and freelance business content designed to help you launch better digital products.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_0.4fr]">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search articles, topics, or authors"
              className="input-field"
            />
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="input-field"
            >
              {categories.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article key={post.slug} className="glass rounded-[2rem] p-6 shadow-xl">
                <ImageOptimized src={post.image} alt={post.title} className="h-52 w-full rounded-3xl object-cover" />
                <p className="mt-5 text-sm uppercase tracking-[0.28em] text-primary-600">{post.category}</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{post.title}</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{post.author}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{post.date} • {post.readTime}</p>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="text-primary-600 hover:text-primary-700 font-semibold">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-lg dark:border-dark-700 dark:bg-dark-900">
              <p className="text-slate-600 dark:text-slate-300">No matching articles found. Try another search or category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
