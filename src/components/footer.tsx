import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const navigation = {
  about: [
    { name: 'Who We Are', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Partners', href: '/about#partners' },
  ],
  programs: [
    { name: 'OVC & Human Rights', href: '/programs/human-rights' },
    { name: 'Peacebuilding', href: '/programs/peacebuilding' },
    { name: 'Economic Empowerment', href: '/programs/economic' },
    { name: 'Climate Change', href: '/programs/climate' },
    { name: 'Health & SRHR', href: '/programs/health' },
  ],
  resources: [
    { name: 'Impact Reports', href: '/impact' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Contact Us', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src="/CIAI-Logo.png"
                  alt="CIAI Logo"
                  width={140}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="mt-4 text-sm leading-6 text-muted-foreground max-w-xs">
                Empowering communities through human rights, economic opportunity, peacebuilding, health, and climate action.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">About</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Programs</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.programs.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Nairobi, Kenya</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">+254 714 666 111</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">info@communityinactioninstitute.org</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Community In Action Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
