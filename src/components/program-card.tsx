import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  imageUrl?: string | StaticImageData;
}

export function ProgramCard({ title, description, icon: Icon, href, imageUrl }: ProgramCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden bg-muted/50 rounded-2xl transition-all duration-300 hover:-translate-y-2 block h-full"
    >
      {imageUrl && (
        <div className="aspect-[4/3] overflow-hidden relative">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="img-cover group-hover:scale-110 transition-transform duration-700 object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute bottom-4 left-6">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-muted/50">
              <Icon className="h-7 w-7 text-primary" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      )}
      <div className="p-8">
        {!imageUrl && (
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-muted/50 mb-6">
            <Icon className="h-7 w-7 text-primary" strokeWidth={2.5} />
          </div>
        )}
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
          Learn More
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
