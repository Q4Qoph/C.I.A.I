import Image from 'next/image';
import { DollarSign, Shield, Target, TrendingUp } from 'lucide-react';
import { Hero, HeroContent } from '@/components/hero';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FeatureCard } from '@/components/feature-card';

const programAreas = [
  { name: 'OVC & Human Rights', description: 'Support land rights, legal assistance, and housing for vulnerable families' },
  { name: 'Peacebuilding', description: 'Fund community dialogues and peace summits' },
  { name: 'Economic Empowerment', description: 'Sponsor youth training and education subsidies' },
  { name: 'Climate Action', description: 'Support tree planting and environmental conservation' },
  { name: 'Health Programs', description: 'Enable menstrual hygiene, mental health, and chronic disease programs' },
];

export default function DonatePage() {
  return (
    <>
      <Hero>
        <HeroContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col">
              <h1 className="text-balance leading-tight">Support Our<br />Work</h1>
            </div>
            <div className="flex items-end">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Your donation directly funds programs that empower communities, protect rights, build peace, and improve health.
              </p>
            </div>
          </div>
        </HeroContent>
      </Hero>

      <Section className="py-24 lg:py-32">
        <SectionContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">Why Donate</p>
              <h2 className="mb-6">Your Impact</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every donation to CIAI goes directly to program delivery, community support, and capacity building.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden order-1 lg:order-2 group">
              <Image
                src="/images/DSC_0014.jpg"
                alt="Impact"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3 mt-16">
            <FeatureCard
              icon={Target}
              title="Direct Program Delivery"
              description="Funds support on-the-ground programs in communities, not administrative overhead."
            />
            <FeatureCard
              icon={Shield}
              title="Full Accountability"
              description="Every program is tracked through our accountability system with transparent reporting."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Measurable Impact"
              description="See the real difference your donation makes through our impact reports."
            />
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-muted py-24 lg:py-32">
        <SectionContent>
          <SectionHeader
            subtitle="Where Your Money Goes"
            title="Program Areas You Can Support"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {programAreas.map((area) => (
              <Card key={area.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{area.name}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </SectionContent>
      </Section>

      <Section className="py-24 lg:py-32">
        <SectionContent>
          <SectionHeader
            subtitle="How to Donate"
            title="Donation Methods"
          />
          <div className="grid gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <CardTitle>Bank Transfer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Make a direct bank transfer to CIAI. Contact us for banking details and reference information.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-mono">Email: info@communityinactioninstitute.org</p>
                  <p className="text-sm font-mono">Phone: +254 714 666 111</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <CardTitle>Mobile Money</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  M-PESA donations accepted. Contact us for payment details and donation confirmation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <CardTitle>International Donations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  International donors can arrange wire transfers or explore partnership funding models. Contact us to discuss options.
                </p>
              </CardContent>
            </Card>
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-24 lg:py-32">
        <SectionContent>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Donation Accountability</h2>
            <p className="text-lg text-muted-foreground">
              All donations are tracked through CIAI's accountability system. Donors receive confirmation and can request reports on how funds were used. Transparency is not optional—it's how we operate.
            </p>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
