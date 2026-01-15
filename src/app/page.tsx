import Link from 'next/link';
import Image from 'next/image';
import { Heart, Users, Shield, Leaf, Stethoscope, ArrowRight, Target, TrendingUp, HandshakeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hero, HeroContent } from '@/components/hero';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { ProgramCard } from '@/components/program-card';
import { StatCard } from '@/components/stat-card';

import Img0012 from '../../public/images/DSC_0012.webp';
import Img0038 from '../../public/images/DSC_0038.webp';
import Img0020 from '../../public/images/DSC_0020.webp';
import Img0030 from '../../public/images/30.webp';
import Img0016 from '../../public/images/DSC_0016.webp';
import Img0047 from '../../public/images/DSC_0047.webp';
import Img0008 from '../../public/images/DSC_0008.webp';

const focusAreas = [
  {
    title: 'OVC & Human Rights',
    description: 'Supporting orphans, vulnerable children, and protecting land rights for widows and marginalized communities.',
    icon: Heart,
    href: '/programs/human-rights',
    imageUrl: Img0012,
  },
  {
    title: 'Conflict Resolution & Peacebuilding',
    description: 'Facilitating community dialogues, peace summits, and conflict resolution to build harmonious communities.',
    icon: Shield,
    href: '/programs/peacebuilding',
    imageUrl: Img0038,
  },
  {
    title: 'Economic Empowerment',
    description: 'Digital literacy, entrepreneurship training, and education subsidies to unlock economic opportunities.',
    icon: TrendingUp,
    href: '/programs/economic',
    imageUrl: Img0020,
  },
  {
    title: 'Climate Change',
    description: 'Environmental conservation through tree nurseries and community greening initiatives.',
    icon: Leaf,
    href: '/programs/climate',
    imageUrl: Img0030,
  },
  {
    title: 'Health & SRHR',
    description: 'Comprehensive health programs including menstrual hygiene, mental health, and chronic disease management.',
    icon: Stethoscope,
    href: '/programs/health',
    imageUrl: Img0016,
  },
];

export default function Home() {
  return (
    <>
      <Hero imageUrl={Img0047.src}>
        <HeroContent className="text-white" variant="up">
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

      <Section className="bg-gradient-to-br from-orange-50 to-amber-50 py-24 lg:py-32" animate="up">
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

      <Section className="relative py-24 lg:py-32 overflow-hidden" animate="left">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-orange-100/20" />
        <SectionContent className="relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-2xl lg:rounded-3xl">
                <Image
                  src={Img0008}
                  alt="Active programs"
                  fill
                  className="img-cover transform group-hover:scale-110 transition-transform duration-700 object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
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

      <Section className="bg-white py-24 lg:py-32" animate="right">
        <SectionContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">In Their Own Words</p>
              <h2 className="mb-6">CIAI in Action</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Watch a short highlight from our work on the ground, featuring community members and partners who are
                building a more just and resilient future.
              </p>
              <p className="text-sm text-muted-foreground">
                This video captures real moments from CIAI&apos;s programs and community engagement.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/LCgPLkFd_xk"
                  title="CIAI Highlight Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-white py-24 lg:py-32" animate="up">
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

      <Section className="bg-gradient-to-br from-orange-50 to-amber-50 py-32 lg:py-40" animate="right">
        <SectionContent>
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-balance">Join Us in Making a Difference</h2>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Whether through donations, volunteering, or partnerships, your support helps us create lasting change in communities across Kenya.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-base font-semibold rounded-lg shadow-sm hover:shadow-md transition-all">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary/20 bg-white/50 hover:bg-white hover:border-primary text-foreground px-8 py-6 text-base font-semibold rounded-lg shadow-sm hover:shadow-md transition-all">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary/20 bg-white/50 hover:bg-white hover:border-primary text-foreground px-8 py-6 text-base font-semibold rounded-lg shadow-sm hover:shadow-md transition-all">
                <Link href="/contact">Partner with Us</Link>
              </Button>
            </div>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
