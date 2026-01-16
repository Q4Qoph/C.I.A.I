import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/components/theme-provider';
import { LayoutWrapper } from '@/components/layout-wrapper';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Community In Action Institute | Empowering Communities in Kenya',
  description: 'Community In Action Institute is a community development and public health NGO focused on health, education, disaster management, food security, and community empowerment in Kenya.',
  keywords: ['NGO', 'Kenya', 'Community Development', 'Public Health', 'Education', 'Human Rights', 'Peacebuilding', 'Climate Change', 'Economic Empowerment'],
  authors: [{ name: 'Community In Action Institute' }],
  openGraph: {
    title: 'Community In Action Institute',
    description: 'Empowering communities through human rights, economic opportunity, peacebuilding, health, and climate action.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community In Action Institute',
    description: 'Empowering communities through human rights, economic opportunity, peacebuilding, health, and climate action.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
