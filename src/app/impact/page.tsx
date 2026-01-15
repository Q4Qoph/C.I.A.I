import Image from 'next/image';
import { BarChart3, FileCheck, TrendingUp, Users, Target, Database } from 'lucide-react';
import { Hero, HeroContent } from '@/components/hero';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { StatCard } from '@/components/stat-card';
import { FeatureCard } from '@/components/feature-card';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const indicators = [
  { category: 'Health & SRHR', value: '5', metric: 'Programs Delivered', description: 'Menstrual hygiene, mental health, chronic disease management' },
  { category: 'Economic Empowerment', value: '3', metric: 'Active Programs', description: 'Digital hub, entrepreneurship, education subsidies' },
  { category: 'Peacebuilding', value: '2', metric: 'Major Initiatives', description: 'Community dialogues and peace summit' },
  { category: 'Human Rights', value: '3', metric: 'Rights Programs', description: 'Land rights, legal support, housing renovation' },
  { category: 'Climate Action', value: '2', metric: 'Green Projects', description: 'Tree nurseries and beautification' },
  { category: 'Communities', value: '10+', metric: 'Villages Reached', description: 'Across South East Nyakach Ward' },
];

export default function ImpactPage() {
  return (
    <>
      <Hero>
        <HeroContent variant="up">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col">
              <h1 className="text-balance leading-tight">Impact &<br />Accountability</h1>
            </div>
            <div className="flex items-end">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Transparency and accountability are not optional. We track every program, measure outcomes, and report honestly on our work.
              </p>
            </div>
          </div>
        </HeroContent>
      </Hero>

      <Section className="py-24 lg:py-32" animate="left">
        <SectionContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">Our Commitment</p>
              <h2 className="mb-6">Accountability Through Systems</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                CIAI uses an internal activity-tracking system to capture every program, partnership, location, and output. This ensures transparency, enables learning, and demonstrates results to donors and communities.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group order-1 lg:order-2">
              <Image
                src="/images/DSC_0034.webp"
                alt="Accountability"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3 mt-16">
            <FeatureCard
              icon={Database}
              title="Internal Tracking System"
              description="Every activity is logged with dates, locations, partners, participants, and specific outputs achieved."
            />
            <FeatureCard
              icon={Target}
              title="Measurable Outcomes"
              description="We don't just track activities—we measure real changes in communities, from trees planted to people trained."
            />
            <FeatureCard
              icon={FileCheck}
              title="Regular Reporting"
              description="Quarterly work plans and annual reports document our progress and learnings transparently."
            />
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-muted py-24 lg:py-32" animate="up">
        <SectionContent>
          <SectionHeader
            subtitle="Key Indicators"
            title="Our 2025 Q1 Impact"
            description="A snapshot of programs delivered and communities reached in the first quarter of 2025."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {indicators.map((indicator) => (
              <Card key={indicator.category}>
                <CardHeader>
                  <CardTitle className="text-base">{indicator.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-1">{indicator.value}</div>
                  <div className="text-sm font-semibold text-foreground mb-2">{indicator.metric}</div>
                  <p className="text-xs text-muted-foreground">{indicator.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContent>
      </Section>

      <Section className="py-24 lg:py-32" animate="right">
        <SectionContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden group order-2 lg:order-1">
              <Image
                src="/images/DSC_0036.webp"
                alt="Transparency"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">Transparency</p>
              <h2 className="mb-6">Work Plans & Reports</h2>
              <p className="text-lg text-muted-foreground mb-8">We make our plans and progress available to the public.</p>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Q1 2025 Work Plan</CardTitle>
                    <CardDescription>January - March 2025 planned activities across all thematic areas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Detailed breakdown of 15+ programs planned for the first quarter of 2025, including timelines, partners, locations, and expected outputs.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>2024 Annual Report</CardTitle>
                    <CardDescription>Full year impact summary and financial overview</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive report on programs delivered, communities reached, outcomes achieved, and lessons learned in 2024.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">Financial Accountability</p>
              <h2 className="mb-6">Responsible Stewardship</h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  CIAI is committed to responsible use of all funds, whether from donors, partners, or internal resources. Our governance structure includes oversight mechanisms to ensure funds are used as intended, and we maintain detailed financial records aligned with our program tracking system.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We follow Kenyan NGO regulations and best practices in financial management, with regular audits and transparent reporting to stakeholders.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden group order-1 lg:order-2">
              <Image
                src="/images/DSC_0037.webp"
                alt="Financial accountability"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-24 lg:py-32" animate="up">
        <SectionContent>
          <div className="max-w-2xl mx-auto text-center">
            <BarChart3 className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="mb-4">Impact Beyond Numbers</h2>
            <p className="text-lg text-muted-foreground">
              While we track numbers, our real impact is in the stories: widows securing land rights, youth gaining employment, communities living in peace, and families accessing healthcare. Numbers help us measure progress, but stories remind us why we do this work.
            </p>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
