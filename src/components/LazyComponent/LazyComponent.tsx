// components/LazyComponent.jsx
import { useEffect, useRef, useState, Suspense } from "react";

const LazyComponent = ({ loader, fallback = <div>Carregando...</div> }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // só observa uma vez
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && !Component) {
      loader().then((mod) => setComponent(() => mod.default));
    }
  }, [isVisible, Component, loader]);

  return (
    <div ref={ref}>
      {Component ? (
        <Suspense fallback={fallback}>
          <Component />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazyComponent;
