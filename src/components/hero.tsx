'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HeroProps {
  children: ReactNode;
  className?: string;
  imageUrl?: string;
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

export function Hero({ children, className, imageUrl }: HeroProps) {
  if (imageUrl) {
    // Landing page with image - full screen, text on left
    return (
      <div className={cn('relative min-h-screen flex items-center overflow-hidden', className)}>
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt=""
            fill
            priority
            className="object-cover object-center scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/80" />
        </div>
        <div className="relative z-10 w-full flex items-center min-h-screen pt-20">
          {children}
        </div>
      </div>
    );
  }
  
  // Text-only hero for all other pages - split layout
  return (
    <div className={cn('relative flex items-start pt-32 pb-20 lg:pt-40 lg:pb-28', className)}>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}

type HeroContentVariant = 'up' | 'left' | 'right' | 'none';

interface HeroContentProps {
  children: ReactNode;
  className?: string;
  variant?: HeroContentVariant;
}

export function HeroContent({ children, className, variant = 'up' }: HeroContentProps) {
  const { ref, isVisible } = useInViewAnimation();

  const baseAnimation =
    variant === 'none'
      ? ''
      : variant === 'left'
      ? 'motion-safe:opacity-0 motion-safe:-translate-x-6'
      : variant === 'right'
      ? 'motion-safe:opacity-0 motion-safe:translate-x-6'
      : 'motion-safe:opacity-0 motion-safe:translate-y-4';

  const visibleAnimation =
    variant === 'none'
      ? ''
      : 'motion-safe:opacity-100 motion-safe:translate-x-0 motion-safe:translate-y-0';

  return (
    <div
      ref={ref}
      className={cn(
        'mx-auto max-w-7xl px-6 lg:px-8 xl:px-12 w-full',
        'transition-all duration-700 ease-out',
        baseAnimation,
        isVisible && visibleAnimation,
        className,
      )}
    >
      {children}
    </div>
  );
}
