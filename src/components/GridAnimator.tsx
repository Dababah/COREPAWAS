'use client';

import { useEffect } from 'react';

export default function GridAnimator() {
  useEffect(() => {
    // Target all grid cards and bento items site-wide
    const targets = document.querySelectorAll(
      '.bento, .glass, [class*="Card"], [class*="card"], [class*="Grid"] > *, [class*="grid"] > *, [class*="Item"], [class*="item"]'
    );

    targets.forEach((el, i) => {
      // Set initial state
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(40px)';
      (el as HTMLElement).style.transition = `opacity 0.6s ease ${i % 6 * 0.08}s, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${i % 6 * 0.08}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
