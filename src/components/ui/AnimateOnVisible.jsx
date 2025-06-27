"use client";

import { useState, useEffect, useRef } from "react";

export default function AnimateOnVisible({ children, animationClass, styles }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 transition-all duration-1000 ${
        isVisible ? `opacity-100 ${animationClass}` : ""
      } ${styles || ""}`}
    >
      {children}
    </div>
  );
}
