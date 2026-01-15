import Link from 'next/link';
import Image from 'next/image';
import { Heart, Shield, TrendingUp, Leaf, Stethoscope } from 'lucide-react';
import { Hero, HeroContent } from '@/components/hero';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { ProgramCard } from '@/components/program-card';

const programs = [
  {
    title: 'OVC & Human Rights',
    description: 'Protecting the rights of orphans, vulnerable children, and widows through land rights campaigns, legal support, and house renovation programs.',
    icon: Heart,
    href: '/programs/human-rights',
    imageUrl: '/images/DSC_0020.webp',
  },
  {
    title: 'Conflict Resolution & Peacebuilding',
    description: 'Building peaceful communities through dialogue, peace summits, and conflict mediation with stakeholders across affected areas.',
    icon: Shield,
    href: '/programs/peacebuilding',
    imageUrl: '/images/DSC_0038.webp',
  },
  {
    title: 'Economic Empowerment',
    description: 'Creating opportunities through digital literacy, entrepreneurship training, business development, and education subsidies for vulnerable youth.',
    icon: TrendingUp,
    href: '/programs/economic',
    imageUrl: '/images/DSC_0028.webp',
  },
  {
    title: 'Climate Change',
    description: 'Environmental conservation and climate adaptation through tree nurseries, community greening, and environmental beautification projects.',
    icon: Leaf,
    href: '/programs/climate',
    imageUrl: '/images/30.webp',
  },
  {
    title: 'Health & SRHR',
    description: 'Comprehensive health programs including menstrual hygiene, mental health support, and chronic disease management in partnership with health authorities.',
    icon: Stethoscope,
    href: '/programs/health',
    imageUrl: '/images/DSC_0040.webp',
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Hero>
        <HeroContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col">
              <h1 className="text-balance leading-tight">Our<br />Programs</h1>
            </div>
            <div className="flex items-end">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                CIAI works across five thematic areas, each addressing critical needs in the communities we serve. Every program is designed with community input and tracked for accountability.
              </p>
            </div>
          </div>
        </HeroContent>
      </Hero>

      <Section className="py-24 lg:py-32">
        <SectionContent>
          <SectionHeader
            subtitle="Thematic Areas"
            title="Comprehensive Community Development"
            description="Our programs are interconnected, addressing the multiple challenges communities face in a holistic way."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-muted py-24 lg:py-32">
        <SectionContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden group order-2 lg:order-1">
              <Image
                src="/images/DSC_0042.webp"
                alt="Our approach"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">Our Approach</p>
              <h2 className="mb-6">How We Work</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Every program follows a consistent approach: understand the problem through community consultation, design targeted interventions with local input, implement with strong partnerships, and track progress through our accountability system.
                </p>
                <p>
                  We don't work in isolation. Our programs are delivered in partnership with government agencies, local NGOs, community groups, and international organizations, ensuring coordination and maximizing impact.
                </p>
              </div>
            </div>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
