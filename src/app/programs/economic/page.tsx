import { TrendingUp, Laptop, Briefcase, GraduationCap } from 'lucide-react';
import { Hero, HeroContent } from '@/components/hero';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { FeatureCard } from '@/components/feature-card';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const activities = [
  {
    title: 'Digital Youth Hub',
    description: 'Digital literacy and job matching programs providing young people with skills for online work and connecting them with employment opportunities.',
    location: 'GAPCO Plaza',
    partners: ['Ajira Youth', 'TINADA'],
    timeline: 'January 2025 - Ongoing',
  },
  {
    title: 'Entrepreneurship Training & Support',
    description: 'Comprehensive entrepreneurship programs including financial literacy training, business plan development, and practical skills like soap making.',
    location: 'South East Nyakach Ward',
    partners: ['Rise Empowerment', 'TINADA'],
    timeline: 'February 2025 - Ongoing',
  },
  {
    title: 'Tusome Project',
    description: 'Education subsidy program removing financial barriers to education for vulnerable children and youth.',
    location: 'Nyakach Sub County',
    partners: ['CIAI'],
    timeline: 'February 2025 - Ongoing',
  },
];

export default function EconomicPage() {
  return (
    <>
      <Hero>
        <HeroContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col">
              <h1 className="text-balance leading-tight">Economic<br />Empowerment</h1>
            </div>
            <div className="flex items-end">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Creating pathways out of poverty through skills development, entrepreneurship, and education.
              </p>
            </div>
          </div>
        </HeroContent>
      </Hero>

      <Section>
        <SectionContent>
          <SectionHeader
            subtitle="The Problem"
            title="Limited Economic Opportunities"
            description="Youth and vulnerable populations in rural Kenya face high unemployment, limited access to quality education, and few pathways to economic independence. Without skills, capital, or connections to opportunity, talented individuals remain trapped in poverty despite their potential."
          />
        </SectionContent>
      </Section>

      <Section className="bg-muted/30">
        <SectionContent>
          <SectionHeader
            subtitle="Our Approach"
            title="Skills, Support, and Access"
          />
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={Laptop}
              title="Digital Skills"
              description="Training in digital literacy and online work to access the growing digital economy."
            />
            <FeatureCard
              icon={Briefcase}
              title="Entrepreneurship"
              description="Business skills, financial literacy, and practical vocational training for self-employment."
            />
            <FeatureCard
              icon={GraduationCap}
              title="Education Access"
              description="Subsidies and support to ensure vulnerable children can stay in school."
            />
          </div>
        </SectionContent>
      </Section>

      <Section>
        <SectionContent>
          <SectionHeader
            subtitle="Programs & Activities"
            title="Creating Economic Opportunity"
            description="Our programs provide the skills, knowledge, and support needed for economic independence."
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
            <TrendingUp className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="mb-4">Breaking Cycles of Poverty</h2>
            <p className="text-lg text-muted-foreground">
              Economic empowerment creates ripple effects. When one person gains skills and income, their entire family benefits, and they become agents of change in their community.
            </p>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
