import { Stethoscope, Heart, Brain, Activity } from 'lucide-react';
import { Hero, HeroContent } from '@/components/hero';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { FeatureCard } from '@/components/feature-card';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const activities = [
  {
    title: 'Menstrual Hygiene Programs',
    description: 'Dignity pack distribution providing menstrual hygiene products, combined with health education in schools and communities.',
    location: 'South East Nyakach Ward',
    partners: ['Rise Empowerment', 'TINADA'],
    timeline: 'March 2025',
  },
  {
    title: 'School Health Programs',
    description: 'Health talks and educational sessions in schools addressing reproductive health, hygiene, and general wellness.',
    location: 'South East Nyakach',
    partners: ['Rise Empowerment', 'MOH', 'TINADA'],
    timeline: 'March 2025',
  },
  {
    title: 'Mental Health Support',
    description: 'Group therapy sessions providing mental health support and counseling in safe, community-based settings.',
    location: 'South East Nyakach',
    partners: ['Rise Empowerment', 'TINADA', 'MOH'],
    timeline: 'March 2025',
  },
  {
    title: 'Diabetes & Hypertension Management',
    description: 'Chronic disease management programs providing screening, education, and ongoing support for adults living with diabetes and hypertension.',
    location: 'South East Nyakach',
    partners: ['AMREF', 'MOH', 'TINADA'],
    timeline: 'Continuous',
  },
];

export default function HealthPage() {
  return (
    <>
      <Hero>
        <HeroContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col">
              <h1 className="text-balance leading-tight">Health & SRHR<br />Programs</h1>
            </div>
            <div className="flex items-end">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Comprehensive health programming addressing reproductive health, mental wellness, and chronic disease management.
              </p>
            </div>
          </div>
        </HeroContent>
      </Hero>

      <Section>
        <SectionContent>
          <SectionHeader
            subtitle="The Problem"
            title="Health Access and Awareness Gaps"
            description="Rural communities face multiple health challenges: limited access to menstrual hygiene products, inadequate health education, unaddressed mental health needs, and rising rates of chronic diseases like diabetes and hypertension. These health gaps undermine quality of life, education outcomes, and economic productivity."
          />
        </SectionContent>
      </Section>

      <Section className="bg-muted/30">
        <SectionContent>
          <SectionHeader
            subtitle="Our Approach"
            title="Comprehensive, Community-Based Health"
          />
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={Heart}
              title="Reproductive Health"
              description="Menstrual hygiene, sexual health education, and dignity for women and girls."
            />
            <FeatureCard
              icon={Brain}
              title="Mental Wellness"
              description="Breaking stigma around mental health through counseling and community support."
            />
            <FeatureCard
              icon={Activity}
              title="Chronic Disease"
              description="Long-term management support for diabetes, hypertension, and other chronic conditions."
            />
          </div>
        </SectionContent>
      </Section>

      <Section>
        <SectionContent>
          <SectionHeader
            subtitle="Programs & Activities"
            title="Holistic Health Programming"
            description="Working in partnership with health authorities, we deliver programs addressing multiple health priorities."
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
            <Stethoscope className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="mb-4">Health is a Right, Not a Privilege</h2>
            <p className="text-lg text-muted-foreground">
              By addressing menstrual health, mental wellness, and chronic diseases, we help communities lead healthier, more dignified lives. Good health is the foundation for education, economic opportunity, and community well-being.
            </p>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
