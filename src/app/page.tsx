import Link from 'next/link';
import { Heart, Users, Shield, Leaf, Stethoscope, ArrowRight, Target, TrendingUp, HandshakeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hero, HeroContent } from '@/components/hero';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { ProgramCard } from '@/components/program-card';
import { StatCard } from '@/components/stat-card';

const focusAreas = [
  {
    title: 'OVC & Human Rights',
    description: 'Supporting orphans, vulnerable children, and protecting land rights for widows and marginalized communities.',
    icon: Heart,
    href: '/programs/human-rights',
    imageUrl: 'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Conflict Resolution & Peacebuilding',
    description: 'Facilitating community dialogues, peace summits, and conflict resolution to build harmonious communities.',
    icon: Shield,
    href: '/programs/peacebuilding',
    imageUrl: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Economic Empowerment',
    description: 'Digital literacy, entrepreneurship training, and education subsidies to unlock economic opportunities.',
    icon: TrendingUp,
    href: '/programs/economic',
    imageUrl: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Climate Change',
    description: 'Environmental conservation through tree nurseries and community greening initiatives.',
    icon: Leaf,
    href: '/programs/climate',
    imageUrl: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Health & SRHR',
    description: 'Comprehensive health programs including menstrual hygiene, mental health, and chronic disease management.',
    icon: Stethoscope,
    href: '/programs/health',
    imageUrl: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Home() {
  return (
    <>
      <Hero imageUrl="https://images.pexels.com/photos/6647024/pexels-photo-6647024.jpeg?auto=compress&cs=tinysrgb&w=1920">
        <HeroContent className="text-white">
          <div className="max-w-3xl space-y-8 relative">
            <div className="absolute inset-0 bg-black/30 rounded-2xl -z-10 blur-xl" />
            <h1 className="text-balance text-white drop-shadow-2xl font-bold">
              Empowering Communities Through Action
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed drop-shadow-xl font-medium">
              Building stronger, healthier, and more resilient communities across Kenya through human rights protection, economic development, and sustainable programs.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-2xl font-semibold">
                <Link href="/donate">Support Our Work</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/30 backdrop-blur-md text-white hover:bg-white hover:text-foreground shadow-xl font-semibold">
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </HeroContent>
      </Hero>

      <Section className="bg-gradient-to-br from-orange-50 to-amber-50 py-24 lg:py-32">
        <SectionContent>
          <SectionHeader
            subtitle="What We Do"
            title="Five Interconnected Thematic Areas"
            description="CIAI addresses critical community needs through five comprehensive program areas, each designed to create lasting, measurable impact in the lives of vulnerable populations across Kenya."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <ProgramCard key={area.title} {...area} />
            ))}
          </div>
        </SectionContent>
      </Section>

      <Section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-orange-100/20" />
        <SectionContent className="relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-2xl lg:rounded-3xl">
                <img
                  src="https://images.pexels.com/photos/6647024/pexels-photo-6647024.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Active programs"
                  className="img-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/20 to-transparent" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">Active Now</p>
              <h2 className="mb-8">Current Programs Making an Impact</h2>
              <div className="space-y-6">
                <div className="p-6 bg-muted/50 rounded-xl">
                  <h4 className="text-primary mb-2">Peace Summit</h4>
                  <p className="text-sm font-semibold text-foreground mb-1">April 16-17, 2025 • Sondu Police Station</p>
                  <p className="text-muted-foreground">Bringing together local government, politicians, and community leaders to address systemic conflict.</p>
                </div>
                <div className="p-6 bg-muted/50 rounded-xl">
                  <h4 className="text-primary mb-2">Digital Youth Hub</h4>
                  <p className="text-sm font-semibold text-foreground mb-1">Ongoing • GAPCO Plaza</p>
                  <p className="text-muted-foreground">Digital literacy and job matching programs for young people seeking online work opportunities.</p>
                </div>
                <div className="p-6 bg-muted/50 rounded-xl">
                  <h4 className="text-primary mb-2">Green the World Project</h4>
                  <p className="text-sm font-semibold text-foreground mb-1">February 2025 - Ongoing</p>
                  <p className="text-muted-foreground">Community tree nurseries supporting environmental conservation and reforestation.</p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/programs">
                    View All Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-white py-24 lg:py-32">
        <SectionContent>
          <SectionHeader
            subtitle="Impact & Accountability"
            title="Transparency in Action"
            description="Every program is tracked through our internal accountability system, ensuring measurable outcomes and honest reporting."
          />

          <div className="grid gap-8 md:grid-cols-3 mb-16">
            <div className="bg-muted/50 p-8 rounded-2xl text-center">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-xl font-semibold mb-1">Active Programs</div>
              <div className="text-muted-foreground">Across 5 thematic areas</div>
            </div>
            <div className="bg-muted/50 p-8 rounded-2xl text-center">
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-xl font-semibold mb-1">People Reached</div>
              <div className="text-muted-foreground">In communities we serve</div>
            </div>
            <div className="bg-muted/50 p-8 rounded-2xl text-center">
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-xl font-semibold mb-1">Partner Organizations</div>
              <div className="text-muted-foreground">Collaborating for impact</div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/impact">
                View Impact Reports
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </SectionContent>
      </Section>

      <Section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6646947/pexels-photo-6646947.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="img-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90" />
        </div>
        <SectionContent className="relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-white drop-shadow-lg">Join Us in Making a Difference</h2>
            <p className="text-xl lg:text-2xl text-white/95 leading-relaxed font-light">
              Whether through donations, volunteering, or partnerships, your support helps us create lasting change in communities across Kenya.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-xl">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm">
                <Link href="/contact">Partner with Us</Link>
              </Button>
            </div>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
