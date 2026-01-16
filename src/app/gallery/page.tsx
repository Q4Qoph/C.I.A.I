'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { apiClient } from '@/lib/api';
import { GallerySkeleton } from '@/components/gallery-skeleton';

interface GalleryItem {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string;
  altText: string | null;
  displayOrder: number;
  isActive: boolean;
}

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiClient.getGalleryPublic();
      setGalleryItems(response.data || []);
    } catch (err: any) {
      console.error('Error loading gallery:', err);
      setError('Failed to load gallery images');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <SectionContent>
          <SectionHeader
            subtitle="Photo Gallery"
            title="Scenes from Our Work"
            description="A curated gallery showcasing CIAI programs, community meetings, and everyday moments of change captured across our projects."
          />
          <GallerySkeleton />
        </SectionContent>
      </Section>
    );
  }

  if (error) {
    return (
      <Section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <SectionContent>
          <div className="text-center text-red-500">{error}</div>
        </SectionContent>
      </Section>
    );
  }

  return (
    <Section className="pt-32 pb-24 lg:pt-40 lg:pb-32" animate="up">
      <SectionContent>
        <SectionHeader
          subtitle="Photo Gallery"
          title="Scenes from Our Work"
          description="A curated gallery showcasing CIAI programs, community meetings, and everyday moments of change captured across our projects."
        />
        {galleryItems.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            No gallery images available at the moment.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="relative aspect-[4/3] overflow-hidden rounded-xl group bg-black/5"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.altText || item.title || 'CIAI gallery image'}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {item.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-medium">{item.title}</p>
                    {item.description && (
                      <p className="text-white/90 text-xs mt-1">{item.description}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </SectionContent>
    </Section>
  );
}
