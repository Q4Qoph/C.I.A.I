import Link from 'next/link';
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
    imageUrl: 'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Conflict Resolution & Peacebuilding',
    description: 'Building peaceful communities through dialogue, peace summits, and conflict mediation with stakeholders across affected areas.',
    icon: Shield,
    href: '/programs/peacebuilding',
    imageUrl: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Economic Empowerment',
    description: 'Creating opportunities through digital literacy, entrepreneurship training, business development, and education subsidies for vulnerable youth.',
    icon: TrendingUp,
    href: '/programs/economic',
    imageUrl: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Climate Change',
    description: 'Environmental conservation and climate adaptation through tree nurseries, community greening, and environmental beautification projects.',
    icon: Leaf,
    href: '/programs/climate',
    imageUrl: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Health & SRHR',
    description: 'Comprehensive health programs including menstrual hygiene, mental health support, and chronic disease management in partnership with health authorities.',
    icon: Stethoscope,
    href: '/programs/health',
    imageUrl: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800',
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
              <img
                src="https://images.pexels.com/photos/6646939/pexels-photo-6646939.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Our approach"
                className="img-cover transform group-hover:scale-105 transition-transform duration-700"
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
