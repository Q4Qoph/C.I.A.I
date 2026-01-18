import { Skeleton } from '@/components/ui/skeleton';

export function GallerySkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Skeleton className="h-full w-full" />
        </div>
      ))}
    </div>
  );
}
