import { Shield, MessageSquare, Users, Handshake } from 'lucide-react';
import { Hero, HeroContent } from '@/components/hero';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { FeatureCard } from '@/components/feature-card';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const activities = [
  {
    title: 'Community Dialogues & Peace Meetings',
    description: 'Regular peace meetings and dialogue sessions bringing together community members, provincial administration, and peace partners to address conflicts before they escalate.',
    location: 'Sondu Market',
    partners: ['Community Members', 'CIAI', 'Provincial Administration', 'Peace Partners', 'TINADA'],
    timeline: 'January - March 2025',
  },
  {
    title: 'Peace Summit/Conference',
    description: 'Large-scale peace summit convening local government, politicians, implementing partners, and community leaders to address systemic conflict issues and build collaborative solutions.',
    location: 'Sondu Police Station',
    partners: ['Local Government', 'CIAI', 'Politicians', 'IPs', 'TINADA'],
    timeline: 'April 16-17, 2025',
  },
];

export default function PeacebuildingPage() {
  return (
    <>
      <Hero>
        <HeroContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col">
              <h1 className="text-balance leading-tight">Conflict Resolution &<br />Peacebuilding</h1>
            </div>
            <div className="flex items-end">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Building harmonious communities through dialogue, mediation, and collaborative conflict resolution.
              </p>
            </div>
          </div>
        </HeroContent>
      </Hero>

      <Section>
        <SectionContent>
          <SectionHeader
            subtitle="The Problem"
            title="Community Conflict and Fragmentation"
            description="Communities in Nyakach face various sources of conflict including resource competition, historical tensions, political divisions, and inter-community disputes. Without structured mechanisms for dialogue and resolution, these conflicts can escalate, undermining development, destroying social cohesion, and perpetuating cycles of violence."
          />
        </SectionContent>
      </Section>

      <Section className="bg-muted/30">
        <SectionContent>
          <SectionHeader
            subtitle="Our Approach"
            title="Dialogue-Driven Peacebuilding"
          />
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={MessageSquare}
              title="Community Dialogue"
              description="Creating safe spaces for honest conversation, grievance airing, and collaborative problem-solving."
            />
            <FeatureCard
              icon={Users}
              title="Stakeholder Engagement"
              description="Bringing together all affected parties including government, traditional leaders, and community members."
            />
            <FeatureCard
              icon={Handshake}
              title="Sustained Engagement"
              description="Regular follow-up and ongoing dialogue to maintain peace and address emerging tensions."
            />
          </div>
        </SectionContent>
      </Section>

      <Section>
        <SectionContent>
          <SectionHeader
            subtitle="Programs & Activities"
            title="Our Peacebuilding Work"
            description="We facilitate dialogue at both grassroots and institutional levels."
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
            <Shield className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="mb-4">Peace as Foundation for Development</h2>
            <p className="text-lg text-muted-foreground">
              Without peace, development cannot take root. Our peacebuilding work creates the stable foundation communities need to pursue education, economic opportunity, and health.
            </p>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
