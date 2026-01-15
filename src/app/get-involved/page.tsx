import Image from 'next/image';
import { Users, Handshake, Heart, Building } from 'lucide-react';
import { Hero, HeroContent } from '@/components/hero';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const opportunities = [
  {
    title: 'Volunteer with CIAI',
    description: 'Join our programs on the ground. We welcome volunteers with skills in health, education, business development, and community mobilization.',
    icon: Users,
    action: 'Express Interest',
  },
  {
    title: 'Partner with Us',
    description: 'Organizations, government agencies, and NGOs: partner with CIAI to deliver programs or support our thematic work areas.',
    icon: Handshake,
    action: 'Explore Partnership',
  },
  {
    title: 'Community Participation',
    description: 'Community members: participate in our programs, join dialogues, access training, or volunteer as peer educators and leaders.',
    icon: Heart,
    action: 'Get Involved Locally',
  },
  {
    title: 'Corporate Engagement',
    description: 'Businesses: support CIAI through corporate social responsibility partnerships, employee volunteering, or in-kind contributions.',
    icon: Building,
    action: 'Corporate Partnerships',
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <Hero>
        <HeroContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col">
              <h1 className="text-balance leading-tight">Get<br />Involved</h1>
            </div>
            <div className="flex items-end">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                There are many ways to support CIAI's work and contribute to stronger, healthier communities in Kenya.
              </p>
            </div>
          </div>
        </HeroContent>
      </Hero>

      <Section className="py-24 lg:py-32">
        <SectionContent>
          <SectionHeader
            subtitle="Join Us"
            title="Ways to Get Involved"
            description="Whether you're an individual, organization, or business, your support makes a real difference."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {opportunities.map((opportunity) => (
              <Card key={opportunity.title} className="group hover-scale transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <opportunity.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle>{opportunity.title}</CardTitle>
                      <CardDescription className="mt-2">{opportunity.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild size="sm" className="rounded-full bg-foreground/10 text-foreground hover:bg-foreground/15 border-0">
                    <Link href="/contact">{opportunity.action}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-muted py-24 lg:py-32">
        <SectionContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden group order-2 lg:order-1">
              <Image
                src="/images/DSC_0028.jpg"
                alt="Youth engagement"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">Youth Engagement</p>
              <h2 className="mb-6">Opportunities for Young People</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CIAI is committed to youth empowerment. We offer opportunities for young people to engage in our programs, develop skills, access training, and become leaders in their communities. Our Digital Youth Hub, entrepreneurship programs, and peer education initiatives welcome motivated youth.
              </p>
            </div>
          </div>
        </SectionContent>
      </Section>

      <Section className="py-24 lg:py-32">
        <SectionContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">For Organizations</p>
              <h2 className="mb-6">Institutional Partnerships</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We welcome partnerships with NGOs, government agencies, academic institutions, and international organizations. Partnership models include joint program implementation, resource sharing, technical assistance, research collaboration, and funding partnerships.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Discuss Partnership Opportunities</Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden group order-1 lg:order-2">
              <Image
                src="/images/DSC_0031.jpg"
                alt="Partnerships"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-24 lg:py-32">
        <SectionContent>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">Your Support Changes Lives</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every volunteer hour, partnership, and contribution helps us extend our reach and deepen our impact in the communities we serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
                <Link href="/donate">Make a Donation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
