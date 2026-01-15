'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  animate?: 'up' | 'left' | 'right' | 'none';
}

function useInViewAnimation(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export function Section({ children, className, id, animate = 'up' }: SectionProps) {
  const { ref, isVisible } = useInViewAnimation(0.1);

  const baseAnimation =
    animate === 'none'
      ? ''
      : animate === 'left'
      ? 'motion-safe:opacity-0 motion-safe:-translate-x-6'
      : animate === 'right'
      ? 'motion-safe:opacity-0 motion-safe:translate-x-6'
      : 'motion-safe:opacity-0 motion-safe:translate-y-6';

  const visibleAnimation =
    animate === 'none'
      ? ''
      : 'motion-safe:opacity-100 motion-safe:translate-x-0 motion-safe:translate-y-0';

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'py-20 lg:py-28',
        'transition-all duration-700 ease-out',
        baseAnimation,
        isVisible && visibleAnimation,
        className,
      )}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, description, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-16 lg:mb-24', className)}>
      {subtitle && (
        <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-balance mb-5">{title}</h2>
      {description && (
        <p className="text-base lg:text-lg leading-relaxed text-muted-foreground max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
}

interface SectionContentProps {
  children: ReactNode;
  className?: string;
}

export function SectionContent({ children, className }: SectionContentProps) {
  return (
    <div className={cn('mx-auto max-w-7xl px-6 lg:px-8 xl:px-12', className)}>
      {children}
    </div>
  );
}
