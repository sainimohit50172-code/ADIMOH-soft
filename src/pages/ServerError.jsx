import React from 'react';
import { Link } from 'react-router-dom';

export default function ServerError() {
  return (
    <main className="section-padding section-light">
      <div className="container-custom text-center">
        <h1 className="heading-1">500 — Server Error</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">Something went wrong on our end. We&apos;re looking into it.</p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Return Home</Link>
        </div>
      </div>
    </main>
  );
}
