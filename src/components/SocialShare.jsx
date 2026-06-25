import React from 'react';

export default function SocialShare({ url, title }) {
  const shareUrl = encodeURIComponent(url || window.location.href);
  const shareTitle = encodeURIComponent(title || document.title);

  const twitter = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;

  return (
    <div className="flex items-center space-x-3">
      <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-sky-500">Share on Twitter</a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700">Share on LinkedIn</a>
      <a href={facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600">Share on Facebook</a>
    </div>
  );
}
