import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-950 text-dark-900 dark:text-white flex items-center justify-center py-24">
      <div className="container-custom text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary-600">404 error</p>
        <h1 className="mt-6 text-6xl font-bold tracking-tight">Page Not Found</h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          The page you are looking for doesn’t exist yet. Return back to the homepage and continue exploring premium freelance services.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link to="/" className="btn-primary">Go Home</Link>
          <Link to="/contact" className="btn-secondary">Contact Me</Link>
        </div>
      </div>
    </main>
  );
}
