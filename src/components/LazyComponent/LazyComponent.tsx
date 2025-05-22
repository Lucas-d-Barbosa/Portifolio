import React, {
  useEffect,
  useRef,
  useState,
  Suspense,
  type ComponentType,
  type ReactNode,
} from "react";

interface LazyComponentProps {
  loader: () => Promise<{ default: ComponentType<unknown> }>;
  fallback?: ReactNode;
}

const LazyComponent: React.FC<LazyComponentProps> = ({
  loader,
  fallback = <div>Carregando...</div>,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [Component, setComponent] = useState<ComponentType<unknown> | null>(
    null
  );

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);

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
