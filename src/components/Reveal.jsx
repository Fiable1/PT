import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

/**
 * Wraps content and reveals it smoothly when it scrolls into view.
 * direction: up | down | left | right | scale
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.12,
  once = true,
}) {
  const [ref, visible] = useIntersectionObserver({ threshold, triggerOnce: once });

  const hiddenTransform = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: '-translate-x-10',
    right: 'translate-x-10',
    scale: 'scale-95',
    none: '',
  }[direction] || 'translate-y-10';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
        visible
          ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
          : `opacity-0 ${hiddenTransform}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
