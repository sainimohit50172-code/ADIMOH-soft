import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/testimonials';
import { usePageMetadata } from '../utils/useSeo';
import ImageOptimized from '../components/ui/ImageOptimized';

export default function BlogCategory() {
  const { category } = useParams();
  const posts = blogPosts.filter((p) => p.category.toLowerCase() === category.toLowerCase());

  usePageMetadata({ title: `${category} Articles — AdiMo soft`, description: `Articles and resources on ${category}.` });

  return (
    <main className="section-padding section-light">
      <div className="container-custom">
        <h1 className="heading-2">{category} Articles</h1>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="p-6 rounded-2xl border">
              <ImageOptimized src={post.image} alt={post.title} className="h-40 w-full object-cover rounded-lg" />
              <h3 className="mt-4 font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="mt-4 inline-block text-primary-600">Read →</Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
