import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 lg:py-28', className)}>
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
