import Image from 'next/image';
import { Building2, Eye, Target, Users, Handshake } from 'lucide-react';
import { Hero, HeroContent } from '@/components/hero';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { FeatureCard } from '@/components/feature-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const values = [
  {
    title: 'Integrity',
    description: 'We uphold the highest standards of honesty and ethical conduct in all our operations.',
    icon: Building2,
  },
  {
    title: 'Community-Centered',
    description: 'Communities are at the heart of everything we do, driving our programs and priorities.',
    icon: Users,
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of partnerships to achieve greater impact together.',
    icon: Handshake,
  },
];

const partners = [
  'Ministry of Health (MOH)',
  'TINADA',
  'AMREF',
  'Rise Empowerment',
  'Ajira Youth',
  'Provincial Administration',
  'Onyango Tunga & Co Advocates',
  'St. Monica Widows Women Group',
  'Local Government',
];

export default function AboutPage() {
  return (
    <>
      <Hero>
        <HeroContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col">
              <h1 className="text-balance leading-tight">About<br />CIAI</h1>
            </div>
            <div className="flex items-end">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Building stronger communities through action-oriented programs that address the real needs of people in Nyakach Sub County and beyond.
              </p>
            </div>
          </div>
        </HeroContent>
      </Hero>

      <Section className="py-24 lg:py-32">
        <SectionContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">Who We Are</p>
              <h2 className="mb-6">Community-Based, Action-Oriented</h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Community In Action Institute (CIAI) is a community development and public health NGO working at the grassroots level to empower vulnerable populations across Kenya. Founded on the principle that sustainable change comes from within communities, we partner with local stakeholders to deliver programs that create lasting impact.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our work spans human rights, peacebuilding, economic empowerment, climate action, and health, always with a focus on practical, measurable outcomes that improve lives.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden group order-1 lg:order-2">
              <Image
                src="/images/DSC_0004.jpg"
                alt="Community work"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-muted py-24 lg:py-32">
        <SectionContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden group order-2 lg:order-1">
              <Image
                src="/images/DSC_0006.jpg"
                alt="Mission and vision"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
            <div className="order-1 lg:order-2 space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3>Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To empower communities through integrated programs in human rights protection, conflict resolution, economic development, environmental conservation, and health promotion, creating sustainable pathways out of poverty and marginalization.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3>Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Thriving, resilient communities in Kenya where every person has access to their rights, opportunities for economic advancement, quality healthcare, and lives in peace with their environment and neighbors.
                </p>
              </div>
            </div>
          </div>
        </SectionContent>
      </Section>

      <Section className="py-24 lg:py-32">
        <SectionContent>
          <SectionHeader
            subtitle="Our Values"
            title="What Drives Us"
            description="These principles guide our work and decision-making every day."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <FeatureCard key={value.title} {...value} />
            ))}
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-muted py-24 lg:py-32">
        <SectionContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">Where We Work</p>
              <h2 className="mb-6">Our Geographic Focus</h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  CIAI primarily operates in <strong>Nyakach Sub County, Kisumu County, Kenya</strong>, with programs specifically targeting:
                </p>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>South East Nyakach Ward</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Nyabondo area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Sondu Market and surrounding communities</span>
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our community-centered approach allows us to work deeply within these areas, building trust and delivering sustained impact over time.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden group order-1 lg:order-2">
              <Image
                src="/images/DSC_0013.jpg"
                alt="Communities we serve"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </SectionContent>
      </Section>

      <Section className="py-24 lg:py-32">
        <SectionContent>
          <SectionHeader
            subtitle="Partnerships"
            title="Working Together for Impact"
            description="We collaborate with government agencies, NGOs, community groups, and private sector partners to maximize our reach and effectiveness."
          />
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner} className="bg-muted/50 p-6 flex items-center justify-center min-h-[100px] rounded-lg">
                <p className="font-semibold text-center text-sm">{partner}</p>
              </div>
            ))}
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
