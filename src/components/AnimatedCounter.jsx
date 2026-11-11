import React, { useState, useEffect } from 'react';

export default function AnimatedCounter({ end, suffix = '', duration = 2000, trigger = false }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease-out cubic animation formula for smooth count up
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, trigger]);

  return (
    <span className="font-extrabold text-white font-heading orange-gradient-text">
      {count}{suffix}
    </span>
  );
}
