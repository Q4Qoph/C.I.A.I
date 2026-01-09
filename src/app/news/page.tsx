import { Calendar, FileText, ExternalLink } from 'lucide-react';
import { Hero, HeroContent } from '@/components/hero';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const news = [
  {
    title: 'Peace Summit Set for April 2025',
    date: 'January 2025',
    category: 'Upcoming Events',
    description: 'CIAI will host a major Peace Summit on April 16-17, 2025 at Sondu Police Station, bringing together local government, politicians, and community leaders.',
  },
  {
    title: 'Digital Youth Hub Now Open',
    date: 'January 2025',
    category: 'Program Launch',
    description: 'Our new Digital Youth Hub at GAPCO Plaza is now operational, offering digital literacy training and job matching services to young people.',
  },
  {
    title: 'Q1 2025 Work Plan Released',
    date: 'January 2025',
    category: 'Reports',
    description: '15+ programs planned across all thematic areas for January-March 2025. View the full work plan for details on activities, timelines, and partners.',
  },
  {
    title: 'Menstrual Hygiene Campaign Scheduled',
    date: 'March 2025',
    category: 'Upcoming Programs',
    description: 'Dignity pack distribution and health education sessions planned for South East Nyakach Ward in partnership with Rise Empowerment and TINADA.',
  },
  {
    title: 'Green the World Tree Nursery Established',
    date: 'February 2025',
    category: 'Climate Action',
    description: 'Community tree nursery established in South East Nyakach Ward to support environmental conservation and reforestation efforts.',
  },
];

export default function NewsPage() {
  return (
    <>
      <Hero>
        <HeroContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col">
              <h1 className="text-balance leading-tight">News &<br />Resources</h1>
            </div>
            <div className="flex items-end">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Stay updated on CIAI's programs, events, and impact in communities across Kenya.
              </p>
            </div>
          </div>
        </HeroContent>
      </Hero>

      <Section className="py-24 lg:py-32">
        <SectionContent>
          <SectionHeader
            subtitle="Latest Updates"
            title="Recent News & Announcements"
          />
          <div className="space-y-6">
            {news.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{item.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {item.date}
                        </div>
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription className="mt-2">{item.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-muted py-24 lg:py-32">
        <SectionContent>
          <SectionHeader
            subtitle="Resources"
            title="Reports & Publications"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-lg">Quarterly Work Plans</CardTitle>
                    <CardDescription className="mt-2">
                      Detailed plans for each quarter outlining programs, timelines, partners, and expected outputs across all thematic areas.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-lg">Annual Reports</CardTitle>
                    <CardDescription className="mt-2">
                      Comprehensive yearly summaries of programs delivered, communities reached, impact achieved, and financial overview.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-lg">Program Briefs</CardTitle>
                    <CardDescription className="mt-2">
                      One-page summaries of individual programs detailing objectives, approach, partners, and outcomes.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-lg">Community Stories</CardTitle>
                    <CardDescription className="mt-2">
                      Impact stories from community members whose lives have been changed through CIAI programs.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </SectionContent>
      </Section>

      <Section className="py-24 lg:py-32">
        <SectionContent>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Stay Connected</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Follow CIAI on social media for real-time updates on our programs and community impact.
            </p>
            <div className="flex gap-4 justify-center">
              <Badge variant="outline" className="text-base px-4 py-2">Facebook</Badge>
              <Badge variant="outline" className="text-base px-4 py-2">Twitter</Badge>
              <Badge variant="outline" className="text-base px-4 py-2">LinkedIn</Badge>
            </div>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
