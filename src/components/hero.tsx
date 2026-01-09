import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeroProps {
  children: ReactNode;
  className?: string;
  imageUrl?: string;
}

export function Hero({ children, className, imageUrl }: HeroProps) {
  if (imageUrl) {
    // Landing page with image - full screen, text on left
    return (
      <div className={cn('relative min-h-screen flex items-center overflow-hidden', className)}>
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt=""
            className="img-cover object-center scale-105"
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

interface HeroContentProps {
  children: ReactNode;
  className?: string;
}

export function HeroContent({ children, className }: HeroContentProps) {
  return (
    <div className={cn('mx-auto max-w-7xl px-6 lg:px-8 xl:px-12 w-full', className)}>
      {children}
    </div>
  );
}
