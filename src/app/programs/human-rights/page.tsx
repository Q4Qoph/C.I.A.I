import { Heart, Home, Scale, Users } from 'lucide-react';
import { Hero, HeroContent } from '@/components/hero';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { FeatureCard } from '@/components/feature-card';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const activities = [
  {
    title: 'Land Rights Sensitization',
    description: 'Educational programs to help widows and vulnerable community members understand their legal rights to land and property.',
    location: 'Nyabondo',
    partners: ['St. Monica Widows Women Group'],
    timeline: 'January 2025',
  },
  {
    title: 'Land Adjudication Support',
    description: 'Legal assistance and advocacy for widows navigating the land adjudication process.',
    location: 'South East Nyakach Ward',
    partners: ['Onyango Tunga & Co Advocates'],
    timeline: 'Continuous',
  },
  {
    title: 'House Renovation (Tujenge Project)',
    description: 'Physical infrastructure support through house renovation and improvement for widows and orphans living in inadequate housing.',
    location: 'South East Nyakach Ward',
    partners: ['Community Members', 'CIAI', 'Partners'],
    timeline: 'February - March 2025',
  },
];

export default function HumanRightsPage() {
  return (
    <>
      <Hero>
        <HeroContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col">
              <h1 className="text-balance leading-tight">OVC & Human<br />Rights</h1>
            </div>
            <div className="flex items-end">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Protecting the rights and dignity of orphans, vulnerable children, widows, and marginalized community members.
              </p>
            </div>
          </div>
        </HeroContent>
      </Hero>

      <Section>
        <SectionContent>
          <SectionHeader
            subtitle="The Problem"
            title="Vulnerability and Rights Violations"
            description="In many rural communities in Kenya, widows and orphans face systematic discrimination, particularly around land and property rights. Cultural practices and lack of legal awareness leave vulnerable populations without secure housing, income, or legal protection. Without intervention, these families fall deeper into poverty and marginalization."
          />
        </SectionContent>
      </Section>

      <Section className="bg-muted/30">
        <SectionContent>
          <SectionHeader
            subtitle="Our Approach"
            title="Rights-Based Empowerment"
          />
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={Scale}
              title="Legal Awareness"
              description="Educating communities about their rights under Kenyan law, particularly around land and inheritance."
            />
            <FeatureCard
              icon={Users}
              title="Legal Support"
              description="Partnering with legal professionals to provide direct assistance in land adjudication and rights enforcement."
            />
            <FeatureCard
              icon={Home}
              title="Physical Support"
              description="Improving living conditions through house renovation and infrastructure support."
            />
          </div>
        </SectionContent>
      </Section>

      <Section>
        <SectionContent>
          <SectionHeader
            subtitle="Programs & Activities"
            title="What We Do"
            description="Our human rights work combines education, legal advocacy, and practical support."
          />
          <div className="space-y-6">
            {activities.map((activity) => (
              <Card key={activity.title}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle>{activity.title}</CardTitle>
                      <CardDescription className="mt-2">{activity.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-1">Location</div>
                      <div className="text-sm text-muted-foreground">{activity.location}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-1">Timeline</div>
                      <div className="text-sm text-muted-foreground">{activity.timeline}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-2">Partners</div>
                      <div className="flex flex-wrap gap-1">
                        {activity.partners.map((partner) => (
                          <Badge key={partner} variant="outline" className="text-xs">
                            {partner}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-24 lg:py-32">
        <SectionContent>
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="mb-4">Impact Beyond Rights</h2>
            <p className="text-lg text-muted-foreground">
              When we protect land rights, we secure livelihoods. When we renovate homes, we restore dignity. When we empower widows, we strengthen entire families and communities.
            </p>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
