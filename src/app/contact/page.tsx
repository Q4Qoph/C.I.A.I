import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Hero, HeroContent } from '@/components/hero';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <>
      <Hero>
        <HeroContent>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col">
              <h1 className="text-balance leading-tight">Contact<br />Us</h1>
            </div>
            <div className="flex items-end">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Get in touch with CIAI for partnerships, program information, volunteering, or general inquiries.
              </p>
            </div>
          </div>
        </HeroContent>
      </Hero>

      <Section className="py-24 lg:py-32">
        <SectionContent>
          <SectionHeader
            subtitle="Get In Touch"
            title="How to Reach Us"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-base mb-2">Location</CardTitle>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      South East Nyakach Ward<br />
                      Nyakach Sub County<br />
                      Kisumu County, Kenya
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-base mb-2">Phone</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      +254 XXX XXX XXX
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-base mb-2">Email</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      info@ciai.org
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-base mb-2">Office Hours</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday<br />
                      8:00 AM - 5:00 PM EAT
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-4">For Partnerships</h3>
              <p className="text-muted-foreground mb-4">
                Organizations interested in partnering with CIAI should reach out via email with details about your organization and potential collaboration areas. We typically respond within 3-5 business days.
              </p>
              <p className="text-sm text-muted-foreground">
                Include in your inquiry: organization name, contact person, brief description of your work, and specific partnership interests (funding, program implementation, technical assistance, etc.)
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">For Volunteering</h3>
              <p className="text-muted-foreground mb-4">
                Individuals interested in volunteering should contact us with information about your skills, availability, and areas of interest. We especially welcome volunteers with backgrounds in health, education, business development, and community mobilization.
              </p>
              <p className="text-sm text-muted-foreground">
                Include in your inquiry: brief background, relevant skills or experience, preferred program area, and expected duration of engagement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">For Donations</h3>
              <p className="text-muted-foreground mb-4">
                Donors can contact us for banking details, donation receipts, or to discuss how your contribution will be used. We provide full transparency and accountability for all donations.
              </p>
              <p className="text-sm text-muted-foreground">
                See our <a href="/donate" className="text-primary hover:underline">Donate page</a> for more information on giving options.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">For Community Members</h3>
              <p className="text-muted-foreground mb-4">
                Community members seeking to participate in CIAI programs or access services should contact us or visit our field offices during program implementation. Check our <a href="/programs" className="text-primary hover:underline">Programs page</a> for current activities in your area.
              </p>
            </div>
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-24 lg:py-32">
        <SectionContent>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">We Value Your Inquiry</h2>
            <p className="text-lg text-muted-foreground">
              Whether you're interested in partnership, volunteering, donating, or simply learning more about our work, we welcome your contact and will respond promptly.
            </p>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
