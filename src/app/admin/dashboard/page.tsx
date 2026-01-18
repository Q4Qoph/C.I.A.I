'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Image, Newspaper, FileDown } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage gallery, news, and downloadable content for the CIAI website
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Image className="h-5 w-5" />
              Gallery
            </CardTitle>
            <CardDescription>
              Manage gallery images displayed on the website
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/dashboard/gallery">
              <Button className="w-full">Manage Gallery</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Newspaper className="h-5 w-5" />
              News
            </CardTitle>
            <CardDescription>
              Create and manage news articles and announcements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/dashboard/news">
              <Button className="w-full">Manage News</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileDown className="h-5 w-5" />
              Downloads
            </CardTitle>
            <CardDescription>
              Manage downloadable files and resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/dashboard/downloads">
              <Button className="w-full">Manage Downloads</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
