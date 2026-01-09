import { Leaf, TreePine, Flower2, Globe } from 'lucide-react';
import { Hero, HeroContent } from '@/components/hero';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { FeatureCard } from '@/components/feature-card';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const activities = [
  {
    title: 'Tree Nursery Establishment',
    description: 'Creating community tree nurseries to produce seedlings for reforestation and environmental restoration.',
    location: 'South East Nyakach Ward',
    partners: ['Provincial Administration', 'Community Members', 'Partners'],
    timeline: 'February 2025 - Ongoing',
  },
  {
    title: 'Ngege Dispensary Beautification',
    description: 'Environmental beautification project transforming the dispensary grounds through tree planting and landscaping.',
    location: 'Ngege Dispensary',
    partners: ['Community Members'],
    timeline: 'January 18, 2025',
  },
];

export default function ClimatePage() {
  return (
    <>
      <Hero>
        <HeroContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col">
              <h1 className="text-balance leading-tight">Climate Change<br />Programs</h1>
            </div>
            <div className="flex items-end">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Building climate resilience through environmental conservation and community greening initiatives.
              </p>
            </div>
          </div>
        </HeroContent>
      </Hero>

      <Section>
        <SectionContent>
          <SectionHeader
            subtitle="The Problem"
            title="Environmental Degradation and Climate Vulnerability"
            description="Deforestation, soil erosion, and climate change are threatening livelihoods in rural Kenya. Communities face increasing droughts, unpredictable rainfall, and environmental degradation that undermines agriculture and water security. Without environmental restoration and adaptation measures, vulnerability will only increase."
          />
        </SectionContent>
      </Section>

      <Section className="bg-muted/30">
        <SectionContent>
          <SectionHeader
            subtitle="Our Approach"
            title="Community-Led Environmental Action"
          />
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={TreePine}
              title="Reforestation"
              description="Growing and planting trees to restore forest cover, prevent soil erosion, and sequester carbon."
            />
            <FeatureCard
              icon={Flower2}
              title="Beautification"
              description="Greening public spaces to improve environmental aesthetics and community pride."
            />
            <FeatureCard
              icon={Globe}
              title="Climate Awareness"
              description="Educating communities about climate change and practical adaptation strategies."
            />
          </div>
        </SectionContent>
      </Section>

      <Section>
        <SectionContent>
          <SectionHeader
            subtitle="Programs & Activities"
            title="Green the World Project"
            description="Our climate work centers on practical environmental restoration and community engagement."
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
            <Leaf className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="mb-4">Environmental Stewardship</h2>
            <p className="text-lg text-muted-foreground">
              Every tree planted is an investment in the future. Through community-led environmental action, we build resilience against climate change while creating greener, healthier communities.
            </p>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
