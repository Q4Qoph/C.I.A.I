import Image from 'next/image';
import { Section, SectionContent, SectionHeader } from '@/components/section';

import Img0003 from '../../../public/images/DSC_0003.webp';
import Img0004 from '../../../public/images/DSC_0004.webp';
import Img0006 from '../../../public/images/DSC_0006.webp';
import Img0008 from '../../../public/images/DSC_0008.webp';
import Img0009 from '../../../public/images/DSC_0009.webp';
import Img0012 from '../../../public/images/DSC_0012.webp';
import Img0013 from '../../../public/images/DSC_0013.webp';
import Img0014 from '../../../public/images/DSC_0014.webp';
import Img0016 from '../../../public/images/DSC_0016.webp';
import Img0020 from '../../../public/images/DSC_0020.webp';
import Img0022 from '../../../public/images/DSC_0022.webp';
import Img0023 from '../../../public/images/DSC_0023.webp';

const galleryImages = [
  Img0003,
  Img0004,
  Img0006,
  Img0008,
  Img0009,
  Img0012,
  Img0013,
  Img0014,
  Img0016,
  Img0020,
  Img0022,
  Img0023,
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
              key={index}
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

