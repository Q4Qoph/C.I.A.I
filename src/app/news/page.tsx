'use client';

import { useState, useEffect } from 'react';
import { Calendar, FileText, ExternalLink } from 'lucide-react';
import { Hero, HeroContent } from '@/components/hero';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { apiClient } from '@/lib/api';
import { NewsSkeleton } from '@/components/news-skeleton';
import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  date: string;
  imageUrl: string | null;
  content: string | null;
  externalLink: string | null;
  isPublished: boolean;
}

interface DownloadableContentItem {
  id: string;
  title: string;
  description: string | null;
  fileUrl: string;
  fileName: string;
  fileType: string | null;
  fileSize: number | null;
  category: string | null;
  downloadCount: number;
  isActive: boolean;
}

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [downloadableContent, setDownloadableContent] = useState<DownloadableContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const [newsResponse, downloadsResponse] = await Promise.all([
        apiClient.getNewsPublic(),
        apiClient.getDownloadableContentPublic(),
      ]);
      setNewsItems(newsResponse.data || []);
      setDownloadableContent(downloadsResponse.data || []);
    } catch (err: any) {
      console.error('Error loading data:', err);
      setError('Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  const formatFileSize = (bytes: number | null) => {
    if (!bytes) return '';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  if (loading) {
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
            <NewsSkeleton />
          </SectionContent>
        </Section>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Hero>
          <HeroContent>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div className="flex flex-col">
                <h1 className="text-balance leading-tight">News &<br />Resources</h1>
              </div>
            </div>
          </HeroContent>
        </Hero>
        <Section className="py-24 lg:py-32">
          <SectionContent>
            <div className="text-center text-red-500">{error}</div>
          </SectionContent>
        </Section>
      </>
    );
  }

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
          {newsItems.length === 0 ? (
            <div className="text-center text-muted-foreground py-12">
              No news items available at the moment.
            </div>
          ) : (
            <div className="space-y-6">
              {newsItems.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {item.category && (
                            <Badge variant="secondary">{item.category}</Badge>
                          )}
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {formatDate(item.date)}
                          </div>
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                        {item.description && (
                          <CardDescription className="mt-2">{item.description}</CardDescription>
                        )}
                        {item.content && (
                          <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                            {item.content}
                          </p>
                        )}
                        {item.imageUrl && (
                          <div className="mt-4 relative w-full h-64 rounded-lg overflow-hidden">
                            <Image
                              src={item.imageUrl}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        {item.externalLink && (
                          <a
                            href={item.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Read more
                          </a>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </SectionContent>
      </Section>

      {downloadableContent.length > 0 && (
        <Section className="bg-muted py-24 lg:py-32">
          <SectionContent>
            <SectionHeader
              subtitle="Resources"
              title="Reports & Publications"
            />
            <div className="grid gap-6 md:grid-cols-2">
              {downloadableContent.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        {item.description && (
                          <CardDescription className="mt-2">
                            {item.description}
                          </CardDescription>
                        )}
                        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                          {item.fileSize && (
                            <span>{formatFileSize(item.fileSize)}</span>
                          )}
                          {item.category && (
                            <Badge variant="outline">{item.category}</Badge>
                          )}
                        </div>
                        <a
                          href={item.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline"
                          onClick={async () => {
                            // Increment download count
                            try {
                              const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';
                              await fetch(`${API_URL}/downloadable-content/public/${item.id}/download`, {
                                method: 'POST',
                              });
                            } catch (err) {
                              console.error('Failed to increment download count:', err);
                            }
                          }}
                        >
                          <FileText className="h-4 w-4" />
                          Download {item.fileName}
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </SectionContent>
        </Section>
      )}

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
