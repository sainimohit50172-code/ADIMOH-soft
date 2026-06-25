import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/testimonials';
import SocialShare from '../components/SocialShare';
import ImageOptimized from '../components/ui/ImageOptimized';
import { usePageMetadata } from '../utils/useSeo';
import Button from '../components/ui/Button';
import { useEffect } from 'react';

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  // preload hero image for performance when available
  useEffect(() => {
    if (!post?.image) return;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = post.image;
    document.head.appendChild(link);
    return () => link.remove();
  }, [post?.image]);

  usePageMetadata({
    title: post ? `${post.title} | AdiMo soft` : 'Blog Post | AdiMo soft',
    description: post ? post.excerpt : 'Read this blog post on modern web development and freelance growth.',
    image: post?.image,
    structuredData: post
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          image: [post.image],
          author: { '@type': 'Person', name: post.author },
          datePublished: post.date,
          description: post.excerpt,
          mainEntityOfPage: { '@type': 'WebPage', '@id': `${window.location.origin}/blog/${post.slug}` },
        }
      : undefined,
  });

  if (!post) {
    return (
      <main className="section-padding section-light">
        <div className="container-custom text-center">
          <h1 className="heading-2">Post not found</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">The blog post you are looking for does not exist.</p>
          <Link to="/blog" className="btn-primary mt-6 inline-flex">Back to Blog</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white dark:bg-dark-950 text-dark-900 dark:text-white">
      <section className="section-padding section-light">
        <div className="container-custom max-w-5xl">
          <div className="space-y-4 text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-primary-600">{post.category}</span>
            <h1 className="heading-2">{post.title}</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">{post.date} • {post.readTime} • by {post.author}</p>
          </div>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl dark:border-dark-700 dark:bg-dark-900">
            <ImageOptimized src={post.image} alt={post.title} className="h-[420px] w-full object-cover" priority />
          </div>
          <article className="mt-10 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>{post.excerpt}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt} Additional insights and practical guidance make this article a complete guide for modern teams.</p><p>Use these strategies to turn your next project into a polished digital experience with a premium freelance partner.</p>` }} />
          </article>
          <div className="mt-8">
            <SocialShare url={`${window.location.origin}/blog/${post.slug}`} title={post.title} description={post.excerpt} />
          </div>
          {/* Related posts and prev/next */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div>
              <h4 className="font-semibold">Previous / Next</h4>
              <div className="mt-4 space-y-2">
                {(() => {
                  const idx = blogPosts.findIndex((p) => p.slug === post.slug);
                  const prev = blogPosts[idx - 1];
                  const next = blogPosts[idx + 1];
                  return (
                    <>
                      {prev && <Link to={`/blog/${prev.slug}`} className="block">← {prev.title}</Link>}
                      {next && <Link to={`/blog/${next.slug}`} className="block">{next.title} →</Link>}
                    </>
                  );
                })()}
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Related Posts</h4>
              <div className="mt-4 space-y-2">
                {blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0,3).map((rp) => (
                  <Link key={rp.slug} to={`/blog/${rp.slug}`} className="block">{rp.title}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold">More from us</h4>
              <div className="mt-4 space-y-2">
                {blogPosts.slice(0,3).map((rp) => (
                  <Link key={rp.slug} to={`/blog/${rp.slug}`} className="block">{rp.title}</Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link to="/blog" className="btn-secondary">Back to Blog</Link>
            <Button>Book Discovery Call</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
