import Image from 'next/image';
import { Section, SectionContent, SectionHeader } from '@/components/section';

const galleryImages = [
  '/images/DSC_0003.webp',
  '/images/DSC_0004.webp',
  '/images/DSC_0006.webp',
  '/images/DSC_0008.webp',
  '/images/DSC_0009.webp',
  '/images/DSC_0012.webp',
  '/images/DSC_0013.webp',
  '/images/DSC_0014.webp',
  '/images/DSC_0016.webp',
  '/images/DSC_0020.webp',
  '/images/DSC_0022.webp',
  '/images/DSC_0023.webp',
  '/images/DSC_0024.webp',
  '/images/DSC_0026.webp',
  '/images/DSC_0028.webp',
  '/images/DSC_0030.webp',
  '/images/DSC_0031.webp',
  '/images/DSC_0034.webp',
  '/images/DSC_0036.webp',
  '/images/DSC_0037.webp',
  '/images/DSC_0038.webp',
  '/images/DSC_0039.webp',
  '/images/DSC_0040.webp',
  '/images/DSC_0042.webp',
  '/images/DSC_0043.webp',
  '/images/DSC_0046.webp',
  '/images/DSC_0047.webp',
];

export default function GalleryPage() {
  return (
    <Section className="pt-32 pb-24 lg:pt-40 lg:pb-32" animate="up">
      <SectionContent>
        <SectionHeader
          subtitle="Photo Gallery"
          title="Scenes from Our Work"
          description="A curated gallery showcasing CIAI programs, community meetings, and everyday moments of change captured across our projects."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-xl group bg-black/5"
            >
              <Image
                src={src}
                alt={`CIAI gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                loading={index < 4 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}

